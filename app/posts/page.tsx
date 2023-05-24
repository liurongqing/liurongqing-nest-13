/**
 * 博客列表首页
 */
import { Divider } from "@/components";
import { PageList, Input } from "@/components";


export default function Home() {
  return (
    <div>
      <Divider />
      <div className="mb-4 max-w-lg">
        <Input id="search" label="请输入标题" />
      </div>
      <PageList/>
    </div>
  );
}
