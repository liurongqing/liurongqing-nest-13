"use client";

import { Pagination } from "@/components/Pagination";
import PageMDX from "./page.mdx";
import { MDXWrapper } from "@/components/MDXWrapper";

export default function Page() {
  return (
    <MDXWrapper>
      <PageMDX />
      <Pagination total={100} current={1} />
    </MDXWrapper>
  );
}
