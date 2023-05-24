"use client";

import { Divider } from "@/components";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import {
  format,
  formatDistance,
  subDays,
  formatDistanceStrict,
} from "date-fns";
import { zhCN } from "date-fns/locale";

export default function Page() {
  // console.log(
  //   format(new Date(), "d", {
  //     locale: zhCN,
  //   })
  // );
  // console.log(format(new Date(), "D", { useAdditionalDayOfYearTokens: true }));
  // console.log(format(new Date(), "yyyy"));
  // console.log(
  //   formatDistance(new Date("2019-11-12"), new Date(), {
  //     addSuffix: true,
  //   })
  // );
  // console.log(
  //   formatDistanceStrict(new Date("2019-11-12"), new Date(), {
  //     addSuffix: true,
  //   })
  // );

  return (
    <>
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
