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
            key={v}
            href="/tags/v"
            className="text-xs no-underline rounded-md m-2 px-2 py-1 text-white bg-blog-primary-color hover:opacity-80"
          >
            我是标签
          </Link>
        ))}
      </div>
    </>
  );
}
