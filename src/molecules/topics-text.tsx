export default function TopicText({
  title,
  created,
  numOfPost,
}: {
  title: string;
  created: string;
  numOfPost: number;
}) {
  return (
    <div className="flex justify-between gap-3 items-center ">
      <div>
        <h1 className="font-semibold text-[#212630]">{title}</h1>
        <p className="font-medium text-[#5A6F8C] flex items-center">
          created {created} ago{" "}
          <span className="bg-[#EFFAF5]  rounded-[40px] block text-[#227a5f] text-sm px-1">
            <i className="ph ph-chat-circle" />
            {numOfPost} posts
          </span>
        </p>
      </div>

      <div>
        <i className="ph ph-dots-three text-xl" />
      </div>
    </div>
  );
}
