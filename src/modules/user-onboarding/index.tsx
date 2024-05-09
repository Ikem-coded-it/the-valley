import Modal from "@/components/user-onboarding/modal";
import Login from "./login";
import About from "./about";
import { StyledModalBackground } from "@/components/user-onboarding/styles";
import { useApp } from "@/context/app";

export default function Onboarding() {
    const { onboarding } = useApp();

    const render = (step) => {
        switch(step) {
            case"login":
                return(
                    <Modal>
                        <Login/>
                    </Modal>
                )

            case "about":
                return(
                    <Modal>
                        <About/>
                    </Modal>
                )

            default:
                null
        }
    }

    return !!onboarding ? (
        <StyledModalBackground>
            {render(onboarding)}
        </StyledModalBackground>
    ) : null
}