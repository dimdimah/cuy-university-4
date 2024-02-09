import React from "react";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();

  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="font-bold md:text-2xl text-md">Paling Populer</h1>
        <Link
          href={"/populer"}
          className="items-center underline transition-all md:text-xl text-md"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 md:grid-cols-4 sm:grid-cols-3">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
