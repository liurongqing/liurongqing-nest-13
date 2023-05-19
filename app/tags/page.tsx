"use client";

import Link from "next/link";
import { MDXWrapper } from "@/components/MDXWrapper";
import PageMDX from "./page.mdx";

export default function Page() {
  return (
    <>
      <MDXWrapper>
        <PageMDX />
      </MDXWrapper>
      <div className="flex flex-wrap mt-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
          <Link
            href="/tags/v"
            className="text-xs no-underline rounded-md m-2 px-2 py-1 text-white bg-purple-600 hover:bg-purple-700"
          >
            我是标签
          </Link>
        ))}
      </div>
    </>
  );
}
