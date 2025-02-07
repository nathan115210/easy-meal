"use client";

import Form from "next/form";
import React, { useEffect, useState } from "react";

import SearchFormReset from "@/components/SearchFormReset";

import { Search } from "lucide-react";

const SearchBar = ({ query }: { query?: string }) => {
  const [inputValue, setInputValue] = useState<string>(query || "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (query) {
      setInputValue(query);
    } else {
      setInputValue("");
    }
  }, [query]);

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        value={inputValue}
        onChange={handleChange}
        className="search-input"
        placeholder="Search..."
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button
          type="submit"
          className="!important flex size-[50px] items-center justify-center rounded-full bg-black text-white"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchBar;
