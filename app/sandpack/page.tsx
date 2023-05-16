"use client";

import { Sandpack } from "@codesandbox/sandpack-react";

export default function App() {
  const files = {
    "/page.tsx": `"use client";

    import HelloWorld from "./hello.mdx";
    
    export default function Page() {
      return (
          <HelloWorld />
      );
    }
    `,
    "hello.mdx": `## 123`,
    "app/index.js": "console.log(123)"
  };
  return <Sandpack files={files} theme="auto" template="nextjs"/>;
}
