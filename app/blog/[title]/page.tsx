import { MDXWrapper } from "@/components/MDXWrapper";
import PageMDX from "./page.mdx";
export default function Page({ params }) {
  console.log( 'params001', params );
  return (
    <MDXWrapper>
      <PageMDX />
    </MDXWrapper>
  );
}
