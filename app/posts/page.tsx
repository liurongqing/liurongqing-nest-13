/**
 * 博客列表首页
 */
import { Divider } from "@/components";
import { PageList } from "@/components";

export default function Home() {
  return (
    <div>
      <Divider />
      <PageList current={1} />
    </div>
  );
}
