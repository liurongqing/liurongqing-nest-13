import Link from "next/link";

export const Pagination = ({ total, current }) => {
  const prevPage = current > 1;
  const nextPage = current < total;

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            rel="previous"
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={current - 1 === 1 ? `/blog/` : `/blog/page/${current - 1}`}
          >
            <button rel="previous">Previous</button>
          </Link>
        )}
        <span>
          {current} of {total}
        </span>
        {!nextPage && (
          <button
            rel="next"
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${current + 1}`}>
            <button rel="next">Next</button>
          </Link>
        )}
      </nav>
    </div>
  );
};
