import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string) => {
  //TODO: modify here when implementing localization
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const convertAuthorName = (name: string): string => {
  const nameArr = name.split(" ");
  if (nameArr.length === 1) {
    return name;
  } else {
    return `${nameArr[0]}+${nameArr[nameArr.length - 1]}`;
  }
};

export const getAuthorNameLetters = (name: string): string => {
  const nameArr = name.split(" ");
  if (nameArr.length === 1) {
    return name[0];
  } else {
    return `${nameArr[0][0]}${nameArr[nameArr.length - 1][0]}`;
  }
};

export const capitalizeWords = (str?: string): string => {
  if (!str) return "";
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const getFallbackProfileImageUrl = (name: string): string => {
  return `https://eu.ui-avatars.com/api/?name=${convertAuthorName(name)}&size=250`;
};

export const convertViews = (viewsAmount: number): string => {
  if (viewsAmount === 1) {
    return `${viewsAmount} view`;
  } else {
    return `${viewsAmount} views`;
  }
};
