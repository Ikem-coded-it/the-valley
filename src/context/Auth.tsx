import { ReactNode, createContext, useContext } from "react";

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {

    const values = {

    }
    return(
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    )
}