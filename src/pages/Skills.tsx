import { useEffect, useState } from 'react';
import { Code, Layout, Wrench, Brain, Cpu, Database, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'AI / ML & Data Science',
      icon: <Brain className="text-secondary" size={20} />,
      skills: [
        { name: 'Python (AI/ML & Automation)', level: 90 },
        { name: 'Natural Language Processing (NLP)', level: 85 },
        { name: 'LangChain & RAG Architectures', level: 82 },
        { name: 'Data Analysis & Visualization', level: 86 },
        { name: 'FastAPI (AI Model Serving)', level: 84 },
      ],
    },
    {
      title: 'Mobile & Frontend Development',
      icon: <Smartphone className="text-secondary" size={20} />,
      skills: [
        { name: 'Kotlin (Android Native Apps)', level: 88 },
        { name: 'Android SDK & Google Maps API', level: 86 },
        { name: 'React & TypeScript', level: 90 },
        { name: 'Tailwind CSS & Responsive UI', level: 94 },
        { name: 'Figma & UI/UX Prototyping', level: 82 },
      ],
    },
    {
      title: 'Backend & Core Systems',
      icon: <Code className="text-secondary" size={20} />,
      skills: [
        { name: 'Node.js & Express APIs', level: 82 },
        { name: 'Java & Object-Oriented Design', level: 82 },
        { name: 'PHP & Web Services', level: 75 },
        { name: 'C++ Systems Programming', level: 72 },
        { name: 'RESTful Architecture', level: 88 },
      ],
    },
    {
      title: 'Databases, Cloud & Tools',
      icon: <Database className="text-secondary" size={20} />,
      skills: [
        { name: 'Firebase & Cloud Datastores', level: 84 },
        { name: 'MySQL & Relational Databases', level: 85 },
        { name: 'PostgreSQL & Vector Search', level: 80 },
        { name: 'Git & GitHub Version Control', level: 92 },
        { name: 'VS Code & Android Studio', level: 95 },
      ],
    },
  ];

  return (
    <div id="skills" className="bg-background py-16 scroll-mt-16 border-t border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            My <span className="text-secondary">Skills</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Technical capabilities across AI engineering, Android Kotlin apps, full-stack web, and software systems.
          </p>
        </div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="border-border/60 bg-card shadow-sm hover:border-secondary/40 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="p-4 pb-2 border-b border-border/30">
                <CardTitle className="flex items-center gap-2.5 text-base font-display font-bold text-foreground">
                  <div className="p-1.5 rounded-md bg-primary/10 text-secondary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-3 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="font-semibold text-secondary font-mono">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-muted/80 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-navy-light to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animate ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.06)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compact Additional Skills Tags */}
        <div className="mt-12 text-center animate-fade-in-up">
          <h2 className="text-lg font-display font-semibold text-foreground mb-3">
            Core Competencies & Practices
          </h2>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-3xl mx-auto">
            {[
              'Android Kotlin Apps',
              'Google Maps & GPS Tracking',
              'AI Legal Chatbots',
              'LLM Prompt Engineering',
              'RAG Pipelines',
              'Team Leadership',
              'REST APIs',
              'Responsive Web Design',
              'Agile/Scrum Workflows',
              'Code Review & Git Flow',
              'Database Schema Design',
              'Problem Solving',
            ].map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 bg-muted/70 text-foreground/80 border border-border/50 rounded-full text-[11px] font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
