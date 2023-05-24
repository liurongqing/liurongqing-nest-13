"use client";

import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { Divider } from "@/components";

export default function Page() {
  const allTags: any = allPosts.map((post) => post.tags);
  const tags = allTags.flat(Infinity).filter(Boolean);
  const tagsCountMap = tags.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});

  return (
    <>
      <Divider />
      <div className="flex flex-wrap mt-2">
        {Object.keys(tagsCountMap).map((k) => (
          <div className="mr-2 rounded px-2 py-1 sm:mr-4 hover:bg-gray-100">
            <Link
              key={k}
              href={`/tags/${k}`}
              className="text-base no-underline text-blue-500 hover:text-blue-600"
            >
              {k}
              <span className="text-gray-700">（{tagsCountMap[k]}）</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
