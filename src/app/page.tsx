import Hero from './ui/Hero';
import AboutUs from './ui/AboutUs';
import OurValues from './ui/OurValues';
import Creative from './ui/Creative';
import Team from './ui/Team';
import History from './ui/History';
import Appointments from './ui/Appointments';
import HowWeWork from './ui/HowWeWork';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurValues />
      <HowWeWork />
      <Creative />
      <Team />
      <History />
      <Appointments />
    </>
  );
}
