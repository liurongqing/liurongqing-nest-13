// "use client";
// import { Pagination } from "@/components/Pagination";
// import PageMDX from "./page.mdx";
import { Suspense } from "react";
// import { MDXWrapper } from "@/components/MDXWrapper";
// import { getAllPosts } from "@/lib/getPostsFilePaths";
// import { useEffect } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Page() {
  // console.log(123);
  // useEffect(() => {
  //   // getAllPosts([]);
  // }, []);
  return (
    <>
      <div>
        <div className="flex">
          <div>2022-10-22</div>
          <div>
            <div>title</div>
            <div>descript</div>
          </div>
          {/* <Suspense fallback={<>Loading...</>}> */}
          {/* <MDXRemote /> */}
          {/* <h1>123</h1> */}
          {/* </Suspense> */}
        </div>
      </div>
      {/* <Pagination total={100} current={1} /> */}
    </>
  );
}

// export const getStaticProps = async () => {
//   const posts = getAllPosts([
//     "title",
//     "slug",
//     "date",
//     "description",
//     "thumbnail",
//   ]);
//   console.log("posts", { posts });

//   // retunr the posts props
//   return { props: { posts } };
// };
