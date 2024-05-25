import Modal from "@/components/user-onboarding/modal";
import Login from "./login";
import About from "./about";
import Interests from "./interests";
import FounderType from "./founder-type";
import FundingStage from "./funding-stage";
import BusinessModel from "./business-model"
import Description from "./description"
import IndustryGroup from "./industry-group"
import Ethos from "./ethos"
import { StyledModalBackground } from "@/components/user-onboarding/styles";
import { useOnboarding } from "@/context/Onboarding";

export default function Onboarding() {
    const { onboarding } = useOnboarding();

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

            case "business-model":
                return(
                    <Modal>
                        <BusinessModel/>
                    </Modal>
                )

            case "description":
                return(
                    <Modal>
                        <Description/>
                    </Modal>
                )

            case "industry-group":
                return(
                    <Modal>
                        <IndustryGroup/>
                    </Modal>
                )

            case "ethos":
                return(
                    <Modal width={544} bg="#11362D">
                        <Ethos/>
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