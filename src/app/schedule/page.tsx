import Wrapper from "../ui/Wrapper";

const events = [
  {
    id: 1,
    title: "Botanical Garden Tour",
    description: "Join us for a guided tour of the beautiful botanical garden.",
    date: 2023
  },
  {
    id: 2,
    title: "Nature Photography Workshop",
    description: "Learn the art of capturing nature through photography.",
    date: 2023
  },
  {
    id: 3,
    title: "Tree Planting Day",
    description: "Help us contribute to the environment by planting trees in the community.",
    date: 2023
  },
  {
    id: 4,
    title: "Bird Watching Expedition",
    description: "Explore local bird species in their natural habitat with experienced birdwatchers.",
    date: 2023
  },
  {
    id: 5,
    title: "Environmental Awareness Seminar",
    description: "Join experts to learn about environmental issues and how to make a positive impact.",
    date: 2023
  },
];

export default function Page() {

  return (
    <Wrapper>
      <div className="py-[72px]">
        <h2 className="text-[11em]">Events</h2>
        <div className="divide-y mt-[32px]">
          {events.map(({ id, title, date }) =>
            <div key={id} className="py-[12px] text-[2.5em] flex justify-between">
              <div className="w-[40%]">{date}</div>
              <div className="flex justify-between flex-1">
                <span>{title}</span>
                <span>A</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
