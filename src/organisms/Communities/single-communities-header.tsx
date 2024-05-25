import Button from "@/components/button";
import CustomImage from "@/components/img";
import { SingleCommunitiesNav } from "@/store/single-communities-nav";
import { cn } from "@/utils/util";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SinglePageCommunitiesHeader() {
  const [activeTab, setActiveTab] = useState("Your Groups");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white mt-4">
      <div className="h-[232px]">
        <CustomImage
          src="https://s3-alpha-sig.figma.com/img/c14f/125b/b9ec5294aeba39feaf8f00bd2c63d933?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIvNHtxQWlMhk8fF6-~n6vANPmlkjy~sx5RSmU5s6HoV4ctEB~3psZvxXSb891apSK-7C990ekkhKeT1xuL6gDH3IFH3~Gx8MKcZhZ1upeBEb7kgIBqwOJi5shG9O0bjtcMwk~4YPhDwGSVbgx8xX8YZ9~q3VBN6OJrtSTiglllPod2bWVxcHR4qxkBMUJ8-LR-B-SdDus33n6Dyge1DNAmUEYhx37rnuxGcd9uHh0fVjDfMNF-fuCbFqz84HMN1vjbdyByw0EJdqPoNmhSBB2kGs7dYtv~mbIZt5oQMCDhFy04otDtXHNCEhqSbnXkT0Helvb4KrwPD7WCySQRoCw__"
          className="h-full"
        />
      </div>

      <div className="px-4">
        <div className="bg-white  flex justify-between mt-8">
          <div>
            <h1 className="font-semibold text-lg sm:text-2xl ">
              {" "}
              Climate Change
            </h1>
            <p className="font-medium text-[#5A6F8C]">1200+ Member</p>
          </div>
          <div className="flex gap-2 items-center max-[420px]:flex-col">
            <Button
              text="Share"
              icon={<i className="ph ph-share" />}
              className="rounded-[40px] text-white bg-[#EBEEF3]  text-black"
            />

            <Button
              text="Joined"
              className="rounded-[40px] bg-[#B6E4D0] text-white"
            />
          </div>
        </div>

        <nav>
          <div className="border border-[#227A5F] flex justify-end  self-end relative z-20 h-[30px] my-4  w-max   max-[600px]:block hidden">
            <i
              className="ph ph-list  text-2xl "
              role="button"
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <ul
            className={cn(
              "flex gap-8  mt-8 items-center max-[600px]:flex-col max-[600px]:h-0 overflow-hidden",
              {
                ["max-[600px]:h-full"]: toggle,
              }
            )}
          >
            {SingleCommunitiesNav.map((x, i) => {
              return (
                <div key={i}>
                  {x.text === "More" ? (
                    <>
                      <li
                        className={cn(" p-2", {
                          ["border-b border-[#227A5F]"]: x.text === activeTab,
                        })}
                        onClick={() => setActiveTab(x.text)}
                      >
                        <Link
                          to={x.path}
                          className={cn("text-[#212630] font-medium", {
                            ["text-[#227A5F]"]: x.text === activeTab,
                          })}
                        >
                          {x.text}
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li
                      className={cn(" p-2", {
                        ["border-b border-[#227A5F]"]: x.text === activeTab,
                      })}
                      onClick={() => setActiveTab(x.text)}
                    >
                      <Link
                        to={x.path}
                        className={cn("text-[#212630] font-medium", {
                          ["text-[#227A5F]"]: x.text === activeTab,
                        })}
                      >
                        {x.text}
                      </Link>
                    </li>
                  )}
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
