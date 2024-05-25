import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateTime } from "luxon";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  } else {
    return str.substring(0, num) + "...";
  }
};

export const isObjectEmpty = (obj: Object | null) => {
  return Object.keys(obj ?? {}).length === 0;
};

export const formatRelativeTime = (date) => {
  const now = DateTime.now();

  const diff = now
    .diff(DateTime.fromISO(date), [
      "years",
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
    ])
    .toObject();

  if (diff.years > 0) {
    return `${Math.floor(diff.years)}yrs`;
  } else if (diff.months > 0) {
    return `${Math.floor(diff.months)}mo `;
  } else if (diff.days > 0) {
    return `${Math.floor(diff.days)}d `;
  } else if (diff.minutes < 30) {
    return `${Math.floor(diff.minutes)}mins `;
  } else if (diff.hours > 0) {
    return `${Math.floor(diff.hours)}hrs `;
  } else {
    return `${Math.floor(diff.seconds)}secs `;
  }
};

export const base64Url = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = reject;
  });
};
