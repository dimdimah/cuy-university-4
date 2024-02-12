import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-5 text-hue-primary">
      <button
        onClick={handlePrevPage}
        className="transition-all hover:text-hue-accent"
      >
        {"<"} Prev
      </button>
      <p className="md:text-lg text-md">
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className="transition-all hover:text-hue-accent"
      >
        Next {">"}
      </button>
    </div>
  );
};

export default Pagination;
