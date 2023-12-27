import { fetchEvents } from "../lib/data";

export default async function Events() {
  const events = await fetchEvents();

  return (
    <ul className="divide-y divide mt-[72px]">
      {events.map(({ id, title, description, date }) =>
        <li key={id}>
          <div className="text-[5.5em] pt-[15px]  sm:text-[1.8em] sm:pt-[12px]">
            {title}
          </div>
          <div className="text-[3.5em] w-[30ch] my-[26px] sm:text-[1.5em] sm:w-[15ch] sm:my-[16px]">{description}</div>
          <div className="text-[3em] my-[20px]  sm:text-[1.3em] sm:my-[12px]">{date.toString()}</div>
        </li>
      )}
    </ul>
  );
}
