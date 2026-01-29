import { useEffect, useState } from 'react';
import { Code, Layout, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

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
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-secondary" size={24} />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'PHP', level: 70 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layout className="text-secondary" size={24} />,
      skills: [
        { name: 'React', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 78 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="text-secondary" size={24} />,
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 },
        { name: 'Docker', level: 65 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'MySQL', level: 80 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            My <span className="text-secondary">Skills</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-display">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-semibold text-secondary">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animate ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Also Familiar With
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['REST APIs', 'Responsive Design', 'Agile/Scrum', 'Problem Solving', 'Team Collaboration', 'UI/UX Principles', 'Version Control', 'Database Design'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
