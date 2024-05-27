import FullScreenLoader from "@/components/loader";
import { useNavigate } from "react-router-dom";
import { authToken, saveUser } from "@/store/user.atom";
import { useEffect } from "react";
import useUser from "@/hooks/useUser";
import ApplicationRoutes from "@/config/routes";
import { useOnboarding } from "@/context/Onboarding";
import { isObjectEmpty } from "@/utils/util";
import { isTokenExpired } from "@/utils/user";
import Button from "@/components/button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "@/services/auth.service";

export default function AuthorizationPage() {
  const { setOnboarding } = useOnboarding();
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const state = params.get("state");
  const error = params.get("error");
  const { user, token } = useUser();

  const getLinkedInData = async () => {
    const payload = { code, state };

    if ((user && !isObjectEmpty(user)) || !isObjectEmpty(token)) {
      const expiredToken = isTokenExpired(token.expiresAt);

      if (!expiredToken) {
        setOnboarding(null);
        navigate(ApplicationRoutes.HOME);
        return;
      }
    }

    try {
      console.log("auth", payload);
      const { user, token } = await authService.login(payload);
      authToken.set(token);
      console.log("token", token);
      saveUser(user);
      navigate(ApplicationRoutes.HOME);
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getLinkedInData();
  }, []);

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-[#FFFFFF]">
      {error ? (
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-red-500 text-lg">Something went wrong</p>
          <Link to={ApplicationRoutes.HOME}>
            <Button text="Go back home" />
          </Link>
        </div>
      ) : (
        <FullScreenLoader />
      )}
    </main>
  );
}
