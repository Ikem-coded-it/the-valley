import Button from "@/components/button";
import { community } from "@/services/community.service";
import { Field, Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import { communityValidationSchema } from "@/validators/community/create-community";
import { s3 } from "@/services/aws.service";

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function CreateCommunity(props: Props) {
  const [step, setStep] = useState(1);
  const [headerText, setHeaderText] = useState({
    title: "Tell us about your community",
    desc: "Please provide a name and description for your community",
  });

  const renderForm = (prop) => {
    switch (step) {
      case 1:
        return (
          <BasicInfo
            errors={prop.errors}
            touched={prop.touched}
            values={prop.values}
          />
        );

      case 2:
        return <CommunityStyle value={prop.values} />;
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

        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={communityValidationSchema}
          validateOnChange
          validateOnBlur
        >
          {(prop) => {
            return (
              <Form onSubmit={(e) => prop.handleSubmit(e)}>
                {renderForm(prop)}
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
                      <button
                        type={"button"}
                        disabled={!prop.isValid}
                        className="bg-[#227A5F] text-white  w-full max-w-[70px] rounded-[40px] font-semibold text-base flex items-center justify-center gap-2 h-[48px] border-[1px] px-4 py-3 transition duration-[.2s] "
                        onClick={() => {
                          if (prop.isValid) {
                            setStep(step + 1);
                            setHeaderText({
                              title: "Add your community banner",
                              desc: "Style your community",
                            });
                          }
                        }}
                      >
                        Next
                      </button>
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

const BasicInfo = (prop) => {
  return (
    <>
      <div className="relative max-w-[400px] my-8 ">
        <Field
          name="communityName"
          placeholder=" "
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-[#227A5F] peer border border-gray-300"
        />
        <label
          htmlFor="floatingInput"
          className="absolute border-gray-300 text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
        >
          Community name
        </label>

        {prop.errors.communityName && prop.touched.communityName ? (
          <small className="text-red-500">{prop.errors.communityName}</small>
        ) : null}
      </div>
      <div className="relative">
        <Field
          as="textarea"
          name="about"
          className="block bg-white w-full max-w-[400px] rounded-lg border min-h-[200px] p-4  resize-none focus:outline-none focus:border-[#227A5F] peer"
          placeholder=" "
        />
        <label className="absolute text-sm  text-gray-500 duration-300 px-2.5 pb-2.5 pt-4 top-0 transform -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2">
          Description
        </label>
        {prop.errors.about && prop.touched.about ? (
          <small className="text-red-500">{prop.errors.about}</small>
        ) : null}
      </div>
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

    const params = {
      Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
      Key: file.name,
      // Expires: 2000,
      Body: file,
    };
    const command = new PutObjectCommand(params);
    try {
      await s3.send(command);

      toast.success("File successfully uploaded");
      setUploading(false);
      return `https://${params.Bucket}.s3.${
        import.meta.env.VITE_AWS_REGION
      }.amazonaws.com/${params.Key}`;
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
