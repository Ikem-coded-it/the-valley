import Button from "@/components/button";
import { Link } from "react-router-dom";
import ApplicationRoutes from "@/config/routes";
import { ProgressBar } from 'primereact/progressbar';
        

export default function CompanyHealthCard({tasksCompleted}: {tasksCompleted: number}) {
    return(
        <div className="w-full flex flex-col gap-2 justify-start items-center px-4 py-6 bg-[#FFFFFF] rounded-[8px]">
            <div className="flex flex-col items-start justify-center gap-2 w-full">
                <h2 className="font-semibold text-lg text-[#212630]">
                Company Health Checklist
                </h2>

                <div className="w-full flex justify-between items-center gap-4">
                    <ProgressBar
                    color="#227A5F"
                    showValue={false}
                    className="grow shrink bg-[#EFFAF5] rounded-[16px] h-[13px]"
                    value={tasksCompleted*10}>
                    </ProgressBar>

                    <p className="font-semibold text-sm text-[#212630]">
                    {tasksCompleted}/10 Tasks
                    </p>
                </div>
            </div>

            <div className="w-full h-[80px] flex justify-center items-center">
                <Link to={ApplicationRoutes.COMPANY_HEALTH} className="w-full" >
                    <Button
                    text="See Checklist"
                    className="h-[48px] w-full text-white bg-secondary"
                    />
                </Link>
            </div>
        </div>
    )
}