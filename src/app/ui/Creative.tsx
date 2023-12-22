import Wrapper from "./Wrapper";
import { alpinaFine } from "../fonts/localFonts";

export default function Creative() {
  return (
    <Wrapper>
      <div className="h-full flex flex-col justify-end py-[72px] relative sm:py-[182px]">
        <div className="text-center tracking-[-.03em] text-[15em] leading-[.9] sm:text-[12em]">
          <span className={`${alpinaFine.className} tracking-[-.04em]`}>Our Ambition</span> <br />
          <span className={`${alpinaFine.className} text-[.4em]`}>is</span> Presence
        </div>
        <div className="mt-[42px] sm:mt-[62px]">
          <div
            className="w-[58em] h-[82em] ml-auto mr-auto bg-orange-500 bg-[url(/presence.jpg)] mx-auto bg-center bg-contain bg-scroll sm:w-[24em] sm:h-[32em] sm:bg-fixed"
          />
        </div>
        <div className="w-auto flex justify-center items-center mt-[32px] ml-auto mr-auto sm:w-[51ch] sm:mt-[42px]">
          <div className="text-center tracking-[.05em] leading-[1.2] text-[4.25em] sm:text-sm">
            Whether it&apos;s another late night with a client project,
            or an early finance review — our ambition is being in the moment,
            and giving your entire mind and body to the &quot;now&quot;.
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

