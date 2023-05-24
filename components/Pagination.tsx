import { pageSize } from "@/consts";
import Link from "next/link";

export const Pagination = ({ total, current }) => {
  const pages = Math.ceil(total / pageSize);
  const prevPage = current > 1;
  const nextPage = current < pages;

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <a rel="previous" className="cursor-not-allowed text-gray-500">
            Previous
          </a>
        )}
        {prevPage && (
          <Link
            rel="previous"
            className="no-underline text-gray-900 hover:text-blue-500"
            href={current - 1 === 1 ? `/posts/` : `/posts/page/${current - 1}`}
          >
            Previous
          </Link>
        )}
        <span>
          {current} of {pages}
        </span>
        {!nextPage && (
          <a rel="next" className="cursor-not-allowed text-gray-500">
            Next
          </a>
        )}
        {nextPage && (
          <Link
            className="no-underline text-gray-900 hover:text-blue-500"
            href={`/posts/page/${+current + 1}`}
          >
            Next
          </Link>
        )}
      </nav>
    </div>
  );
};
