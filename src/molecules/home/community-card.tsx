import { useState } from "react";
import Button from "@/components/button";
import useUser from "@/hooks/useUser";
import { useOnboarding } from "@/context/Onboarding";
import { Link } from "react-router-dom";
import { community } from "@/services/community.service";

export default function CommunityCard({ ...info }) {
  const [joined, setJoined] = useState(false);

  const { user } = useUser();

  const { setOnboarding } = useOnboarding();

  const handleJoin = () => {
    (async () => {
      await community.join(info.id, user.id);
      // window.location.href = `/communities/${info.id}`;
    })();
  };

  return (
    <div className="overflow-clip min-w-[263px] min-h-fit rounded-t-[16px] border-[1px] border-[#EBEEF3] bg-[#FFFFFF] flex flex-col justify-start items-start gap-4">
      <Link to={`/communities/${info.id}`} className="w-full">
        <img
          src={info.imageURL}
          alt={info.title + " banner"}
          loading="lazy"
          className="min-h-[91px] max-h-[91px] flex-1 min-w-full max-w-full object-cover object-center rounded-t-[16px]"
        />
      </Link>

      <div className="h-fit w-full px-4 pb-4 pt-2 flex justify-between items-center bg-[#FFFFFF]">
        <Link to={`/communities/${info.id}`}>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-[500] text-[#212630] text-lg">{info.title}</h3>

            <p className="font-[500] text-sm text-[#5A6F8C]">
              {info.members} Members
            </p>
          </div>
        </Link>
        <Button
          text={info.joined ? "Joined" : "Join"}
          disabled={info.joined || !!joined}
          className="bg-secondary text-white rounded-[40px] h-[36px]"
          onClick={() => {
            console.log("user", user);
            if (Object.entries(user).length < 1) {
              setOnboarding("login");
              return;
            }
            handleJoin();

            setJoined(!joined);
          }}
        />
      </div>
    </div>
  );
}
