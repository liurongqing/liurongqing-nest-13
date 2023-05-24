"use client";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { Pagination, Input } from "@/components";
import { pageSize } from "@/config";
import { allPosts, Post } from "contentlayer/generated";
import { useState, useTransition } from "react";

function PostCard(post: Post) {
  // console.log("post", post.tags);
  return (
    <div className="flex flex-wrap py-4 items-start">
      <time dateTime={post.date} className="text-gray-500 w-full sm:w-40">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="flex flex-col flex-1 ml-0 sm:ml-10">
        <h2 className="text-2xl leading-8 m-0 p-0">
          <Link
            className="no-underline font-bold text-gray-800 hover:text-blue-500"
            href={post.url}
          >
            {post.title}
          </Link>
        </h2>
        <div className="flex flex-wrap gap-3">
          {post?.tags?.map((tag) => (
            <Link
              key={tag}
              className="no-underline font-semibold  text-blue-500 hover:text-blue-600"
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <div className="mt-3 text-gray-500">{post.summary}</div>
      </div>
    </div>
  );
}

export function PageList({ current = 1, tag = null }) {
  const [searchValue, setSearchValue] = useState(null);
  const [isPending, startTransition] = useTransition();

  const skip = (current - 1) * pageSize;

  let posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  // console.log("tag", { tag });
  if (tag) {
    // 如果根据 tag 搜索的
    posts = posts.filter((post) => post?.tags?.includes?.(tag));
  } else if(!searchValue){
    // 有搜索词的时候不分页
    posts = posts.slice(skip, skip + pageSize);
  }

  if (searchValue) {
    posts = posts.filter((post: Post) => {
      const searchContent = post.title + post.summary + post?.tags?.join(" ");
      return searchContent.toLowerCase().includes(searchValue);
    });
  }

  async function handleChange(value) {
    startTransition(() => {
      setSearchValue(value);
    });
  }

  console.log("ispen", isPending);

  return (
    <>
      <div className="mb-2 sm:mb-4">
        <Input handleChange={handleChange} />
      </div>
      {posts?.length === 0 && <span className="text-gray-800">No posts found</span>}
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      {/* 至少二页才显示分页 */}
      {allPosts?.length > pageSize && !tag && !searchValue && (
        <Pagination total={allPosts?.length ?? 0} current={current} />
      )}
    </>
  );
}
