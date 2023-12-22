import Wrapper from "./Wrapper";
import TagBox from "./TagBox";
import { alpinaFine, romanFont } from "../fonts/localFonts";

export default function AboutUs() {
  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:py-[182px]">
        <TagBox tag="About Us" />

        <div className="w-[147ch] mt-[42px] sm:mt-[82px] sm:w-[85ch]">
          <h2 className="tracking-[-.01em] text-[8.3em] leading-[1.05] mt-[20px] mb-[10px] sm:text-[4.8em]">
            10 years of exploration. Brought together to unlock a new era of marketing.
          </h2>
        </div>

        <div className="mt-[92px] w-[25ch] ml-auto leading-[1.2] tracking-[.05em] text-[4.25em] sm:mt-[112px] sm:w-[30ch] sm:text-[1.1em]">
          <p>
            From food and fitness to fintech and crypto, T/T7 has travelled the globe and its
            varying industries whilst connecting with consumers and their needs.
          </p>
          <p className="mt-[16px] ">
            Striking balance between consistency and luxury. Usability and innovation. Focus and distraction.
          </p>
        </div>

        <div className="mt-[182px]">
          <div className="text-[4.2em] w-[21.7ch] sm:w-[22ch] sm:text-[1.4em] tracking-[.02em]">
            In a world full of distractions, it&apos;s time to take back our focus.
          </div>

          <div className="sm:w-[78ch] my-[192px] sm:mr-auto sm:ml-auto">
            <h2 className={`${romanFont.className} text-[8em] text-center tracking-[-.02em] sm:text-[4em] leading-[1]`}>
              Croos {" "}
              <span className={`${alpinaFine.className}`}>cultured, multi-disciplinary</span>
              {" "}— built to{" "}
              <span className={`${alpinaFine.className}`}>elevate</span>
              {" "}brands, communication
              and{" "}
              <span className={`${alpinaFine.className}`}>advertising</span>
            </h2>
          </div>

          <div className="w-[26ch] text-[4.2em]  sm:w-[24ch] ml-auto sm:text-[1.4em] tracking-[.02em]">
            Allow your customers to connect with content that is valuable to them.
          </div>
        </div>

      </div>
    </Wrapper>
  );
}

