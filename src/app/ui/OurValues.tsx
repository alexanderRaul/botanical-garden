import Wrapper from "./Wrapper";
import TagBox from "./TagBox";
import { alpinaFine } from "../fonts/localFonts";

export default function OurValues() {
  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:py-[182px]">
        <TagBox tag="Nuestros Valores" />
        <div className="mt-[42px] text-[14em] tracking-[-.03em] sm:mt-[82px] sm:text-[9em]">
          Conservación
        </div>
        <div className="mt-[42px] flex text-[14em] tracking-[-.04em] sm:mt-[82px] sm:text-[9em]">
          <div className="ml-auto">
            <div className={`${alpinaFine.className} text-red-600`}>Educación</div>
          </div>
        </div>
        <div className="mt-[42px] flex text-[14em] tracking-[-.03em] sm:mt-[82px] sm:text-[9em]">
          <div className="ml-[0%] sm:ml-[20%]">
            <div>Claridad</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

