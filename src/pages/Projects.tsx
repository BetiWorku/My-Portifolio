import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Mini Market Management System',
      description: 'A comprehensive desktop application for managing inventory, sales, and customer data for small retail businesses. Features include real-time stock tracking and sales reporting.',
      technologies: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
      githubUrl: 'https://github.com/BetiWorku',
      featured: true,
    },
    {
      title: 'DBU Launch Management System',
      description: 'A full-stack web application for managing university launch services, including meal scheduling, student registration, and payment tracking.',
      technologies: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/BetiWorku',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Telebirr Super App Clone',
      description: 'A frontend clone of the popular Ethiopian mobile money application, showcasing modern UI/UX design principles and responsive layouts.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/BetiWorku',
      liveUrl: '#',
    },
    {
      title: 'Snake Game',
      description: 'A classic snake game implementation with modern styling, score tracking, and increasing difficulty levels.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/BetiWorku',
      liveUrl: '#',
    },
    {
      title: 'Simple Calculator',
      description: 'A beautiful calculator application built with React, featuring a clean interface and support for basic mathematical operations.',
      technologies: ['React', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/BetiWorku',
      liveUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            My <span className="text-secondary">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                project.featured ? 'lg:col-span-1 ring-2 ring-secondary/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Folder size={24} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  {project.featured && (
                    <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-display group-hover:text-secondary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-secondary"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-navy-light"
            asChild
          >
            <a href="https://github.com/BetiWorku" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
