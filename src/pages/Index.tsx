import { Suspense, lazy, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { CustomCursor, ScrollProgress, LoadingScreen } from "@/components/Interactions";

const Scene3D = lazy(() => import("@/components/Scene3D"));

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <div className="noise-overlay" />

          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>

          <Navbar />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
