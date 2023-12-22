import Image from "next/image";
import Wrapper from "./Wrapper";
import TagBox from "./TagBox";

export default function Team() {
  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:mt-[182px]">
        <TagBox tag="Meet Team" />

        <div className="mt-[92px] height-auto flex justify-between flex-col sm:flex-row">

          <div className="w-[100%] mr-0 height-auto mb-[32px] sm:w-[25%] sm:mt-[12px] sm:mr-[12px]">
            <div className="h-[120em] w-[100%] h-[100%] relative sm:h-[35em]">
              <Image
                src="/team-1.jpg"
                alt="img"
                fill
              />
            </div>
            <div className="mt-[12px]  leading-[1.3] sm:mt-[24px] sm:w-[25ch]">
              <span className="block text-[4.75em] sm:text-[1em]">Gosha</span>
              <span className="text-[rgba(242,242,242,.5)] text-[4.75em] sm:text-[1em]">Creative</span>
            </div>
          </div>

          <div className="w-[100%] mr-0 height-auto mb-[32px] sm:w-[25%] sm:mt-[12px] sm:mr-[12px]">
            <div className="h-[120em] w-[100%] h-[100%] relative sm:h-[35em]">
              <Image
                src="/team-2.jpg"
                alt="img"
                fill
              />
            </div>
            <div className="mt-[12px]  leading-[1.3] sm:mt-[24px] sm:w-[25ch]">
              <span className="block text-[4.75em] sm:text-[1em]">Liza</span>
              <span className="text-[rgba(242,242,242,.5)] text-[4.75em] sm:text-[1em]">Comunications</span>
            </div>
          </div>

          <div className="w-[100%] mr-0 height-auto mb-[32px] sm:w-[25%] sm:mt-[12px] sm:mr-[12px]">
            <div className="h-[120em] w-[100%] h-[100%] relative sm:h-[35em]">
              <Image
                src="/team-3.jpg"
                alt="img"
                fill
              />
            </div>
            <div className="mt-[12px]  leading-[1.3] sm:mt-[24px] sm:w-[25ch]">
              <span className="block text-[4.75em] sm:text-[1em]">Nika</span>
              <span className="text-[rgba(242,242,242,.5)] text-[4.75em] sm:text-[1em]">Service</span>
            </div>
          </div>

          <div className="w-[100%] mr-0 height-auto mb-[32px] sm:w-[25%] sm:mt-[12px]">
            <div className="h-[120em] w-[100%] h-[100%] relative sm:h-[35em]">
              <Image
                src="/team-4.jpg"
                alt="img"
                fill
              />
            </div>
            <div className="mt-[12px]  leading-[1.3] sm:mt-[24px] sm:w-[25ch]">
              <span className="block text-[4.75em] sm:text-[1em]">Kristina</span>
              <span className="text-[rgba(242,242,242,.5)] text-[4.75em] sm:text-[1em]">Partnerships</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
