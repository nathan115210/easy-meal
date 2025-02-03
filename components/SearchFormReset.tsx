"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const resetHandler = async () => {
    const formElement = document.querySelector("form .search-form") as HTMLFormElement;
    if (formElement) {
      formElement.reset();
    }
    const inputElement = document.querySelector(".search-input") as HTMLInputElement;
    if (inputElement) {
      inputElement.value = "";
    }

  };
  return (
    <button type={"reset"} onClick={resetHandler}>
      <Link href={"/"} className={"search-btn text-white"}>
        <X className="size-5" />
      </Link>
    </button>

  );
};
export default SearchFormReset;
