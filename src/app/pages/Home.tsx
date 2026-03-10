import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { ServicesPreview } from "../components/ServicesPreview";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1764536602389-07ee8e0b4f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBjaXR5JTIwcmFpbiUyMG5pZ2h0JTIwbm9pcnxlbnwxfHx8fDE3NzI1OTI5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080";

export default function Home() {
  useEffect(() => {
    document.title = "Hit! | Web Developer & Digital Operative";
  }, []);

  return (
    <>
      <Hero heroImage={HERO_IMAGE} />
      <About />
      <ServicesPreview />
    </>
  );
}