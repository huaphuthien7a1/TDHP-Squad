import { ChildProps } from "postcss";
import React, { useState } from "react";

const SearchBar: React.FC<any> = (props: any) => {
  const handleSearch = (e: any) => {
    e.preventDefault();
    props.getSearchValue({ value: e.target.search.value });
  };
  return (
    <div className="flex justify-center">
      <div className="xl:w-96">
        <form
          onSubmit={(e) => handleSearch(e)}
          className="input-group relative flex items-stretch w-full"
        >
          <input
            type="search"
            name="search"
            className="rounded-l-lg form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="rounded-r-lg btn inline-block px-6 py-2.5 bg-slate-800 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="submit"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
