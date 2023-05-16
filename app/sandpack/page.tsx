"use client";

import { Sandpack } from "@codesandbox/sandpack-react";

export default function App() {
  const files = {
    "app/page.tsx": `"use client";

    import HelloWorld from "./hello.mdx";
    
    export default function Page() {
      return (
          <HelloWorld />
      );
    }
    `,
    "app/hello.mdx": `## 123`,
    "app/index.tsx": "console.log(123)",
  };
  return <Sandpack options={{}} files={files} theme="auto" template="nextjs" />;
}
