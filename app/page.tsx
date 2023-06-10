"use client";

import { Divider } from "@/components";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";

import { Code } from "@/components";

export default function Page() {
  return (
    <>
      <Code code="123" />
      <Divider />
      <SandpackProvider template="react">
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor showTabs closableTabs />
        </SandpackLayout>
        <SandpackPreview className="shadow-md" />
      </SandpackProvider>
    </>
  );
}
