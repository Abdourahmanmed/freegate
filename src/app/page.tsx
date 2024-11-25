import Footer from "@/components/Footer";
import EightSection from "@/components/HomePagesSection/EightSection";
import FiveSection from "@/components/HomePagesSection/FiveSection";
import FourSection from "@/components/HomePagesSection/FourSection";
import HeroPage from "@/components/HomePagesSection/HeroPage";
import NineSection from "@/components/HomePagesSection/NineSection";
import SecondeSection from "@/components/HomePagesSection/secondeSection";
import SevenSection from "@/components/HomePagesSection/SevenSection";
import Sixsection from "@/components/HomePagesSection/Sixsection";
import TenSection from "@/components/HomePagesSection/TenSection";
import ThirtSection from "@/components/HomePagesSection/ThirtSection";
import Navigation from "@/components/Navaigation";

export default function Home() {
  return (
    <>
     {/* Barre de navigation */}
     <Navigation />
    <HeroPage />
    <SecondeSection />
    <ThirtSection />
    <FourSection />
    <FiveSection />
    <Sixsection />
    <SevenSection />
    <EightSection />
    <NineSection />
    <TenSection />
    <Footer />
    </>
  );
}
