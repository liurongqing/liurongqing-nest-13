import { PageList } from "@/components";
import { Divider } from "@/components";

export default function Page({ params }) {
  const { current } = params;

  return (
    <div>
      <Divider />
      <PageList current={current} />
    </div>
  );
}
