import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Import images (optional but recommended for better bundling & type safety)
// You can skip imports and use paths directly if you prefer
// import AndroidCert from '@/assets/Android Development.png';
// import DataAnalysisCert from '@/assets/Data Analaysis Development.png';
// import ProgrammingCert from '@/assets/Programing Fundamentals.png';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description?: string;
  certificateImage: string;   // now required since you provided all three
}

const Certificates = () => {
  const certificates: Certificate[] = [
    {
      title: 'Android Developer Fundamentals',
      issuer: 'Udacity',
      date: 'August 24, 2024',
      description:
        'Verified completion of the Android Developer Fundamentals program covering Android app basics, UI, and lifecycle.',
      credentialUrl: 'https://confirm.udacity.com/SF3ZSL45',
      certificateImage: '/src/assets/Android Development.png',
      // certificateImage: AndroidCert,   // ← alternative if you use imports above
    },
    {
      title: 'Data Analysis Fundamentals',
      issuer: 'Udacity',
      date: 'September 4, 2024',
      description:
        'Verified completion of the Data Analysis Fundamentals program focused on data cleaning, inspection, and visualization.',
      credentialUrl: 'https://confirm.udacity.com/FVUR6SKP',
      certificateImage: '/src/assets/Data Analaysis Development.png',
      // certificateImage: DataAnalysisCert,
    },
    {
      title: 'Programming Fundamentals',
      issuer: 'Udacity',
      date: 'August 14, 2024',
      description:
        'Verified completion of the Programming Fundamentals program covering core programming concepts and problem solving.',
      credentialUrl: 'https://confirm.udacity.com/RZX6XN23',
      certificateImage: '/src/assets/Programming Fundamentals.png',
      // certificateImage: ProgrammingCert,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-3xl font-display font-bold text-foreground mb-3">
            My <span className="text-secondary">Certificates</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="w-14 h-10 rounded-full bg-gradient-to-br from-primary to-navy-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award size={28} className="text-secondary" />
                </div>
                <CardTitle className="text-lg font-display group-hover:text-secondary transition-colors">
                  {cert.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar size={14} />
                    {cert.date}
                  </p>
                </div>

                {cert.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                )}

                {/* Click → shows certificate image in modal */}
                <div className="pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group"
                      >
                        <Award size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                        View Certificate
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl w-[95vw] p-6 sm:p-8">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl mb-4">
                          {cert.title}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="mt-2 overflow-auto max-h-[70vh]">
                        <img
                          src={cert.certificateImage}
                          alt={`${cert.title} certificate`}
                          className="w-full h-auto object-contain rounded-lg shadow-xl border"
                          loading="lazy"
                        />
                      </div>

                      {cert.credentialUrl && (
                        <div className="mt-6 text-center">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline text-sm sm:text-base"
                          >
                            Verify this certificate on Udacity
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More coming soon */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="max-w-md mx-auto border-dashed border-2 border-border/50 bg-transparent">
            <CardContent className="p-8">
              <Award size={48} className="mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground">
                More certificates coming soon...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;