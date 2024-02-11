import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4">
      <h1 className="font-bold md:text-2xl text-md text-hue-primary">
        {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="items-center underline transition-all text-hue-primary hover:text-hue-accent md:text-xl text-md"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
