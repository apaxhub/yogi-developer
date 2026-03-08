import Hero from "@/components/home/Hero";
import ProjectHighlights from "@/components/home/ProjectHighlights";
import Amenities from "@/components/home/Amenities";
import FloorPlans from "@/components/home/FloorPlans";
import LocationAdvantage from "@/components/home/LocationAdvantage";
import AboutDeveloper from "@/components/home/AboutDeveloper";
import Gallery from "@/components/home/Gallery";
import LeadCapture from "@/components/home/LeadCapture";

export default function Home() {
  return (
    <main className="selection:bg-primary selection:text-bg bg-bg min-h-screen">
      <Hero />
      <ProjectHighlights />
      <Amenities />
      <FloorPlans />
      <LocationAdvantage />
      <AboutDeveloper />
      <Gallery />
      <LeadCapture />
    </main>
  );
}
