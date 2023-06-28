const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className="m-auto p-4">
        {pages.map((page) => (
          <li key={page}>
            <a className="m-auto p-4" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
