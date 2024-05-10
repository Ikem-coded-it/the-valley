import { cn } from "@/utils/util";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function TextWithNum({
  text,
  url,
  num,
}: {
  text: string;
  url: string;
  num: number | string;
}) {
  const location = useLocation();

  return (
    <div
      className={cn([
        "flex gap-3 items-center  border-b-[2px]  px-4 pb-4 w-full ",
        {
          ["border-b-[#227a5f]"]: location.pathname === url,
        },
      ])}
    >
      <Link
        to={url}
        className={cn([
          "font-semibold",
          {
            ["text-[#227a5f]"]: location.pathname === url,
          },
        ])}
      >
        {text}
      </Link>

      <div
        className="bg-[#effaf5] text-[#227a5f] rounded-[83px] p-2"
        onClick={() => console.log(location.pathname, url)}
      >
        {num}
      </div>
    </div>
  );
}
