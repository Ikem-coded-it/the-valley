import { calculateHeight } from "@/organisms/discovery/responsive-height";
import { cn } from "@/utils/util";
import { Dispatch, SetStateAction, useRef, useState } from "react";

interface IFILTER {
  type?: string;
  value?: string;
  checkBoxValue: string;
  title?: string;
  subValues?: any[];
  id?: string;
  setCheckBoxValue: Dispatch<SetStateAction<string>>;
  className?: string;
}

export default function Filter({
  type,
  value,
  checkBoxValue,
  title,
  subValues,
  id,
  setCheckBoxValue,
}: IFILTER) {
//   const renderInput = () => {
//     switch (type) {
//       case "typical":
//         return (
//           <TCheckbox
//             value={value}
//             checkBoxValue={checkBoxValue}
//             id={id}
//             setCheckBoxValue={setCheckBoxValue}
//           />
//         );

//       case "dropdown":
//         return (
//           <DropDownCheckbox
//             title={title}
//             subValues={subValues}
//             checkBoxValue={checkBoxValue}
//             setChecboxValue={setCheckBoxValue}
//           />
//         );
//       default:
//         break;
//     }
//   };

  if (type === "typical") {
    return (
      <TCheckbox
        value={value}
        checkBoxValue={checkBoxValue}
        id={id}
        setCheckBoxValue={setCheckBoxValue}
      />
    );
  }

  return (
    <DropDownCheckbox
      title={title}
      subValues={subValues}
      checkBoxValue={checkBoxValue}
      setChecboxValue={setCheckBoxValue}
    />
  );
}

const TCheckbox = ({
  value,
  checkBoxValue,
  id,
  setCheckBoxValue,
  className,
}: IFILTER) => {
  return (
    <div className="flex items-center gap-3 mb-2">
      <input type="checkbox" id={id} value={value} className="hidden" />
      <label
        role="button"
        onClick={() => setCheckBoxValue(value)}
        htmlFor={id}
        className={cn("block w-[15px] h-[15px] border border-[#227a5f] ", {
          ["bg-[#227a5f]"]: value === checkBoxValue,
        })}
      />
      <label
        htmlFor={id}
        className={cn("text-sm", {
          [className]: className,
        })}
      >
        {value}
      </label>
    </div>
  );
};

const DropDownCheckbox = ({
  title,
  subValues,
  checkBoxValue,
  setChecboxValue,
}) => {
  const eRef = useRef(null);
  const parentRef = useRef(null);

  const [openSubNav, setOpenSubNav] = useState(false);
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center ">
        <p className="text-sm ">{title}</p>

        <i
          role="button"
          onClick={() => {
            setOpenSubNav(!openSubNav);
            calculateHeight({ eRef, parentRef, openSubNav });
          }}
          className={"ph ph-caret-down"}
        />
      </div>
      <div className="h-0 overflow-hidden" ref={parentRef}>
        <div ref={eRef} className="pl-4">
          {subValues.map((x, i) => {
            return (
              <TCheckbox
                key={i}
                value={x.value}
                checkBoxValue={checkBoxValue}
                id={x.id}
                setCheckBoxValue={setChecboxValue}
                className={"text-xs"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
