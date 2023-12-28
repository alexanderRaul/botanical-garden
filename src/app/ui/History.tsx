import Wrapper from "./Wrapper";
import Image from "next/image";
import { alpinaFine, romanFont } from "../fonts/localFonts";

export default function History() {

  return (
    <Wrapper>
      <div className="z-[3] py-[72px] relative sm:py-[182px]">

        <div className="mt-[20px] mb-[10px]">
          <h2 className="tracking-[-.02em] text-[15.2em] leading-[.9] sm:text-[11em] sm:leading-[.90em]">
            UN ESPACIO <span className={`${alpinaFine.className}`}>Que </span>INSPIRA DIÁLOGO
          </h2>
        </div>

        <div className="flex flex-col mt-0 sm:mt-[42px] sm:flex-row">
          <div className="mt-[28px] relative w-[50em] h-[72em] sm:w-[20em] sm:h-[28em]">
            <Image
              src="/history-1.jpg"
              alt="img"
              fill
            />
          </div>

          <div className="w-[80%] mt-[28px] ml-auto sm:w-[48%]">
            <div className="relative w-[100%] h-[108em] ml-auto sm:w-[45.2em] sm:h-[62em] sm:w-full">
              <Image
                src="/history-2.jpg"
                alt="img"
                fill
              />
            </div>

            <div className={`${romanFont.className} mt-[24px] text-[5.3em] leading-[1.3] sm:text-[1.3em]`}>
              <p className="mt-0">
                El Jardín Botánico Martín Cárdenas está diseñado para inspirar conexión,
                exploración y diálogo. Al adentrarte, dejas atrás la rutina diaria,
                ingresando al mundo natural de nuestro jardín: un espacio protegido
                donde te animamos a desafiar tus perspectivas, explorar tu creatividad y
                enriquecer tu conexión con la naturaleza.
              </p>

              <p className="mt-[16px]">
                Únete a nosotros para una charla entre las flores o una visita a los invernaderos,
                ¡hablemos de botánica!
              </p>
            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
}
