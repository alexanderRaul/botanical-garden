import Link from "next/link";
import TagBox from "./TagBox";
import Wrapper from "./Wrapper";
import { alpinaFine } from "../fonts/localFonts";

export default function HowWeWork() {
  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:py-[182px]" data-testid="how-we-work-container">
        <TagBox tag="Como Trabajamos" />
        <div className="mt-[42px] text-[7em] divide-y  divide-[rgba(242,242,242,.15)]  border-t border-b border-[rgba(242,242,242,.15)] sm:text-[5.7em]">
          <div className="flex justify-between items-center">
            <span className={`${alpinaFine.className}`}>/ 1</span>
            <Link href="/blog" className="w-[85%] inline-block py-[.8em]">Blog</Link>
          </div>
          <div className="flex justify-between items-center">
            <span className={`${alpinaFine.className}`}>/ 2</span>
            <Link href="/schedule" className="w-[85%] inline-block py-[.8em]">Schedule</Link>
          </div>
          <div className="flex justify-between items-center">
            <span className={`${alpinaFine.className}`}>/ 3</span>
            <Link href="/exploration" className="w-[85%] inline-block py-[.8em]">Exploración</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
