import { authToken } from "@/store/user.atom";
import { useStore } from "@nanostores/react";
import { useLocalStorage } from "usehooks-ts";
import { useEffect } from "react";

export default function useUser() {
    const token = useStore(authToken)
    const [user, setUser] = useLocalStorage("thevalleyuser", null)

    return {
        user,
        setUser,
        token
    }
}