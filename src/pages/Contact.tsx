import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
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
      icon: Github,
      label: 'GitHub',
      value: 'BetiWorku',
      href: 'https://github.com/BetiWorku',
      color: 'bg-gray-500/10 text-gray-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'betelhem-worku',
      href: 'https://linkedin.com/in/betelhem-worku',
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@beti_yea',
      href: 'https://t.me/beti_yea',
      color: 'bg-sky-500/10 text-sky-600',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Get In <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon size={22} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="font-medium text-foreground group-hover:text-secondary transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Location Card */}
            <Card className="border-border/50 shadow-md mt-6">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <MapPin size={22} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Ethiopia</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or just say hello..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-border focus:border-secondary focus:ring-secondary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-navy-light text-primary-foreground"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
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
