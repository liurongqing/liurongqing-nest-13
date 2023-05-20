import { MDXWrapper } from "@/components/MDXWrapper";
// import PageMDX from "./page.mdx";
export default function Page({ params }) {
  console.log("params001", params);
  return (
    // <MDXWrapper>
    //   <PageMDX />
    // </MDXWrapper>
    <h1>123</h1>
  );
}

// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json());
//   const posts = [{ slug: "test" }, { slug: "test2" }];

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
