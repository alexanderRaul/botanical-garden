'use client'

import { Tree } from "../lib/definitions";
import { motion } from "framer-motion";
import Image from "next/image";
import { romanFont } from "../fonts/localFonts";

export default function Item({ tree, i, item, onClick }: any) {
  const { scientific_name, common_name, image_url }: Tree = tree;
  const [firstCommonName, secondCommonName] = common_name.split(",");

  return (
    <motion.div
      data-testid="item"
      layout
      data-isopen={item === i}
      onClick={() => onClick(i)}
      className="relative w-[60em] h-[68em] sm:w-[30em] sm:h-[38em] bg-white flex items-center justify-center sm:data-[isopen=true]:w-[50em] sm:data-[isopen=true]:h-[48em]"
    >
      <motion.div
        layout
        data-isopen={item === i}
        className="w-[10em] h-[15em] relative sm:data-[isopen=true]:w-[20em] sm:data-[isopen=true]:h-[30em] data-[isopen=true]:w-[30em] data-[isopen=true]:h-[45em] "
      >
        <Image
          className="object-contain"
          src={image_url}
          alt="img"
          fill
        />
      </motion.div>
      <div
        data-isopen={item === i}
        className="absolute top-[0%] text-black w-full hidden data-[isopen=true]:block mt-[20px] ml-[16px] z-[0]"
      >
        <span className={`${romanFont.className} text-[3em]`}>{scientific_name}</span>
        <div className="text-[2em] mt-[15px]">
          <span className="block">― {" "}{firstCommonName}</span>
          <span>― {" "}{secondCommonName}</span>
        </div>
      </div>
    </motion.div>
  );
}
