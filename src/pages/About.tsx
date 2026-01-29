import { GraduationCap, Heart, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import betiImage from "../assets/profile.jpg";

const About = () => {
  const interests = [
    "Web Development",
    "Mobile App Design",
    "UI/UX Research",
    "Problem Solving",
    "Open Source",
  ];

  const hobbies = [
    "Reading Tech Blogs",
    "Learning New Technologies",
    "Playing Chess",
    "Listening to Music",
    "Exploring Nature",
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-5 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            About <span className="text-secondary">Me</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Profile Section */}
          <div className="space-y-8 animate-slide-in-left">

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center shadow-1xl">
                <div className="w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full bg-secondary/20 overflow-hidden">
                  <img
                    src={betiImage}
                    alt="Betelhem Worku"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Story */}
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Code className="text-secondary" size={24} />
                  My Story
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hello! I'm Betelhem Worku, a passionate software engineering student
                  with a love for creating elegant solutions to complex problems. My journey
                  in tech began with curiosity about how websites work, and it has evolved
                  into a deep passion for full-stack development and UI/UX design.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I believe in writing clean, maintainable code and creating user experiences
                  that are both beautiful and intuitive. Every project is an opportunity to
                  learn something new and push my boundaries.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Details Section */}
          <div className="space-y-6 animate-slide-in-right">

            {/* Education */}
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="text-secondary" size={24} />
                  Education
                </h2>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    B.Sc. in Software Engineering
                  </h3>
                  <p className="text-muted-foreground">Debre Birhan University</p>
                  <p className="text-sm text-secondary font-medium">
                    Expected Graduation: June 2025
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Interests */}
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Code className="text-secondary" size={24} />
                  Professional Interests
                </h2>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Beyond the Code */}
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="text-secondary" size={24} />
                  Beyond the Code
                </h2>
                <p className="text-muted-foreground mb-4">
                  When I'm not coding, you'll find me exploring other passions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary/20 text-foreground rounded-full text-sm font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
