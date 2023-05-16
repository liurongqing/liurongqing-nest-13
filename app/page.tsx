"use client";

import { MDXProvider } from "@mdx-js/react";
import HelloWorld from "./hello.mdx";


export default function Page() {
  return (
    // <MDXProvider>
      <HelloWorld />
    // </MDXProvider>
  );
}
