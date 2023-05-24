"use client";
/**
 * 博客详情页/具体内容页面
 */
import { allPosts } from "contentlayer/generated";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Divider } from "@/components";
import { comment } from "@/config";
import Link from "next/link";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <>
        <Script
          src="https://giscus.app/client.js"
          data-mapping={comment.mapping}
          data-repo={comment.repo}
          data-repo-id={comment.repoId}
          data-category={comment.category}
          data-category-id={comment.categoryId}
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme={comment.theme}
          data-lang={comment.lang}
          crossOrigin="anonymous"
          async
        />
      </>
      <div className="pt-6 pb-4 mb-4 border-0 border-b border-solid border-gray-300 text-center">
        <div className="font-semibold text-2xl">{post.title}</div>
        <time dateTime={post.date} className="text-gray-500 text-sm">
          {format(parseISO(post.date), "LLLL d, yyyy")} -{" "}
          {formatDistanceToNow(new Date(post.date))}
        </time>
        <div className="flex flex-wrap gap-3 justify-center">
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
      </div>
      <div className="markdown-body">
        <MDXContent />
      </div>
      <Divider />
      <div className="giscus"></div>
    </div>
  );
}
