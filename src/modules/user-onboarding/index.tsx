import Modal from "@/components/user-onboarding/modal";
import Login from "./login";
import About from "./about";
import Interests from "./interests";
import FounderType from "./founder-type";
import FundingStage from "./funding-stage";
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

            case "interests":
                return(
                    <Modal>
                        <Interests/>
                    </Modal>
                )

            case "founder-type":
                return(
                    <Modal>
                        <FounderType/>
                    </Modal>
                )

            case "funding-stage":
                return(
                    <Modal>
                        <FundingStage/>
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