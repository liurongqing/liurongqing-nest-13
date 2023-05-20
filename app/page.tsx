import { MDXRemote } from "next-mdx-remote/rsc";

// app/page.js
export default function Home() {
  return (
    // @ts-expect-error Server Component
    <MDXRemote
      source={`# Hello World

      This is from Server Components!
      `}
    />
  );
}
