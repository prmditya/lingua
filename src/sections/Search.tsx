import { IoSearchOutline } from "react-icons/io5"
import { useState } from "react"
import { T_handleSearch } from "../constants/constants";

function Search({ handleSearch }: T_handleSearch) {
  const [query, setQuery] = useState<string>("");

  return (
    <section className="my-6">
      <div className="flex items-center  rounded-[10px] bg-[#EAEAEA] dark:bg-[#323232] dark:text-white hover:shadow-md transition-all duration-300 ease-in-out">
        <input
          className="ml-[15px] my-[10px] font-semibold bg-transparent focus:outline-none w-full  mr-1"
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        <button className="ml-auto mr-[10px]" onClick={() => handleSearch(query)}>
          <IoSearchOutline className=" text-primary" size={20} />
        </button>
      </div>
    </section>
  )
}

export default Search