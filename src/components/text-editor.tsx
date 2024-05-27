import { useCommunities } from "@/context/Communities";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Field, Form, Formik } from "formik";
import { editorTabs } from "@/store/editor-tabs";
import { cn } from "@/utils/util";
import { useState } from "react";
import Button from "./button";
import { community } from "@/services/community.service";

export default function TextEditor({ ...props }) {
  const { communityData, setCommunityData } = useCommunities();

  const [activeTab, setActiveTab] = useState("Post");

  const initialValues = {
    post: "",
    image: "",
    link: "",
    user: "Great",
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Post":
        return <Editor initialValues={initialValues} />;

      case "Image":
        return <h1>Image</h1>;

      case "Link":
        return <h1>Attach link</h1>;

      case "Polling":
        return <h1>Polling</h1>;
    }
  };

  console.log("communityData", communityData);

  return (
    <>
      <div className="bg-white w-full   max-w-[950px]">
        <div className="flex justify-end p-4">
          <i
            className="ph ph-x text-2xl"
            role="button"
            onClick={() => props.setShow(false)}
          />
        </div>
        <ul className="flex w-full items-center justify-between">
          {editorTabs.map((x) => {
            return (
              <div
                className={cn(
                  "flex items-center gap-3 p-4  justify-center w-full max-w-[200px]",
                  {
                    ["border-b border-[#227A5F]"]: x.tab === activeTab,
                  }
                )}
                onClick={() => setActiveTab(x.tab)}
                role="button"
              >
                <i className={cn(`${x.icon}`)}></i>
                <li>{x.tab}</li>
              </div>
            );
          })}
        </ul>

        {renderContent()}
      </div>
    </>
  );
}

const Editor = ({ ...props }) => {
  const { communityData } = useCommunities();

  const handleSunbmit = (data) => {
    (async () => {
      await community.post(
        communityData.id,
      
        data
      );
      // window.history.back();
    })();

    console.log(data);
  };

  return (
    <div className="my-4 px-4 ">
      <Formik initialValues={props.initialValues} onSubmit={handleSunbmit}>
        <Form className="w-full">
          <Field
            name="title"
            className="border w-full p-4"
            placeholder="Title"
          />

          <div className="mt-8">
            <Field
              as="textarea"
              name="post"
              className="block bg-white w-full rounded border min-h-[300px] p-4  resize-none"
              placeholder="Create a post"
            />
          </div>

          <div className="flex justify-end items-center gap-4 mt-4">
            <Button
              text="Save Draft"
              className="bg-[#EBEEF3] text-[#8094B0] w-full max-w-[150px] rounded-[40px]"
            />
            <Button
              text="Post"
              className="bg-[#227A5F] text-white     w-full max-w-[150px] rounded-[40px] "
              type="submit"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
