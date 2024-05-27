import { useState } from "react";
import Button from "@/components/button";

export default function CommunityCard({ ...info }) {
  const [joined, setJoined] = useState(false);
  return (
    <div className="overflow-clip min-w-[263px] min-h-fit rounded-t-[16px] border-[1px] border-[#EBEEF3] bg-[#FFFFFF] flex flex-col justify-start items-start gap-4">
      <img
        src={info.imageURL}
        alt={info.title + " banner"}
        loading="lazy"
        className="min-h-[91px] max-h-[91px] flex-1 min-w-full max-w-full object-cover object-center rounded-t-[16px]"
      />

      <div className="h-fit w-full px-4 pb-4 pt-2 flex justify-between items-center bg-[#FFFFFF]">
        <div className="flex flex-col items-start justify-start">
          <h3 className="font-[500] text-[#212630] text-lg">{info.title}</h3>

          <p className="font-[500] text-sm text-[#5A6F8C]">
            {info.members} Members
          </p>
        </div>

        <Button
          text="Join"
          disabled={!!joined}
          className="bg-secondary text-white rounded-[40px] h-[36px]"
          onClick={() => {
            setJoined(!joined);
          }}
        />
      </div>
    </div>
  );
}
