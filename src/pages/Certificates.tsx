import { useState } from 'react';
import { Award, Calendar, ExternalLink, Maximize2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import gcodeCert from '@/assets/gcode_certificate.png';
import hackathonCert from '@/assets/Hackathon certificate.jpg';
import cyberCert from '@/assets/certificate_page-0001.jpg';
import androidCert from '@/assets/Android Development.png';
import dataAnalysisCert from '@/assets/Data Analaysis Development.png';
import progFundCert from '@/assets/Programming Fundamentals.png';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'Internship' | 'Hackathon' | 'Udacity' | 'Security';
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  description: string;
  certificateImage: string;
  featured?: boolean;
}

const certificates: Certificate[] = [
  {
    id: 'gcode-internship',
    title: 'Certificate of Internship Completion',
    issuer: 'gCODE Technologies',
    category: 'Internship',
    date: 'October 25, 2026',
    credentialId: 'No. GCODE-INT-C1-015',
    description:
      'Completed Cohort 1 Internship contributing to the AI Legal Assistant as an AI/ML Expert and Team Lead, recognized for commitment and technical contributions.',
    certificateImage: gcodeCert,
    featured: true,
  },
  {
    id: 'python-hackathon',
    title: 'Python Pro Hackathon - 3rd Place',
    issuer: 'TechTonic Tribe & Debre Berhan University',
    category: 'Hackathon',
    date: 'August 18, 2024',
    description:
      'Awarded for remarkable ingenuity, outstanding technical prowess, and collaborative problem solving during the competitive hackathon.',
    certificateImage: hackathonCert,
    featured: true,
  },
  {
    id: 'udacity-android',
    title: 'Android Developer Fundamentals',
    issuer: 'Udacity',
    category: 'Udacity',
    date: 'August 24, 2024',
    credentialUrl: 'https://confirm.udacity.com/SF3ZSL45',
    credentialId: 'SF3ZSL45',
    description:
      'Verified completion of the Android Developer Fundamentals program covering Android app lifecycle, modern UI, and Kotlin architectures.',
    certificateImage: androidCert,
  },
  {
    id: 'udacity-data-analysis',
    title: 'Data Analysis Fundamentals',
    issuer: 'Udacity',
    category: 'Udacity',
    date: 'September 4, 2024',
    credentialUrl: 'https://confirm.udacity.com/FVUR6SKP',
    credentialId: 'FVUR6SKP',
    description:
      'Verified training covering exploratory data analysis, data wrangling, statistical analysis, and visualization techniques.',
    certificateImage: dataAnalysisCert,
  },
  {
    id: 'udacity-prog-fundamentals',
    title: 'Programming Fundamentals',
    issuer: 'Udacity',
    category: 'Udacity',
    date: 'August 14, 2024',
    credentialUrl: 'https://confirm.udacity.com/RZX6XN23',
    credentialId: 'RZX6XN23',
    description:
      'Mastered core object-oriented programming concepts, algorithmic logic, and software problem-solving fundamentals.',
    certificateImage: progFundCert,
  },
  {
    id: 'cybersecurity-hp',
    title: 'Introduction to Cybersecurity Awareness',
    issuer: 'HP LIFE Foundation',
    category: 'Security',
    date: 'September 8, 2024',
    credentialUrl: 'https://www.life-global.org/certificate/d06a53a2-700c-409b-8580-a5b97e54dd08',
    description:
      'Certified in cybersecurity awareness, threat identification, digital hygiene, and security measures to protect network information.',
    certificateImage: cyberCert,
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Internship' | 'Hackathon' | 'Udacity' | 'Security'>('All');

  const filteredCertificates = activeFilter === 'All'
    ? certificates
    : certificates.filter((c) => c.category === activeFilter);

  return (
    <div id="certificates" className="bg-background py-16 scroll-mt-16 border-t border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            My <span className="text-secondary">Certificates</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Professional certifications, internship honors, and verified technical credentials.
          </p>

          {/* Compact Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6">
            {(['All', 'Internship', 'Hackathon', 'Udacity', 'Security'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-105'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {filter === 'All' ? 'All' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCertificates.map((cert, index) => (
            <Card
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className={`group overflow-hidden border-border/60 bg-card hover:border-secondary/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer ${
                cert.featured ? 'ring-1 ring-secondary/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {/* Image Preview Thumbnail */}
              <div
                className="relative aspect-[16/10] bg-muted/40 overflow-hidden cursor-pointer border-b border-border/40 group/thumbnail"
              >
                <img
                  src={cert.certificateImage}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumbnail:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover/thumbnail:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/95 text-foreground text-[11px] font-semibold shadow-md">
                    <Maximize2 size={12} className="text-secondary" /> Click to Expand
                  </span>
                </div>
                {cert.featured && (
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold shadow-xs">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                    {cert.issuer}
                  </span>
                  {cert.credentialId && (
                    <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                      {cert.credentialId}
                    </span>
                  )}
                </div>
                <CardTitle className="text-base font-display font-bold group-hover:text-secondary transition-colors line-clamp-1">
                  {cert.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4 pt-1 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1 mb-2">
                    <Calendar size={12} className="text-secondary" />
                    {cert.date}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/40 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-7 text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <Maximize2 size={12} className="mr-1 group-hover/btn:scale-110 transition-transform" />
                    Preview Image
                  </Button>

                  {cert.credentialUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-muted-foreground hover:text-secondary px-2"
                      onClick={(e) => e.stopPropagation()}
                      asChild
                    >
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Verify Online"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for Full Image Preview */}
        <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
          <DialogContent className="max-w-3xl w-[95vw] p-4 sm:p-5 bg-card border-border">
            {selectedCert && (
              <>
                <DialogHeader className="pb-2 border-b border-border/50">
                  <DialogTitle className="text-base sm:text-xl font-display text-foreground">
                    {selectedCert.title}
                  </DialogTitle>
                  <p className="text-xs text-secondary font-medium">
                    Issued by {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </DialogHeader>

                <div className="mt-3 rounded-lg overflow-hidden bg-muted/20 border border-border/40 flex items-center justify-center max-h-[70vh]">
                  <img
                    src={selectedCert.certificateImage}
                    alt={`${selectedCert.title} certificate`}
                    className="w-full h-auto max-h-[68vh] object-contain rounded-md"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-border/40">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Verified Credential</span>
                  </div>

                  {selectedCert.credentialUrl && (
                    <Button
                      size="sm"
                      className="h-7 text-xs bg-primary hover:bg-navy-light text-primary-foreground"
                      asChild
                    >
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        Verify Online
                        <ExternalLink size={12} />
                      </a>
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Certificates;