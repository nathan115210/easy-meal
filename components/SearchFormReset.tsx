"use client";

import Link from "next/link";

import { X } from "lucide-react";

const SearchFormReset = ({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) => {
  return (
    <Link
      href={"/"}
      className={`!important flex items-center justify-center bg-black text-white ${className ?? "search-btn"}`}
    >
      {label ?? <X className="size-5" />}
    </Link>
  );
};
export default SearchFormReset;
