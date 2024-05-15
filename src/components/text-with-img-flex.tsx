interface ITEXTWITHIMGFLEX {
  img: string;
  title: string;
  created: string;
}

export default function TextWithImgFlex({
  img,
  title,
  created,
}: ITEXTWITHIMGFLEX) {
  return (
    <div className="flex gap-4">
      <div className="w-full max-w-[80px] h-[73px] ">
        <img
          src={img}
          alt="image with text by the side"
          className="w-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h1 className="font-semibold text-[#212630]">{title}</h1>
        <p className="font-medium text-[#5A6F8C]">created {created} ago</p>
      </div>
    </div>
  );
}
