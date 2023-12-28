'use client';

import { useState } from "react"
import { Tree } from "../lib/definitions";
import Item from "./Item";


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
