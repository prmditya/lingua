import { GoLinkExternal } from "react-icons/go";

function Footer({ sourceUrls }: { sourceUrls: string | null | undefined }) {
  return (
    <footer className="bottom-0 w-full pb-[17px] ">
      <div className="h-[1px] w-full bg-black opacity-20 dark:bg-white"></div>
      {sourceUrls !== undefined ? (
        <p className=" mt-[17px] text-sm text-secondary">
          Source{" "}
          <a href="" className="ml-2 text-text underline dark:text-white">
            {sourceUrls}
          </a>
          <GoLinkExternal className="ml-2 inline" />
        </p>
      ) : (
        <p className="mt-[17px] text-sm text-secondary">
          {new Date().getFullYear()} &copy; Lingua.
        </p>
      )}
    </footer>
  );
}

export default Footer;
