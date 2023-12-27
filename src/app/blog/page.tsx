import { Suspense } from "react";
import Blogs from "../ui/Blogs";
import Wrapper from "../ui/Wrapper";

export default function Page() {
  return (
    <Wrapper>
      <div className="py-[72px]">
        <h2 className="text-[11em] tracking-tight">Blog</h2>

        <Suspense fallback={<>Loading blog posts ...</>}>
          <Blogs />
        </Suspense>
      </div>
    </Wrapper>
  );
}
