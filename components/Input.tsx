"use client";

import { AiOutlineSearch } from "react-icons/ai";

export const Input = ({ handleChange }) => {
  return (
    <div className="relative w-full sm:max-w-lg">
      <input
        placeholder="搜索文章"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        className={`
          block max-w-lg
          w-full
          
          bg-white 
          rounded-md 
          box-border
          border
          border-solid
          border-gray-300
          px-4
          py-2
          text-gray-900
          focus:border-blue-500
          after:border-0
          before:border-0
          outline-none
          transition
        `}
      />
      <AiOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
};
