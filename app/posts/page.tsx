/**
 * 博客列表首页
 */
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { Divider, Pagination } from "@/components";
import {
  allPosts,
  Post,
  Page,
  allPages,
  isType,
  allDocuments,
} from "contentlayer/generated";

function PostCard(post: Post) {
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
          {["tag1", "tag2", "tag3"].map((tag) => (
            <Link
              className="no-underline font-semibold  text-blue-500 hover:text-blue-600"
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <div className="mt-3 text-gray-500">{post.description}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      <Divider />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      <Pagination total={allPosts?.length ?? 0} current={1} />
    </div>
  );
}
