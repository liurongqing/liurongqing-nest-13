"use client";

import { Pagination } from "@/components/Pagination";
import PageMDX from "./page.mdx";
import { MDXWrapper } from "@/components/MDXWrapper";

export default function Page() {
  console.log( 123 );
  return (
      <Pagination total={100} current={1} />
  );
}
