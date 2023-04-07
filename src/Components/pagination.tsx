import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({
  pages = [1],
  cur = 1,
  nextPage,
  prevPage,
  setCur,
}: any) => {
  return (
    <div className="flex rounded-lg font-semibold">
      <button
        onClick={prevPage}
        className="h-12 border-2 border-r-0 border-white
                px-4 rounded-l-lg hover:bg-white text-white hover:text-white"
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {pages.map((pg: number) => (
        <button
          key={pg}
          onClick={setCur}
          className={`h-12 border-2 border-r-0  border-white
                w-12 text-white  ${cur === pg && "bg-white text-white"}`}
        >
          {pg}
        </button>
      ))}
      <button
        onClick={nextPage}
        className="h-12 border-2  border-white
                px-4 rounded-r-lg hover:bg-white hover:text-white text-white"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Pagination;
