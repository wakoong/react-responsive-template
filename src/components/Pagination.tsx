import React from "react";

interface IPaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (page: number) => void;
}

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
}: IPaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          padding: "0",
          cursor: "pointer",
        }}
      >
        {pageNumbers.map((number) => (
          <li
            key={number}
            style={{
              padding: "1em",
              border: "1px solid black",
              listStyle: "none",
              color: "blue",
            }}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
