import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { RadioPlayer } from "@/components/RadioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScheduleSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <RadioPlayer variant="fixed" />
      {/* Spacer for fixed player */}
      <div className="h-16" />
    </div>
  );
};

export default Index;
