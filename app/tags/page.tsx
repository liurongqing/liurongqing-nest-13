"use client";

import { Divider } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Divider />
      <div className="flex flex-wrap mt-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
          <Link
            key={v}
            href="/tags/v"
            className="text-xs no-underline rounded-md m-2 px-2 py-1 text-white bg-blue-500 hover:bg-blue-600"
          >
            我是标签
          </Link>
        ))}
      </div>
    </>
  );
}
