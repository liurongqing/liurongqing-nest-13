import { allPages } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const a =  allPages.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
  console.log("a", { a });
  return a;
}

export default function Page({ params }: { params: { slug: string } }) {
  console.log("params", { params });
  const post = allPages.find((post) => post._raw.flattenedPath === params.slug);

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

// "use client";

// import { Divider } from "@/components";
// import { useMDXComponent } from "next-contentlayer/hooks";
// import {
//   allPosts,
//   Post,
//   Page,
//   allPages,
//   isType,
//   allDocuments,
// } from "contentlayer/generated";
// import PageMdx from "./page.mdx";

// export default function Page() {
//   // const MDXContent = useMDXComponent(PageMdx);
//   console.log("allPages", { allPages });
//   return (
//     // <MDXWrapper>
//     //   <PageMDX />
//     // </MDXWrapper>
//     <>
//       <Divider />
//       {/* <MDXContent /> */}
//       <div>关于我</div>
//       <div>haha</div>
//     </>
//   );
// }
