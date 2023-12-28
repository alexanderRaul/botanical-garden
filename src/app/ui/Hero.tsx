import Image from 'next/image';
import { alpinaFine, romanFont } from "../fonts/localFonts";

export default function Hero() {
  return (
    <div className="h-screen" data-testid="hero-container">
      <div className="h-full flex flex-col justify-end pt-[20em] pb-[42em] px-[16px] sm:pt-0 sm:pb-0 sm:px-[32px]">
        <h1 className="text-center mt-[20px] leading-[1] z-[3] sm:mt-auto">
          <span className={`text-[5.7em] ${romanFont.className}`}>Jardín Botánico</span>
          <span className={`block ${alpinaFine.className} tracking-[-.04em] text-[8.6em]`}>Martin Cárdenas</span>
        </h1>
      </div>
      <div
        className="z-[0] w-[68em] h-[92em] ml-auto mr-auto fixed top-[20%] bottom-[0%] left-[0%] right-[0%] flex items-center justify-center sm:w-[29em] sm:h-[38em]">
        <div className="relative w-full h-full ">
          <Image
            className="object-contain"
            src="/gif-1.gif"
            alt="a picture of a tree"
            fill
            priority={true}
          />
        </div>
        <div className="z-[1] w-full h-full absolute bg-[rgba(2,2,2,.60)]" />
      </div>
    </div>
  );
}
