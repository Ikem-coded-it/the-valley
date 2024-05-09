import { ReactNode } from "react";
import { StyledModal } from "./styles";
import { useApp } from "@/context/app";

export default function Modal({ children }: { children: ReactNode }) {
    const { setOnboarding } = useApp();
    return(
        <StyledModal>
            <div className="w-full flex justify-end">
                <button onClick={() => setOnboarding(null)}>
                    <i className="ph ph-x text-[24px] text-[#5A6F8C]"></i>
                </button>
            </div>

            { children }
        </StyledModal>
    )
}