import { PageList } from "@/components";
import { Divider } from "@/components";

export default function Page({ params }) {
  const { tag } = params;

  return (
    <div>
      <Divider />
      <PageList tag={tag}/>
    </div>
  );
}
