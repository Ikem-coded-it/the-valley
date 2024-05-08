import DirectoryCard from "@/molecules/directory/directory-card";
import { ReactNode } from "react";

export default function GridLayout({
  arr,
}: {
  children?: ReactNode;
  arr?: any;
}) {
  return (
    <div className="grid grid-cols-3 bg-white p-4">
      <DirectoryCard
        imgUrl="https://s3-alpha-sig.figma.com/img/ef21/5aa5/234c3287debe5048cb49863f4b2fb09d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5tlbaqTr46Yk1KuVHIq-KlOOgSyr0Jtj5b7dUJeq349-8MXXTb0dqnXLZSzsumdyLgekbhvFnO-HaF0U9ORgTwZqfb-ru2~YeQwodCC2pT5k8vv37uXe63LWylzOHHIJaBmtzKpIEPCv5YjCORFQnOg7J4vFp7sMdH90CLjcdQoV0CUZ70yDuhVgIWQeE9Tp1Mx00Ui1z7mTywYiXHrnzpDj6QEQsAn13b3Eyx3LjjP1s3GX7RAhDsGxetOwgfYSunt1UpgoxXq~UUaa-5gHXjjlSxqVO~WF0xgFbz04nv6m8scaFu38312-KYVFdvBTD8sY4dfvhukvB2OOUjsRw__"
        fullName="Chance Vaccaro"
        role="CEO Asytra group"
      />
      <DirectoryCard
        imgUrl="https://s3-alpha-sig.figma.com/img/b12e/e219/3ce0a6a4f9d2f420b2ec2a458396177f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8wJMUcH2tv7rAWYPtZw~52MVUChp8XOqG4cf60ZCGTzcMTUK7FJ7tN6eDP~diPejlDMI3XdMZkpPwG0NyhUMe8UT3amUA9bcRfv4aHEkAwNrLwP1o9ewqeHxaYesN4BzyLefMubRTuOH5J~3xkjY2k7unWpctzycaJMq9hTOklvSBtL~OW5X45Ly0NSwFs3JTgjyFx~aXQ3TRa0g4dOH4ttrsGgR3q6csMnOGU6oiSAVrgXs~1HQcJm~bkgMDBpF4g56c~aq~VcSDsWaMFl-Css~BHTpDFDqqn0W41tQa90r4CWlYxbvdzIfkj3WbjbBw~ZxGGtXmCdQqWuABB8dQ__"
        fullName="Omar Press"
        role="CMO Asytra group"
      />
      <DirectoryCard
        imgUrl="https://s3-alpha-sig.figma.com/img/6a67/f99b/432a756d1ebdc6151dac288cfa3ef1f7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=faDNAyF9ELlCRSjRG~FSrAP3GFv0vgO1q-jWGO3300S61IjrRSAOBuZNBOL~65tguGT4RkFl5wEeGX9W5k2N9WXw2lezhRJF99GON~m1jBja-LQ1NVNox7ZGLPdDpKh1V5hjeg-lE-APF6xWv1waTFzeEiPOH2-jorqMTP-ARiFY0-0RPj6agWGpbR4W2IyjUcMbdQFr9H4~vIT2BmrkYAlTRS96otiCSBL-ql87bRPuW--EM3F8oJcAjRmCBC~GFC0wawsPnSPeOsY~wbS0BSi-tbTb-XhTrLSmkaRvzNHth7gkvAKOzSBosFHhhEEdwCiNUk~4fliaCH2XldmZQA__"
        fullName="Alena Rhiel Madsen"
        role="CMO Asytra group"
      />
      <DirectoryCard
        imgUrl="https://s3-alpha-sig.figma.com/img/696b/27cc/eb1648739a4976116ef830d990e9e688?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7a7ldiLf-bLo4fgeVhnSkKefNjAR7ytdMmc4a5GcV8u7Q4jGhNGPuFwPbvJFEkmVIKpZCTz-HssEs7qxR4pEXXvyPKiKlnCgQp3a8W4BXjsB3UkILPIkNH6VlG88eFXF~vR8RSpJqE44CGFgSx6GuhHmECZYORHJJ224ia-GUKKfKEeV~JK10EiG~sWkrDv5bHJXmac5b3v61h5QN--JMMVL~EtUGV0oKVoGu4OQ7~Kr8N-5j26nTCmd8tx~QILxZ41195375Gd11gYl5zytMyLZeKBzeUIdxMc~QSqZB7XiTD1fKPDML6YVCyacIoxw1OgxmHxc8Sx42TI6PVeqg__"
        fullName="Lindsey Torff"
        role="CMO Asytra group"
      />
      <DirectoryCard
        imgUrl="https://s3-alpha-sig.figma.com/img/fbdd/33c8/c3ff5fc00b5ad657ac47c49bab18f178?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGSwi1Cq6lQO2630SBnzgN5w6iAIcHXPKcrVFp5Gt8qvEELsstZwzu2nRlSVLDFxvkVMXbEMOKFLYu~moT5R3jJdW3Z-jkMgZYhlvAmX-CFS0v4zIB2DitieK~euMs8azHbaXbcl~p1ws1X3enR7Ya-gz85ZbK~BHAjhA7aaUL7mI1ZzzWhiugDwylWe2p8s0C7o1uWWpZhdeJ9LaXJdCZ2VXILCzcKgH9DMKv6eOX7K~KBtrCys7woRlqCRMtcUrzbjyWYw3lbEpfmCN~t~77rUSfhtPyauTu1FsG7YTy7Nq4GAOjMTFUV278AUpkcAsDvcUJhNYEb4FMFkiDpz1Q__"
        fullName="Ahmad Calzoni"
        role="CMO Asytra group"
      />
      <DirectoryCard
        imgUrl="https://s3-alpha-sig.figma.com/img/8b3f/84ca/3130b5b5e260698e48a3e80147d5a60a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pw-rOdnXAQmhuA9hAq3kIK~hm4DQouILjQw9cbz2sG1vlJZid7GliVcbpokRBrv-t4nvBreU~KrXOUyDzNy681a-cwSRui0H0l5tKD3LJQQWHxVEkaVJroIyj8GNC3p2bg3uxosZefVM4Ctdf7HDY9CQw422zSMz3-GfBod9BXmhh4Ef6M7OhT8ZvdwxX3mr3JsUWGiqeSJ4XAifMWHwSQ2Vwba~6YZC8LgmJAKIdOZqs5j1~I2MVLKhOfCIiRzzx5RPR2Lu8TPhQN02zKJZjWZA97WtA4gKpXrHQWqltIB0O9sW~8zNrujpJBUUq0DacSwXBVfmowVI2DDonKfH0w__"
        fullName="Gretchen Franci"
        role="CMO Asytra group"
      />
    </div>
  );
}
