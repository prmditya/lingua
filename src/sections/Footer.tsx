import { GoLinkExternal } from "react-icons/go";

function Footer({ sourceUrls }: { sourceUrls: string | null | undefined }) {
  return (
    <footer className="  bottom-0 pb-[17px] w-full ">
      <div className="w-full h-[1px] bg-black dark:bg-white opacity-20"></div>
      {sourceUrls !== undefined ? (
        <p className="text-sm mt-[17px] text-secondary">
          Source{" "}
          <a href="" className="ml-2 text-text underline dark:text-white">
            {sourceUrls}
          </a>
          <GoLinkExternal className="ml-2 inline" />
        </p>
      ) : (
        <p className="text-sm mt-[17px] text-secondary">
          {new Date().getFullYear()} &copy; Lingua.
        </p>
      )}
    </footer>
  );
}

export default Footer;
