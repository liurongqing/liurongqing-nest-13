"use client";

import PageMDX from "./page.mdx";
import { MDXWrapper } from "@/components/MDXWrapper";

export default function Page() {
  return (
    <MDXWrapper>
      <PageMDX />
    </MDXWrapper>
  );
}