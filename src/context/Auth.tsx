import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import { useApp } from "./app";
import { isObjectEmpty } from "@/utils/util";
import { isTokenExpired } from "@/utils/user";
import { useLocation } from "react-router-dom";
import { authToken, userAtomMap } from "@/store/user.atom";

interface AuthContextType {
    isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const { user, token, setUser } = useUser()
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const { setOnboarding } = useApp()
    const { pathname } = useLocation()

    const checkLogin = () => {
        if((user && !isObjectEmpty(user)) || !isObjectEmpty(token)) {
            const expiredToken = isTokenExpired(token.expiresAt)
            if(expiredToken) {
                authToken.set({})
                userAtomMap.set(null)
                setUser(null)
                setIsLoggedIn(false)
                setOnboarding('login')
                return
            } else {
                setIsLoggedIn(true)
            }
        }
    }

    useEffect(() => {
        checkLogin()
    }, [pathname, token, user])

    const values = {
        isLoggedIn
    } as {isLoggedIn:boolean}
    return(
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    )
}