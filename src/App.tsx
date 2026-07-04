import { useEffect, useRef, useState } from "react";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import AdminPanel from "./components/AdminPanel";
import { recordVisit } from "./lib/portfolioAnalytics";

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const visitTracked = useRef(false);

  useEffect(() => {
    if (visitTracked.current) return;
    visitTracked.current = true;
    recordVisit();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        setAdminOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />
    </main>
  );
}
