import Image from "next/image";
import Wrapper from "./Wrapper";
import TagBox from "./TagBox";

export default function Team() {
  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:mt-[182px]" data-testid="team-component">
        <TagBox tag="Conoce Al Equipo" />

        <div className="mt-[92px] height-auto flex justify-between flex-col sm:flex-row">

          <div className="w-[100%] mr-0 height-auto mb-[32px] sm:w-[25%] sm:mt-[12px] sm:mr-[12px]">
            <div className="h-[120em] w-[100%] h-[100%] relative sm:h-[35em]">
              <Image
                className="object-cover"
                src="/team/botanist.jpg"
                alt="a picture of a botanist"
                fill
              />
            </div>
            <div className="mt-[12px]  leading-[1.3] sm:mt-[24px] sm:w-[25ch]">
              <span className="block text-[4.75em] sm:text-[1em]">Gosha</span>
              <span className="text-[rgba(242,242,242,.5)] text-[4.75em] sm:text-[1em]">Botanist</span>
            </div>
          </div>

          <div className="w-[100%] mr-0 height-auto mb-[32px] sm:w-[25%] sm:mt-[12px] sm:mr-[12px]">
            <div className="h-[120em] w-[100%] h-[100%] relative sm:h-[35em]">
              <Image
                className="object-cover"
                src="/team/creative.jpg"
                alt="a picture of a creative person"
                fill
              />
            </div>
            <div className="mt-[12px]  leading-[1.3] sm:mt-[24px] sm:w-[25ch]">
              <span className="block text-[4.75em] sm:text-[1em]">Liam</span>
              <span className="text-[rgba(242,242,242,.5)] text-[4.75em] sm:text-[1em]">Creative</span>
            </div>
          </div>

          <div className="w-[100%] mr-0 height-auto mb-[32px] sm:w-[25%] sm:mt-[12px] sm:mr-[12px]">
            <div className="h-[120em] w-[100%] h-[100%] relative sm:h-[35em]">
              <Image
                className="object-cover"
                src="/team/partnerships.jpg"
                alt="a picture of a partnership person"
                fill
              />
            </div>
            <div className="mt-[12px]  leading-[1.3] sm:mt-[24px] sm:w-[25ch]">
              <span className="block text-[4.75em] sm:text-[1em]">Mei</span>
              <span className="text-[rgba(242,242,242,.5)] text-[4.75em] sm:text-[1em]">Partnerships</span>
            </div>
          </div>

          <div className="w-[100%] mr-0 height-auto mb-[32px] sm:w-[25%] sm:mt-[12px]">
            <div className="h-[120em] w-[100%] h-[100%] relative sm:h-[35em]">
              <Image
                className="object-cover"
                src="/team/service.jpg"
                alt="a picture of a person"
                fill
              />
            </div>
            <div className="mt-[12px]  leading-[1.3] sm:mt-[24px] sm:w-[25ch]">
              <span className="block text-[4.75em] sm:text-[1em]">Ahmed</span>
              <span className="text-[rgba(242,242,242,.5)] text-[4.75em] sm:text-[1em]">Service</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
