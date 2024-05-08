export default function DirectoryCard(props: {
  imgUrl: string;
  fullName: string;
  role: string;
}) {
  return (
    <div className="border border-[white]  h-[300px] relative">
      <div className="h-full absolute">
        <img
          src={props.imgUrl}
          alt="directory card image"
          className="h-full object-cover"
        />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end p-4">
        <p className="text-white font-medium">{props.fullName}</p>
        <p className="text-white font-medium text-sm">{props.role}</p>
      </div>
    </div>
  );
}
