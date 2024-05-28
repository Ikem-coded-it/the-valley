import Button from "@/components/button";
import PostInputBox from "@/molecules/home/post-input-box";
import SinglePageCommunitiesHeader from "@/organisms/Communities/single-communities-header";
import SingleCommunitiesSideBar from "./sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/utils/util";
import Posts from "@/organisms/home/posts";
import { useNavigate, useParams } from "react-router-dom";
import { community } from "@/services/community.service";
import FullScreenLoader from "@/components/loader";
import { useCommunities } from "@/context/Communities";
import Overlay from "@/components/overlay";
import TextEditor from "@/components/text-editor";
import useUser from "@/hooks/useUser";
import { useOnboarding } from "@/context/Onboarding";
import { toast } from "react-toastify";

export default function SingleCommunities() {
  const { user } = useUser();
  console.log("my user", user);
  const { setOnboarding } = useOnboarding();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const { communityData, setCommunityData } = useCommunities();

  console.log(communityData);
  // const navigate = useNavigate();

  const { id } = useParams();
  // const id = params.get.i

  useEffect(() => {
    (async () => {
      const response = await community.show(id);

      setCommunityData(response);
      console.log(communityData);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1027) {
      // setToggle(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-full">
          <FullScreenLoader />
        </div>
      ) : (
        <div className="w-full">
          <Button
            text="Back"
            icon={<i className="ph ph-caret-left   #5A6F8C" />}
            className="bg-white   text-[#5A6F8C]"
            onClick={() => (window.location.href = "/communities")}
          />

          <div>
            <SinglePageCommunitiesHeader
              backgroundUrl={communityData.backgroundUrl}
              communityName={communityData.communityName}
              members={communityData.noOfMembers}
            />
          </div>

          <div className="flex flex-col">
            {/* <div className=" border border-[#227A5F] flex justify-end   self-end relative z-20 h-[30px] mt-4 ">
          <i
            className="ph ph-list  text-2xl"
            role="button"
            onClick={() => setToggle(!toggle)}
          />
        </div> */}

            <div className="flex justify-between gap-4  my-4 relative">
              <div
                className={cn("w-full lg:max-w-[695px] flex flex-col gap-4")}
              >
                <div
                  role="button"
                  onClick={() => {
                    if (Object.entries(user).length < 1) {
                      setOnboarding("login");
                      return;
                    }
                    if (!communityData.user.some((x) => x.id === user.id)) {
                      toast.warn("You must be a member to post");
                      return;
                    }
                    setShow(true);
                  }}
                >
                  <PostInputBox />
                </div>
                <Posts
                  communityPost={communityData.communityPost}
                  showReal={true}
                />
              </div>
              <section
                className={`hidden lg:flex min-w-[296px] max-w-[296px] min-h-screen max-h-screen overflow-y-scroll flex-col sticky top-[50px] -bottom-[100px] -right-6 rounded-[8px]`}
              >
                <SingleCommunitiesSideBar />
              </section>
              {/* <SingleCommunitiesSideBar
            className={cn("absolute right-0 invisible", {
              ["visible"]: toggle,
            })}
          /> */}
            </div>
          </div>
        </div>
      )}

      {show && (
        <Overlay>
          <TextEditor setShow={setShow} />
        </Overlay>
      )}
    </>
  );
}
