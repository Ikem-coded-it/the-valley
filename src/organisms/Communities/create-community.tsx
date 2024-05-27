import Button from "@/components/button";
import { community } from "@/services/community.service";
import { base64Url } from "@/utils/util";
import { Field, Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import AWS from "aws-sdk";
window.global ||= window;
import S3 from "aws-sdk/clients/s3";
import { awsService } from "@/services/aws.service";
import { objectToFormData } from "@/utils/formatter";

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
      <div className="flex justify-end p-4 ">
        <i
          className="ph ph-x text-2xl"
          role="button"
          onClick={() => props.setShow(false)}
        />
      </div>

      <div className=" px-8 py-10">
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
  const [selectedFile, setselectedFile] = useState(null);
  const [uploading, setUploading] = useState(null);

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/svg",
    "application/pdf",
    "video/mp4",
    "video/quicktime",
    "audio/mpeg",
    "audio/wav",
    // Add more supported types as needed
  ];

  const uploadFile = async (file: any) => {
    setUploading(true);

    AWS.config.update({
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new S3({
      params: { Bucket: import.meta.env.VITE_AWS_BUCKET_NAME },
      region: import.meta.env.VITE_AWS_REGION,
    });

    const params = {
      Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
      Key: file.name,
      // Expires: 2000,
      Body: file,
    };

    try {
      const upload = await s3.upload(params).promise();
      // const upload = await s3.putObject(params).promise();
      // const data = await s3.getSignedUrl("getObject", params);
      console.log("file data", upload.Location);

      toast.success("File successfully uploaded");
      setUploading(false);
      return upload.Location;
    } catch (err) {
      toast.error("File could not be uploaded");

      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!allowedTypes.includes(file.type)) {
      toast.error("File type not allowed");
      return;
    }

    const params = {
      Bucket: "awsthevalleyfileuploadbucket",
      Key: file.name,
      Body: JSON.stringify(file),
    };
    setselectedFile(file);

    (async () => {
      const url = await uploadFile(file);
      // const url = await awsService.upload(params);
      value.backgroundUrl = url;
    })();
    console.log(file);
  };

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
          onChange={handleFileChange}
        />
        {/* <img
          src={
            "https://awsthevalleyfileuploadbucket.s3.eu-north-1.amazonaws.com/heroimage2.jpg"
          }
        /> */}
      </div>
    </>
  );
};
