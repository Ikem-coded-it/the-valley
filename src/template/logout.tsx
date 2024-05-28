import FullScreenLoader from "@/components/loader"
import { useNavigate } from "react-router-dom";
import { authToken, saveUser } from "@/store/user.atom";
import { Link } from "react-router-dom";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import ApplicationRoutes from "@/config/routes";
import authService from "../services/auth.service";
import { toast } from "react-toastify";

export default function LogoutPage() {
    const navigate = useNavigate();
    const [error, setError] = useState(null)

    const logout = async () => {
      try {
        // const response = await authService.logout()
        // if(response.status == 200) {
          authToken.set({})
          saveUser({})
          navigate(ApplicationRoutes.HOME)
        // } else {
        //   toast.error("Something went wrong")
        // }
      } catch (error) {
        setError(error)
        console.log(error)
      }
    }

    useEffect(() => {
      logout()
    }, [])

    return(
        <main className="h-screen w-screen flex justify-center items-center bg-[#FFFFFF]">
            {
              error ? (
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="text-red-500 text-lg">Something went wrong</p>
                  <Link to={ApplicationRoutes.HOME}>
                      <Button text="Go back home"/>
                  </Link>
                </div>
              ) : (
                <FullScreenLoader text="logging out..."/>
              )
            }
        </main>
    )
}