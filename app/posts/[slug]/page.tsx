/**
 * 博客详情页/具体内容页面
 */
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

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
      <div className="pt-6 pb-4 mb-4 border-0 border-b border-solid border-gray-300 text-center">
        <div className="font-semibold text-2xl">{post.title}</div>
        <time dateTime={post.date} className="text-gray-500 text-sm">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <MDXContent />
    </div>
  );
}
