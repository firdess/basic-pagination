import React from "react";

export default function Pagination({
  totalPosts,
  postPerPage,
  paginate,
  currentPage,
  setCurrentPage
}) {
  const totalPages = Math.ceil(totalPosts / postPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={handlePrev}>
        Previous
      </button>
      {pageNumbers.map((pageNum) => {
        return (
          <button
            className={currentPage === pageNum ? "active" : ""}
            onClick={() => paginate(pageNum)}
            key={pageNum}
          >
            {pageNum}
          </button>
        );
      })}
      <button disabled={currentPage === totalPages} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
