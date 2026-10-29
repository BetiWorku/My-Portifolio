import { useState } from 'react';
import { ExternalLink, Github, Sparkles, Bot, BookOpen, Store, School, Smartphone, Bus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: 'AI/ML' | 'Mobile' | 'Web' | 'Desktop';
  icon: React.ComponentType<{ className?: string; size?: number }>;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  highlightBadge?: string;
}

const projects: Project[] = [
  {
    id: 'ethiopian-legal-ai',
    title: 'Ethiopian AI Legal Assistant',
    subtitle: 'Conversational Legal Intelligence Chatbot',
    description:
      'An intelligent legal assistant chatbot designed to interpret Ethiopian legal codes and proclamations with conversational citations. Developed during gCODE Cohort 1 as AI/ML Expert & Team Lead.',
    technologies: ['Python', 'FastAPI', 'NLP', 'LangChain / RAG', 'React', 'Vector DB', 'Tailwind CSS'],
    category: 'AI/ML',
    icon: Bot,
    githubUrl: 'https://github.com/BetiWorku',
    featured: true,
    highlightBadge: 'Team Lead & AI/ML',
  },
  {
    id: 'bus-tracking-system',
    title: 'Smart Bus Tracking System',
    subtitle: 'Real-Time Public & Campus Transit App',
    description:
      'Native Android mobile application built with Kotlin for real-time bus tracking. Integrates live GPS map visualization, ETA calculations, route navigation, and transit stop schedules.',
    technologies: ['Android SDK', 'Kotlin', 'Google Maps API', 'Firebase', 'GPS Services', 'Material Design'],
    category: 'Mobile',
    icon: Bus,
    githubUrl: 'https://github.com/BetiWorku',
    featured: true,
    highlightBadge: 'Android & Kotlin',
  },
  {
    id: 'poetry-platform',
    title: 'PoetVerse - Poetry Platform',
    subtitle: 'Creative Writing & Reading Web App',
    description:
      'A deployed full-stack literature and poetry sharing platform built for readers and writers. Features modern typography, categorized poem publication, and reader-friendly interfaces.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Netlify'],
    category: 'Web',
    icon: BookOpen,
    githubUrl: 'https://github.com/BetiWorku',
    liveUrl: 'https://beti-poetry-platform.netlify.app/poems/6a4616df60b83fdab108bd28',
    featured: true,
    highlightBadge: 'Live Deployed',
  },
  {
    id: 'mini-market',
    title: 'Mini Market Management System',
    subtitle: 'Retail Inventory & POS System',
    description:
      'A desktop management system for small to medium retail businesses. Streamlines inventory tracking, point-of-sale transactions, invoice generation, and analytical sales reporting.',
    technologies: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    category: 'Desktop',
    icon: Store,
    githubUrl: 'https://github.com/BetiWorku',
    featured: false,
    highlightBadge: 'Enterprise Software',
  },
  {
    id: 'dbu-management',
    title: 'DBU Service Management System',
    subtitle: 'Campus Operations Platform',
    description:
      'Campus web portal for Debre Birhan University services, managing student dining registration, schedule coordination, and administrative reporting.',
    technologies: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
    category: 'Web',
    icon: School,
    githubUrl: 'https://github.com/BetiWorku',
    featured: false,
  },
  {
    id: 'telebirr-clone',
    title: 'Telebirr Super App Mobile UI',
    subtitle: 'FinTech Mobile Interface Clone',
    description:
      'A sleek, mobile-first frontend experience replicating Ethiopia’s premier mobile money ecosystem, highlighting interactive payment flows and modern UI styling.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    category: 'Mobile',
    icon: Smartphone,
    githubUrl: 'https://github.com/BetiWorku',
    featured: false,
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'AI/ML' | 'Mobile' | 'Web' | 'Desktop'>('All');

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <div id="projects" className="bg-background py-16 scroll-mt-16 border-t border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            My <span className="text-secondary">Projects</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Practical applications across AI/ML systems, Android Kotlin mobile development, and full-stack web platforms.
          </p>

          {/* Compact Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6">
            {(['All', 'AI/ML', 'Mobile', 'Web', 'Desktop'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-105'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {tab === 'All'
                  ? 'All'
                  : tab === 'AI/ML'
                  ? 'AI & ML'
                  : tab === 'Mobile'
                  ? 'Mobile (Android)'
                  : tab === 'Web'
                  ? 'Web Apps'
                  : 'Desktop'}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.id}
                className={`group border-border/60 bg-card hover:border-secondary/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  project.featured ? 'ring-1 ring-secondary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 shadow-xs">
                      <Icon size={18} />
                    </div>

                    {project.highlightBadge && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary text-[10px] font-semibold tracking-wide border border-secondary/25">
                        {project.highlightBadge}
                      </span>
                    )}
                  </div>

                  <div>
                    <CardTitle className="text-base font-display font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                      {project.title}
                    </CardTitle>
                    <p className="text-[11px] font-medium text-muted-foreground mt-0.5 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="p-4 pt-1 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-3 pt-1">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-muted/70 text-foreground/80 rounded text-[10px] font-medium border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-1.5 py-0.5 bg-muted/50 text-muted-foreground rounded text-[10px]">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2 pt-2 border-t border-border/40">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 h-7 text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all px-2"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={13} className="mr-1" />
                            Source Code
                          </a>
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="flex-1 h-7 text-xs bg-secondary text-secondary-foreground hover:bg-gold-light shadow-xs px-2"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={13} className="mr-1" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compact Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-xs text-muted-foreground mb-3 font-medium">Interested in exploring more source code and contributions?</p>
          <Button
            size="sm"
            className="bg-primary hover:bg-navy-light text-primary-foreground shadow-md px-5"
            asChild
          >
            <a href="https://github.com/BetiWorku" target="_blank" rel="noopener noreferrer">
              <Github size={15} className="mr-1.5" />
              Visit Beti's GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
