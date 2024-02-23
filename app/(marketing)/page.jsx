import FadingComponent from "./_components/FadingComponent";
import HeroComponent from "./_components/HeroComponent";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main  className=" flex flex-col">
    <HeroComponent/>
    <FadingComponent/>
    <Testimonials />
    </main>
  );
}
