import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { T_handleSearch } from "../constants/constants";

function Search({ handleSearch }: T_handleSearch) {
  const [query, setQuery] = useState<string>("");

  return (
    <section className="my-6">
      <div className="flex  items-center rounded-[10px] bg-[#EAEAEA] transition-all duration-300 ease-in-out hover:shadow-md dark:bg-[#323232] dark:text-white">
        <input
          className="my-[10px] ml-[15px] mr-1 w-full bg-transparent font-semibold  focus:outline-none"
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        <button
          className="ml-auto mr-[10px]"
          onClick={() => handleSearch(query)}
        >
          <IoSearchOutline className=" text-primary" size={20} />
        </button>
      </div>
    </section>
  );
}

export default Search;
