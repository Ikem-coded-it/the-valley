import { Link } from "react-router-dom";

export default function DirectoryCard(props: {
  imgUrl: string;
  fullName: string;
  role: string;
}) {
  return (
    <Link className="border border-[white]  h-[300px] relative" to={"#"}>
      <div className="h-full absolute">
        <img
          src={props.imgUrl}
          alt="directory card image"
          className="h-full object-cover brightness-[0.6] "
        />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end p-4">
        <p className="text-white font-medium hover:text-[#227a5f]  transition-all">
          {props.fullName}
        </p>
        <p className="text-white font-medium text-sm hover:text-[#227a5f] transition-all">
          {props.role}
        </p>
      </div>
    </Link>
  );
}
