import { Mail, Github, Linkedin, Send, MapPin, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bwwmas@gmail.com',
      href: 'mailto:bwwmas@gmail.com',
      color: 'bg-red-500/10 text-red-600',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@beti_yea',
      href: 'https://t.me/beti_yea',
      color: 'bg-sky-500/10 text-sky-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'betelhem-worku',
      href: 'https://linkedin.com/in/betelhem-worku',
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'BetiWorku',
      href: 'https://github.com/BetiWorku',
      color: 'bg-gray-500/10 text-gray-700',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out, Betelhem will get back to you shortly!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="min-h-screen bg-background py-16 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Get In <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Have a project in mind, want to discuss software engineering, or explore collaboration?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-4 animate-slide-in-left">
            <h2 className="text-base font-display font-bold text-foreground mb-2 flex items-center gap-2">
              <Sparkles className="text-secondary" size={16} />
              Direct Communication
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="border-border/60 bg-card shadow-xs hover:border-secondary/50 transition-all hover:-translate-y-0.5">
                    <CardContent className="p-3.5 flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg ${method.color} flex items-center justify-center group-hover:scale-105 transition-transform shrink-0`}>
                        <method.icon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] text-muted-foreground">{method.label}</p>
                        <p className="text-xs font-semibold text-foreground group-hover:text-secondary transition-colors truncate">
                          {method.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Location Card */}
            <Card className="border-border/60 bg-card shadow-xs">
              <CardContent className="p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Location & University</p>
                  <p className="text-xs font-semibold text-foreground">Debre Birhan University, Ethiopia</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 animate-slide-in-right">
            <Card className="border-border/60 bg-card shadow-sm">
              <CardContent className="p-5 sm:p-6">
                <h2 className="text-base font-display font-bold text-foreground mb-4">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground">Your Name</label>
                      <Input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-9 text-xs border-border/70 focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-foreground">Email Address</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-9 text-xs border-border/70 focus:border-secondary"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">Message</label>
                    <Textarea
                      placeholder="Write your inquiry, project description, or greeting..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="text-xs border-border/70 focus:border-secondary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="w-full h-9 bg-primary hover:bg-navy-light text-primary-foreground shadow-sm text-xs font-medium"
                  >
                    <Send size={14} className="mr-1.5" />
                    Send Message to Beti
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
