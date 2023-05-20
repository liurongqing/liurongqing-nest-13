"use client";

import { Pagination } from "@/components/Pagination";
import PageMDX from "./page.mdx";
import { MDXWrapper } from "@/components/MDXWrapper";

export default function Page() {
  console.log(123);
  return (
    <>
      <div>
        <div className="flex">
          <div >2022-10-22</div>
          <div>
            <div>title</div>
            <div>descript</div>
          </div>
        </div>
      </div>
      <Pagination total={100} current={1} />
    </>
  );
}
