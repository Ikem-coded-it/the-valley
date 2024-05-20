import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}

export const truncateString = (str, num) => {
  if (str.length <= num) {
      return str;
  } else {
      return str.substring(0, num) + '...';
  }
}

export const isObjectEmpty = (obj: Object | null) => {
  return Object.keys(obj ?? {}).length === 0;
};