"use client";

import { Event } from "../lib/definitions";
//import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function SingleEvent({ events }: { events: Event[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (id: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("event", id);
    //    console.log(typeof params.get("event"));

    replace(`${pathname}?${params.toString()}`);
    console.log("Condición:", searchParams.get("event") === id);
  }

  // const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  // const handleSelectedEvent = (id: number) => {
  //   if (id === selectedEvent)
  //     setSelectedEvent(null);
  //   else
  //     setSelectedEvent(id);
  // }

  return (
    <div className="divide-y divide-black mt-[72px]">
      {events.map(({ title, id }) =>
        <div
          //         onClick={() => handleSelectedEvent(Number(id))}
          onClick={() => handleSearch(id)}
          className="text-[2em] py-[7px]"
          key={id}
        >
          {title}
          {/*       {selectedEvent === Number(id) ? <div>{description}</div> : null}*/}
        </div>
      )}
    </div>
  );
}
