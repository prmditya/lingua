import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { T_toggleTheme } from "../constants/constants";
import { BiBook } from "react-icons/bi";

function Header({ toggleTheme }: T_toggleTheme) {
  return (
    <section className="flex justify-center items-center text-text dark:text-white">
      <BiBook size={40} className="mr-auto dark:text-secondary" />
      <h1 className="text-3xl font-bold color-primary">Lingua.</h1>
      <button className="ml-auto dark:text-secondary" onClick={toggleTheme}>
        <IoSunnyOutline size={40} className="sun" />
        <IoMoonOutline size={40} className="moon hidden" />
      </button>
    </section>
  );
}

export default Header;
