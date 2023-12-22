import Wrapper from "./Wrapper";
import Image from "next/image";
import { alpinaFine, romanFont } from "../fonts/localFonts";

export default function History() {

  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:py-[182px]">

        <div className="mt-[20px] mb-[10px]">
          <h2 className="tracking-[-.02em] text-[15.2em] leading-[.9] sm:text-[11em] sm:leading-[.85em]">
            A SPACE <span className={`${alpinaFine.className}`}>That</span> SPARKS DIALOGUE
          </h2>
        </div>

        <div className="flex flex-col mt-0 sm:mt-[42px] sm:flex-row">
          <div className="mt-[28px] relative w-[50em] h-[72em] sm:w-[20em] sm:h-[28em]">
            <Image
              src="/apointemens.jpg"
              alt="img"
              fill
            />
          </div>

          <div className="w-[80%] mt-[28px] ml-auto sm:w-[48%]">
            <div className="relative w-[100%] h-[108em] ml-auto sm:w-[45.2em] sm:h-[62em] sm:w-full">
              <Image
                src="/apointemens.jpg"
                alt="img"
                fill
              />
            </div>

            <div className={`${romanFont.className} mt-[24px] text-[5.3em] leading-[1.3] sm:text-[1.3em]`}>
              <p className="mt-0">
                C23 Studio is designed to spark creativity, relaxation and dialogue,
                when you enter our studio you step away from the hustle and bustle of
                everyday life, and into the healing world of tattoos- a safe space,
                where you are invited to challenge the boundaries of your own views
                and creativity, and mark your body and soul for life.
              </p>

              <p className="mt-[16px]">
                So, join us for a coffee in the lounge or a drink at the rooftop bar and let&apos;s talk about tattoos!
              </p>
            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
}
