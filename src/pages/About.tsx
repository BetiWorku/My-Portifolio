import {
  GraduationCap,
  Heart,
  Code,
  Briefcase,
  Award,
  Sparkles,
  CheckCircle2,
  Bot,
  Smartphone,
  Globe,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import betiImage from "../assets/profile.jpg";

const About = () => {
  const pillars = [
    {
      title: "AI & NLP Systems",
      icon: Bot,
      desc: "Engineering conversational legal intelligence, LangChain RAG pipelines, and LLM integrations.",
    },
    {
      title: "Mobile Apps (Android & Kotlin)",
      icon: Smartphone,
      desc: "Developing native Android apps with live GPS tracking, Google Maps APIs, and fluid Material UI.",
    },
    {
      title: "Full-Stack Web Engineering",
      icon: Globe,
      desc: "Crafting scalable platforms like PoetVerse using React, TypeScript, Node.js, and modern CSS.",
    },
    {
      title: "Team Leadership & Collaboration",
      icon: Users,
      desc: "Leading developer teams through agile sprints, code reviews, and delivering real-world products.",
    },
  ];

  const milestones = [
    {
      role: "AI/ML Expert & Team Lead (Internship)",
      organization: "gCODE Technologies • Cohort 1",
      date: "2024",
      badge: "Completed & Certified",
      details:
        "Led the technical architecture, dataset pipeline, and prompt engineering for the Ethiopian AI Legal Assistant chatbot.",
    },
    {
      role: "Python Pro Hackathon — 3rd Place Winner",
      organization: "TechTonic Tribe & Debre Berhan University",
      date: "August 2024",
      badge: "Top 3 Award",
      details:
        "Competed and delivered innovative Python solutions recognized for ingenuity, technical execution, and collaboration.",
    },
    {
      role: "B.Sc. in Software Engineering",
      organization: "Debre Birhan University, Ethiopia",
      date: "Expected 2025",
      badge: "Candidate",
      details:
        "Rigorous coursework covering algorithms, software architecture, database management, and mobile/web development.",
    },
  ];

  const techBadges = [
    "Python",
    "Kotlin",
    "Android SDK",
    "React",
    "TypeScript",
    "NLP & LangChain",
    "FastAPI",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "Google Maps API",
    "Tailwind CSS",
  ];

  const hobbies = [
    "Exploring AI Advancements",
    "Creative Writing & Poetry",
    "Playing Chess",
    "Tech Architecture Reading",
    "Nature Walks & Music",
  ];

  return (
    <div id="about" className="bg-background py-16 scroll-mt-16 border-t border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Compact Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            About <span className="text-secondary">Me</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Get to know my journey, engineering expertise, and practical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Profile Card & Bio */}
          <div className="lg:col-span-5 space-y-5 animate-slide-in-left">

            {/* Profile Avatar Card */}
            <Card className="border-border/60 bg-card shadow-sm overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-secondary via-primary/30 to-secondary shadow-lg mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={betiImage}
                      alt="Betelhem Worku"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-display font-bold text-foreground">
                  Betelhem Worku
                </h2>
                <p className="text-xs font-semibold text-secondary mt-1">
                  Full-Stack Developer • AI/ML Expert & Team Lead • UI/UX Developer
                </p>
                <p className="text-[11px] text-muted-foreground mt-1.5">
                  Debre Birhan University • Ethiopia
                </p>
              </CardContent>
            </Card>

            {/* My Story Card */}
            <Card className="border-border/60 bg-card shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-base font-display font-bold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="text-secondary" size={18} />
                  My Story & Passion
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  I'm a software engineering student at Debre Birhan University with a strong passion for solving real-world challenges through technology.
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-2.5">
                  My experience ranges from leading development on the Ethiopian AI Legal Assistant at gCODE Technologies, to building native Android mobile apps like the Smart Bus Tracking System, to deploying modern web platforms like PoetVerse.
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-2.5">
                  I combine strong algorithmic foundations with eye for detail, clean code, and user empathy.
                </p>
              </CardContent>
            </Card>

            {/* Tech Skills Chips */}
            <Card className="border-border/60 bg-card shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
                  <Code className="text-secondary" size={14} />
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {techBadges.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-muted/70 text-foreground/80 rounded text-[11px] font-medium border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Column: Pillars, Experience & Timeline */}
          <div className="lg:col-span-7 space-y-5 animate-slide-in-right">

            {/* 4 Pillars of Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Card key={pillar.title} className="border-border/60 bg-card shadow-xs hover:border-secondary/40 transition-colors">
                    <CardContent className="p-3.5 space-y-1">
                      <div className="w-7 h-7 rounded-md bg-secondary/15 text-secondary flex items-center justify-center mb-1.5">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-xs font-bold text-foreground">{pillar.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-normal">{pillar.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Practical Experience & Education Milestones */}
            <Card className="border-border/60 bg-card shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-base font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="text-secondary" size={18} />
                  Experience & Milestones
                </h3>

                <div className="space-y-3">
                  {milestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-muted/30 border border-border/40 space-y-1"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <h4 className="font-semibold text-foreground text-xs sm:text-sm">
                          {m.role}
                        </h4>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/20">
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        {m.organization} • <span className="text-foreground/80">{m.date}</span>
                      </p>
                      <p className="text-xs text-muted-foreground pt-0.5 leading-relaxed">
                        {m.details}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Beyond Code (Personal Interests) */}
            <Card className="border-border/60 bg-card shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Heart className="text-secondary" size={14} />
                  Beyond the Code
                </h3>
                <p className="text-xs text-muted-foreground mb-2.5">
                  When I'm not writing code or experimenting with AI models:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {hobbies.map((hobby) => (
                    <span
                      key={hobby}
                      className="px-2.5 py-1 bg-secondary/10 text-foreground/90 rounded-md text-[11px] font-medium border border-secondary/20"
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
