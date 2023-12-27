import { fetchEvents } from "../lib/data";

export default async function Events() {
  const events  = await fetchEvents();

  return (
    <ul className="divide-y divide-black mt-[72px]">
      {events.map(({id, title, description, date }) =>
        <li key={id}>
          <div className="text-[1.8em] pt-[12px]">
            {title}
          </div>
          <div className="text-[1.5em] w-[15ch] my-[16px]">{description}</div>
          <div className="text-[1.3em] my-[12px]">{date.toString()}</div>
        </li>
      )}
    </ul>
  );
}
