import { Suspense } from "react";
import Events from "../ui/Events";
import Wrapper from "../ui/Wrapper";

export default function Page() {
  return (
    <Wrapper>
      <div className="py-[72px]">
        <h2 className="text-[11em] tracking-tight">Events</h2>

        <Suspense fallback={<div className="text-[2em] mt-[72px]">loading events ...</div>}>
          <Events />
        </Suspense>
      </div>
    </Wrapper>
  )
}
