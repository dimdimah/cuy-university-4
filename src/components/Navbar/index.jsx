import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-cyan-500">
      <div className="flex flex-col justify-between gap-2 p-4 md:flex-row">
        <Link href={"/"} className="text-2xl font-bold">
          Anime List
        </Link>
        <input placeholder="cari anime..." />
      </div>
    </header>
  );
};

export default Navbar;
