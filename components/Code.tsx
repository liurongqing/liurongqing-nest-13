"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";

export const Code = ({ code = "" }) => (
  <SandpackProvider>
    <div className="shadow-md">
    <SandpackCodeViewer code={code} />
    </div>
  </SandpackProvider>
);
