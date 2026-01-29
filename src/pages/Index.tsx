import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import betiImage from "../assets/profile.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-40 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">

            <h1 className="text-4xl md:text-5xl lg:text-2xl font-display font-bold text-foreground leading-tight">
              Hi, I'm{" "}
              <span className="text-secondary">Betelhem Worku</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Full-Stack Developer & UI/UX Enthusiast
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              I'm a passionate software engineering student at Debre Birhan University,
              crafting beautiful and functional digital experiences. I love turning ideas
              into reality through clean code and intuitive design.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-navy-light text-primary-foreground"
              >
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full  flex items-center justify-center shadow-2xl">
                <div className="w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full bg-secondary/20  overflow-hidden">
                  <img
                    src={betiImage}
                    alt="Betelhem Worku"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
    </div>
  );
};

export default Index;
