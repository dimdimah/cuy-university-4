import React from "react";
import Link from "next/link";
import InputSearch from "../Search/InputSearch";

const Navbar = () => {
  return (
    <header className="bg-hue-accent">
      <div className="flex flex-col justify-between gap-2 p-4 md:items-center md:flex-row">
        <Link href={"/"} className="text-2xl font-bold">
          Anime List
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
