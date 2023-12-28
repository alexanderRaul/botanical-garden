import Wrapper from "./Wrapper";
import TagBox from "./TagBox";
import { alpinaFine, romanFont } from "../fonts/localFonts";

export default function AboutUs() {
  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:py-[182px]" data-testid="about-us-container">
        <TagBox tag="Sobre nosotros" />

        <div className="w-[147ch] mt-[42px] sm:mt-[82px] sm:w-[85ch]">
          <h2 className="tracking-[-.01em] text-[8.3em] leading-[1.05] mt-[20px] mb-[10px] sm:text-[4.8em]">
            61 años de exploración. Reunidos para abrir una nueva era de la botánica
          </h2>
        </div>

        <div className="mt-[92px] w-[25ch] ml-auto leading-[1.2] tracking-[.05em] text-[4.25em] sm:mt-[112px] sm:w-[30ch] sm:text-[1.1em]">
          <p>
            Explorando desde la vegetación hasta los rincones más remotos de nuestro
            jardín botánico Martin Cardenas, ha recorrido un amplio espectro de paisajes, conectando con visitantes de diversas áreas de interés.
          </p>
          <p className="mt-[16px] ">
            Concentración en la contemplación de la naturaleza y distracción en la diversidad de nuestras especies.
          </p>
        </div>

        <div className="mt-[182px]">
          <div className="text-[4.2em] w-[21.7ch] sm:w-[22ch] sm:text-[1.4em] tracking-[.02em]">
            En un mundo lleno de distracciones, ha llegado el momento de volver a centrarnos.
          </div>

          <div className="sm:w-[80ch] my-[192px] sm:mr-auto sm:ml-auto">
            <h2 className={`${romanFont.className} text-[8em] text-center tracking-[-.02em] sm:text-[4em] leading-[1]`}>
              Entornos {" "}
              <span className={`${alpinaFine.className}`}>naturales, multi-disciplinarios</span>
              {" "}— hechos para{" "}
              <span className={`${alpinaFine.className}`}>realzar</span>
              {" "} la experiencia
              en{" "}
              <span className={`${alpinaFine.className}`}>nuestro jardin</span>
            </h2>
          </div>

          <div className="w-[26ch] text-[4.2em]  sm:w-[24ch] ml-auto sm:text-[1.4em] tracking-[.02em]">
            Permite que la gente conecte con la serenidad botánica excepcional.
          </div>
        </div>

      </div>
    </Wrapper>
  );
}

