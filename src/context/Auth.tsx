import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import { useOnboarding } from "./Onboarding";
import { isObjectEmpty } from "@/utils/util";
import { isTokenExpired } from "@/utils/user";
import { useLocation } from "react-router-dom";
import { logout } from "@/store/user.atom";

interface AuthContextType {
    isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const { user, token, setUser } = useUser()
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const { setOnboarding } = useOnboarding()
    const { pathname } = useLocation()

    const checkLogin = () => {
        if((user && !isObjectEmpty(user)) || !isObjectEmpty(token)) {
            const expiredToken = isTokenExpired(token.expiresAt)
            if(expiredToken) {
                logout()
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
    }
    return(
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    )
}