import {
  menu,
  recentCommunities,
  recentChats,
  extraMenuOptions,
} from "@/store/menu";
import { cn } from "@/utils/util";
import Button from "../button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/Auth";
import { Dispatch, SetStateAction } from "react";
import useUser from "@/hooks/useUser";
import { useOnboarding } from "@/context/Onboarding";

export default function Sidebar({
  className,
  setShow,
}: {
  className: string;
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  const { pathname: active } = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <aside
      className={cn(
        "sidebar lg:min-w-[326px] xl:min-w-[376px] max-w-[376px] border-[1px] border-[#EBEEF3] pl-[15px] md:pl-[30px] lg:pl-[50px] xl:pl-[80px] py-6 bg-[#FFFFFF] flex flex-col items-start justify-start gap-6 overflow-y-auto transition duration-[.5s] ease-in-out z-40",
        className
      )}
    >
      {isLoggedIn && (
        <div className="flex lg:hidden justify-start items-center gap-4">
          <Button
            icon={<i className="ph ph-plus"></i>}
            text="Create Post"
            className="text-[#227A5F] text-base font-semibold border-[#227A5F] hover:bg-[#227A5F] hover:text-[#ffffff]"
          />

          <Button
            icon={
              <i className="ph ph-chat-circle-dots text-[#ADBACC] text-[20px]"></i>
            }
            className="text-base border-[#ADBACC]"
          />
        </div>
      )}

      <nav className="w-[256px] h-fit flex flex-col justify-start gap-12">
        <ul className="flex flex-col gap-2 items-start justify-start w-full">
          {menu.map((item) => {
            const activeLink = item?.path?.includes(active);
            return <MenuItem key={item.text} {...item} active={activeLink} />;
          })}
        </ul>

        {/* Recent communities section */}
        <ul className="flex flex-col gap-2 items-start justify-start w-full pr-2">
          <h2 className="font-semibold text-base text-[#8094B0] flex items-center gap-1 justify-start">
            Recent Communities
            <i className="ph ph-users"></i>
          </h2>
          {recentCommunities.map((item) => {
            return <MenuRecentItem key={item.text} {...item} />;
          })}
        </ul>

        {/* Recent chats section */}
        <ul className="flex flex-col gap-2 items-start justify-start w-full pr-2">
          <h2 className="font-semibold text-base text-[#8094B0] flex items-center gap-1 justify-start">
            Recent Chats
            <i className="ph ph-chat-circle-dots"></i>
          </h2>

          {recentChats.map((item) => {
            return <MenuRecentItem key={item.text} {...item} />;
          })}
        </ul>

        <ul className="flex flex-col gap-2 items-start justify-start w-full">
          {extraMenuOptions.map((item) => {
            if (item.text === "Create Community") {
              return <MenuItem key={item.text} {...item} action={setShow} />;
            }
            return <MenuItem key={item.text} {...item} />;
          })}
        </ul>
      </nav>
    </aside>
  );
}

function MenuItem({ ...props }) {
  const { user } = useUser();

  const { setOnboarding } = useOnboarding();

  return (
    <li className="h-[40px] w-full" role="button">
      {props.path ? (
        <Link
          to={props.path}
          className={cn(
            "w-full h-full flex justify-start items-center gap-2 pl-4 hover:bg-[#EFFAF5] hover:text-secondary text-[#212630] group",
            {
              "bg-[#EFFAF5]": props.active,
            }
          )}
        >
          {props.active ? (
            <img
              src={props.iconActive}
              alt={`${props.icon} menu link icon`}
              className="h-6 w-6 object-cover object-center"
            />
          ) : (
            <img
              src={props.icon}
              alt={`${props.icon} menu link icon`}
              className="h-6 w-6 object-cover object-center"
            />
          )}

          <p
            className={cn("font-semibold text-base hover:text-inherit", {
              "text-secondary": props.active,
            })}
          >
            {props.text}
          </p>
        </Link>
      ) : (
        <button
          className={cn(
            "w-full h-full flex justify-start items-center gap-2 pl-4 hover:bg-[#EFFAF5] hover:text-secondary text-[#212630] group",
            {
              "bg-[#EFFAF5]": props.active,
            }
          )}
          onClick={() => {
            if (!user) {
              setOnboarding("login");
              return;
            }
            props?.action(true);
          }}
        >
          {props.active ? (
            <img
              src={props.iconActive}
              alt={`${props.icon} menu link icon`}
              className="h-6 w-6 object-cover object-center"
            />
          ) : (
            <img
              src={props.icon}
              alt={`${props.icon} menu link icon`}
              className="h-6 w-6 object-cover object-center"
            />
          )}

          <p
            className={cn("font-semibold text-base hover:text-inherit", {
              "text-secondary": props.active,
            })}
          >
            {props.text}
          </p>
        </button>
      )}
    </li>
  );
}

function MenuRecentItem({ ...props }) {
  return (
    <li className="h-[40px] w-full">
      <Link
        to={props.path}
        className={cn(
          "w-full h-full flex justify-between items-center gap-2 pl-4 hover:bg-[#EFFAF5] hover:text-secondary text-[#212630] group"
        )}
      >
        <div className="flex justify-start items-center gap-2">
          <img
            src={props.icon}
            alt={`${props.icon} recent community avatar`}
            className="h-6 w-6 group-hover:fill-secondary rounded-[50%] object-cover object-center"
          />

          <p className="font-semibold text-base hover:text-inherit">
            {props.text}
          </p>
        </div>

        <button className="h-4 w-4">
          <i className="ph ph-x text-base text-[#5A6F8C]"></i>
        </button>
      </Link>
    </li>
  );
}
