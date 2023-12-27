'use client';

import { Tree } from "../lib/definitions";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react"
import { romanFont } from "../fonts/localFonts";

function Item({ tree, i, item, onClick }: any) {
  const { scientific_name, common_name, image_url }: Tree = tree;
  const [f, s] = common_name.split(",");
  console.log({ f, s });

  return (
    <motion.div
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
          <span className="block">― {" "}{f}</span>
          <span>― {" "}{s}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Slader({ trees }: { trees: Tree[] }) {
  const [item, setItem] = useState<number | null>(null);

  const handleItemSelect = (index: number) => {
    setItem(index === item ? null : index);
  }

  return (
    <div className="flex items-center justify-center flex-col gap-[1.25em] my-[10px]">
      {trees.map((tree, i) =>
        <Item
          key={tree.id}
          tree={tree}
          i={i}
          item={item}
          onClick={handleItemSelect}
        />
      )}
    </div>
  );
}
