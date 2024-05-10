import { MutableRefObject } from "react";

interface IRESPONSIVEHEIGHT {
  industryRef?: MutableRefObject<any>;
  regionRef?: MutableRefObject<any>;
  parentRef?: MutableRefObject<any>;
  eRef?: MutableRefObject<any>;
  openSubNav: boolean;
}

export const calculateHeight = ({
  industryRef,
  regionRef,
  parentRef,
  eRef,
  openSubNav,
}: IRESPONSIVEHEIGHT) => {
  if (industryRef?.current && regionRef?.current) {
    if (openSubNav) {
      const newHeight =
        industryRef.current.getBoundingClientRect().height +
        regionRef.current.getBoundingClientRect().height;

      parentRef.current.style.height = `${newHeight}px`;

      return newHeight;
    } else {
      parentRef.current.style.height = `0`;
    }
  } else {
    console.log("eREF");
    if (eRef.current && openSubNav) {
      parentRef.current.style.height = `${
        eRef.current.getBoundingClientRect().height
      }px`;
    } else {
      parentRef.current.style.height = "0";
    }
  }
};
