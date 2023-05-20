"use client";

import { Divider } from "@/components";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";

export default function Page() {
  return (
    <>
      <Divider />
      <SandpackProvider template="react">
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor showTabs closableTabs/>
        </SandpackLayout>
        <SandpackPreview className="shadow-md" />
      </SandpackProvider>
    </>
  );
}
