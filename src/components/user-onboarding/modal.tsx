import { ReactNode } from "react";
import { StyledModal } from "./styles";
import { useOnboarding } from "@/context/Onboarding";
import { useEffect } from "react";
import { cn } from "@/utils/util";

export default function Modal({ children, width, bg }: { children: ReactNode, width?: number, bg?: string }) {
    const { onboarding, setOnboarding } = useOnboarding();

    useEffect(() => {
        const modal = document.getElementById("modal");
        modal.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [children])

    return(
        <StyledModal id="modal" $width={width} $bg={bg}>
            <div className="w-full flex justify-end">
                <button onClick={() => setOnboarding(null)}>
                    <i className={cn(
                        "ph ph-x text-[24px] text-[#5A6F8C]",
                        {"text-[#F6F7F9]": onboarding === "ethos"}
                    )}></i>
                </button>
            </div>

            { children }
        </StyledModal>
    )
}