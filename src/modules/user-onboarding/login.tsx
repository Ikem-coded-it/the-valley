import Button from "@/components/button";
import { useApp } from "@/context/app";

export default function Login() {
    const { nextOnboardingStep } = useApp();
    const CLIENT_ID = import.meta.env['VITE_LINKEDIN_CLIENT_ID'];
    const REDIRECT_URI = import.meta.env['VITE_LINKEDIN_CALLBACK_URL'];
    const LINKED_URL = import.meta.env['VITE_LINKEDIN_URL']
    .replace(":clientId", CLIENT_ID)
    .replace(":redirectURI", encodeURIComponent(REDIRECT_URI))

    const handleLinkedinLogin = () => {
        // nextOnboardingStep()
        console.log("LINKED_URL",LINKED_URL);
        window.location.href = LINKED_URL
    }

    return(
        <div className="w-full flex flex-col justify-start items-center gap-8">
            <h1 className="font-semibold text-2xl text-[#3F4E65]">
            Login to your account
            </h1>

            <Button
            icon={<img src="/icons/linkedin.svg"/>}
            text="Continue with Linkedin"
            className="w-full bg-[#0E76A8] text-[#FFFFFF] text-base font-semibold"
            onClick={handleLinkedinLogin}
            />

            <p className="text-center font-[500] text-sm">
            By continuing, you agree to our <span className="font-semibold text-sm text-[#3F4E65]"><a href="">Agreements </a></span>
            and <span className="font-semibold text-sm text-[#3F4E65]"><a href="">Privacy Policy</a></span>
            </p>
        </div>
    )
}