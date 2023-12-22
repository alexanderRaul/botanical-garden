'use client';

import { useState } from "react";
import { motion } from "framer-motion"
import Image from "next/image";
import { alpinaFine } from "../fonts/localFonts";

function Item({ item, index, handleItemSelect }: any) {
  return (
    <motion.div
      layout
      data-isopen={item === index}
      onClick={() => handleItemSelect(index)}
      className="w-[30em] h-[38em] bg-white flex items-center justify-center data-[isopen=true]:w-[50em] data-[isopen=true]:h-[48em]"
    >
      <motion.div
        layout
        data-isopen={item === index}
        className="w-[10em] h-[15em] relative data-[isopen=true]:w-[20em] data-[isopen=true]:h-[30em]"
      >
        <Image
          className="object-contain"
          src="/trees/crataegus-monogyna.png"
          alt="img"
          fill
        />
      </motion.div>
    </motion.div>
  );
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Page() {
  const [item, setItem] = useState<number | null>(null);

  const handleItemSelect = (index: number) => {
    setItem(index === item ? null : index);
  }

  return (
    <div>
      <div className={`${alpinaFine.className} mt-[72px] ml-[30px] fixed text-[6em] tracking-tighter`}>Showcase</div>
      <div className="flex items-center justify-center flex-col gap-[1.25em] my-[10px]">
        {array.map(n => <Item key={n} item={item} index={n} handleItemSelect={handleItemSelect} />)}
      </div>
    </div>
  );
}
