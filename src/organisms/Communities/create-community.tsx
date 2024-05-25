import Button from "@/components/button";
import { community } from "@/services/community.service";
import { base64Url } from "@/utils/util";
import { Field, Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { Form } from "react-router-dom";

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function CreateCommunity(props: Props) {
  const [step, setStep] = useState(1);
  const [headerText, setHeaderText] = useState({
    title: "Tell us about your community",
    desc: "Please provide a name and description for your community",
  });

  const renderForm = (value) => {
    switch (step) {
      case 1:
        return <BasicInfo />;

      case 2:
        return <CommunityStyle value={value} />;
    }
  };

  const handleSubmit = (data) => {
    console.log(data);
    console.log("console here");

    (async () => {
      await community.store(data, "b47484b5-b3c3-4c51-964b-8e1c72f468e0");
      props.setShow(false);
    })();
  };

  return (
    <div className="bg-white w-full max-w-[700px] rounded-lg">
      <div className="flex justify-end p-4">
        <i
          className="ph ph-x text-2xl"
          role="button"
          onClick={() => props.setShow(false)}
        />
      </div>

      <div className=" p-4 py-10">
        <h1 className="text-lg sm:text-[32px] text-[#227A5F] mb-2 font-semibold">
          {headerText.title}
        </h1>
        <p>{headerText.desc}</p>

        <Formik initialValues={{}} onSubmit={handleSubmit}>
          {(prop) => {
            return (
              <Form onSubmit={(e) => prop.handleSubmit(e)}>
                {renderForm(prop.values)}
                <div className="flex items-center justify-between">
                  <div>
                    <small className="text-[#227a5f]">Step {step}</small>
                  </div>

                  <div className="flex justify-end items-center gap-4 mt-4">
                    {step > 1 ? (
                      <Button
                        text="Back"
                        className="bg-[#EBEEF3] text-[#8094B0] w-full max-w-[80px] rounded-[40px]"
                        onClick={() => setStep(step - 1)}
                      />
                    ) : (
                      <Button
                        text="Cancel"
                        className="bg-[#EBEEF3] text-[#8094B0] w-full max-w-[80px] rounded-[40px]"
                        onClick={() => props.setShow(false)}
                      />
                    )}

                    {step >= 2 ? (
                      <Button
                        text="Save"
                        className="bg-[#227A5F] text-white  w-full max-w-[70px] rounded-[40px] font-semibold text-base flex items-center justify-center gap-2 h-[48px] border-[1px] px-4 py-3 transition duration-[.2s] "
                        type="submit"
                      />
                    ) : (
                      <div
                        className="bg-[#227A5F] text-white  w-full max-w-[70px] rounded-[40px] font-semibold text-base flex items-center justify-center gap-2 h-[48px] border-[1px] px-4 py-3 transition duration-[.2s] "
                        onClick={() => {
                          setStep(step + 1);
                          setHeaderText({
                            title: "Add your community banner",
                            desc: "Style your community",
                          });
                        }}
                      >
                        Next
                      </div>
                    )}
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

// form components

const BasicInfo = () => {
  return (
    <>
      <Field
        name="communityName"
        placeholder="Community name"
        className="rounded-lg border border-[black] focus:border-[#227A5F] w-full max-w-[400px] p-2 my-8 "
      />
      <Field
        name="category"
        placeholder="Category"
        className="rounded-lg border border-[black] focus:border-[#227A5F] w-full max-w-[400px] p-2 mb-8 "
      />

      <Field
        as="textarea"
        name="about"
        className="block bg-white w-full max-w-[400px] rounded-lg border min-h-[200px] p-4  resize-none focus:outline-none border-[#227A5F]"
        placeholder="Description"
      />
    </>
  );
};

const CommunityStyle = ({ value }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full max-w-[400px] mt-8">
        <label htmlFor="bg">Banner</label>

        <div>
          <label htmlFor="bg" className="flex items-center gap-2">
            <i className="ph ph-image text-2xl" />
            <span>Add</span>
          </label>
        </div>
        <input
          id="bg"
          name="backgroundUrl"
          type="file"
          className="hidden"
          onChange={async (e) => {
            const res = await base64Url(e.target.files[0]);
            value.backgroundUrl = res;
          }}
        />
      </div>
    </>
  );
};
