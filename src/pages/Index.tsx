import { useState, useEffect } from "react";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import betiImage from "../assets/profile.jpg";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";

const rotatingRoles = [
  "Full-Stack Developer",
  "AI/ML Expert & Team Lead",
  "UI/UX Developer",
  "Software Engineer",
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        setFadeState(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-background via-muted/25 to-background overflow-hidden py-12 lg:py-16"
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left animate-fade-in-up">
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.2] tracking-tight">
                  Hi, I'm{" "}
                  <span className="text-secondary drop-shadow-sm whitespace-nowrap">
                    Betelhem Worku
                  </span>
                </h1>

                <div className="h-9 sm:h-11 flex items-center justify-center lg:justify-start">
                  <span
                    className={`text-xl sm:text-2xl md:text-3xl font-display font-semibold text-primary transition-all duration-300 transform ${
                      fadeState
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    {rotatingRoles[currentRoleIndex]}
                  </span>
                </div>
              </div>


              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
                Software engineering student at Debre Birhan University.
                Specializing in intelligent AI systems, Android mobile
                applications, and full-stack web platforms. Passionate about
                transforming ideas into elegant, real-world digital solutions.
              </p>

              {/* Action Buttons */}
              <div className="pt-2">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <Button
                    size="default"
                    className="bg-primary hover:bg-navy-light text-primary-foreground shadow-md shadow-primary/20 px-5"
                    onClick={() => scrollTo("projects")}
                  >
                    View My Projects
                    <ArrowRight className="ml-1.5" size={16} />
                  </Button>

                  <Button
                    variant="outline"
                    size="default"
                    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground shadow-sm px-5"
                    onClick={() => scrollTo("certificates")}
                  >
                    <Award className="mr-1.5" size={16} />
                    Verified Certificates
                  </Button>

                  <Button
                    variant="ghost"
                    size="default"
                    className="text-foreground hover:text-secondary hover:bg-secondary/15"
                    onClick={() => scrollTo("contact")}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>

              {/* Compact Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/40 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <p className="text-lg sm:text-xl font-bold font-display text-primary">
                    5+
                  </p>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Projects Built
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-lg sm:text-xl font-bold font-display text-secondary">
                    6
                  </p>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Certifications
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-lg sm:text-xl font-bold font-display text-primary">
                    Top 3
                  </p>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Hackathon Award
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Image */}
            <div className="lg:col-span-5 flex justify-center items-center relative animate-fade-in">
              <div className="relative">
                <div
                  className="absolute -inset-3 bg-gradient-to-tr from-secondary/35 via-primary/25 to-secondary/45 rounded-full blur-2xl opacity-70 animate-pulse"
                  style={{ animationDuration: "4s" }}
                />

                <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-secondary via-primary/40 to-secondary shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background border border-background">
                    <img
                      src={betiImage}
                      alt="Betelhem Worku"
                      className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Blur Orbs */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 bg-secondary/15 rounded-full blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 bg-primary/20 rounded-full blur-[90px]" />
      </section>

      {/* ═══════════════════ ALL SECTIONS BELOW ═══════════════════ */}
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
};

export default Index;
