import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="flex flex-wrap py-4 items-start border border-solid border-blue-700">
      <time
        dateTime={post.date}
        className="text-gray-500 w-full sm:w-auto border border-solid border-red-100"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="flex flex-col flex-1 ml-0 sm:ml-10 border border-solid border-red-900">
        <h2 className="text-2xl leading-8 m-0 p-0">
          <Link
            className="no-underline font-semibold text-gray-800 hover:text-blog-primary-color"
            href={post.url}
          >
            {post.title}
          </Link>
        </h2>
        <div className="flex flex-wrap gap-3">
          {["tag1", "tag2", "tag3"].map((tag) => (
            <Link
              className="no-underline font-semibold  text-blue-500 hover:text-blue-700"
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

  console.log("posts", { posts });

  return (
    <div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}

// // "use client";
// // import { Pagination } from "@/components/Pagination";
// // import PageMDX from "./page.mdx";
// import { Suspense } from "react";
// // import { MDXWrapper } from "@/components/MDXWrapper";
// // import { getAllPosts } from "@/lib/getPostsFilePaths";
// // import { useEffect } from "react";
// import { MDXRemote } from "next-mdx-remote/rsc";

// export default function Page() {
//   // console.log(123);
//   // useEffect(() => {
//   //   // getAllPosts([]);
//   // }, []);
//   return (
//     <>
//       <div>
//         <div className="flex">
//           <div>2022-10-22</div>
//           <div>
//             <div>title</div>
//             <div>descript</div>
//           </div>
//           {/* <Suspense fallback={<>Loading...</>}> */}
//           {/* <MDXRemote /> */}
//           {/* <h1>123</h1> */}
//           {/* </Suspense> */}
//         </div>
//       </div>
//       {/* <Pagination total={100} current={1} /> */}
//     </>
//   );
// }

// // export const getStaticProps = async () => {
// //   const posts = getAllPosts([
// //     "title",
// //     "slug",
// //     "date",
// //     "description",
// //     "thumbnail",
// //   ]);
// //   console.log("posts", { posts });

// //   // retunr the posts props
// //   return { props: { posts } };
// // };
