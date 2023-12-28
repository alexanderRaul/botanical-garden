import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Appointments() {
  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:py-[182px]">

        <div className="flex items-center justify-center">
          <h2 className="text-[12em] leading-[.8] sm:text-[11em] sm:mb-[10px]" data-testid="appointments-title">REUNIONES</h2>
        </div>

        <div className="max-w-[151ch] text-center flex items-center justify-center mt-[20px] ml-auto mr-auto text-[#f1f1f1] text-[4.3em] sm:max-w-[45ch] sm:mt-[32px] sm:text-[1.25em]">
          EXPLORA NUESTRO JARDÍN, DONDE LA FRESCURA SE MEZCLA CON LA CREATIVIDAD. iDEAL PARA ENCUENTROS RELAJADOS Y PRODUCTIVOS.
        </div>

        <div className="flex items-center justify-center mt-[42px] sm:items-start sm:mt-[62px]">
          <div className="hidden w-[12em] h-[14em] relative sm:inline">
            <Image
              className="object-cover"
              src="/appointments.jpg"
              alt="a picture of botanic garden"
              fill
            />
          </div>

          <div className="relative w-[60em] h-[82em] mr-auto ml-auto sm:w-[30em] sm:h-[38em] sm:mr-0">
            <Image
              className="object-cover"
              src="/appointments.jpg"
              alt="a picture of botanic garden"
              fill
            />
          </div>

          <div className="hidden w-[12em] h-[14em] ml-auto relative sm:inline">
            <Image
              className="object-cover"
              src="/appointments.jpg"
              alt="a picture of botanic garden"
              fill
            />
          </div>
        </div>

      </div>
    </Wrapper>
  );
}
