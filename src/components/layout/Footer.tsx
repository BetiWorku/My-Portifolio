import { Github, Linkedin, Mail, Send, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/BetiWorku', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/betelhem-worku', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bwwmas@gmail.com', label: 'Email' },
    { icon: Send, href: 'https://t.me/beti_yea', label: 'Telegram' },
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground border-t border-secondary/20">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-display font-bold text-secondary">Betelhem Worku</h3>
            <p className="text-primary-foreground/80 text-xs leading-relaxed max-w-sm">
              Full-Stack Developer | AI/ML Expert & Team Lead | UI/UX Developer
              — passionate about creating purposeful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-secondary">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-xs text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-secondary">Get In Touch</h4>
            <div className="flex space-x-2.5 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 shadow-sm hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Betelhem Worku • Software Engineer & AI/ML Developer.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-secondary/50 text-secondary hover:bg-secondary hover:text-primary h-7 text-xs"
          >
            <ArrowUp size={14} className="mr-1.5" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;