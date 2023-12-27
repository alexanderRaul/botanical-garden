import { Suspense } from "react";
import { alpinaFine } from "../fonts/localFonts";
import ParentSlader from "./ParentSlader";

export default function Page() {
  return (
    <div>
      <div className={`${alpinaFine.className} mt-[72px] ml-[30px] fixed text-[6em] tracking-tighter mix-blend-difference`}>Showcase</div>
      <Suspense fallback={<div className="text-[5em]">loading tree...s</div>}>
        <ParentSlader />
      </Suspense>
    </div>
  );
}
