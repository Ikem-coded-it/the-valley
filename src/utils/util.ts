import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

export const goToTop = () => {
  window.scrollTo(0, 0)
}

export const truncateString = (str, num) => {
  if (str.length <= num) {
      return str;
  } else {
      return str.substring(0, num) + '...';
  }
}