import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background px-4">
      <div className="text-center max-w-md p-8 rounded-2xl bg-card border border-border/60 shadow-xl">
        <span className="text-7xl font-display font-extrabold text-secondary tracking-tight block mb-2">
          404
        </span>
        <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
        <p className="text-muted-foreground text-sm mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-primary hover:bg-navy-light text-primary-foreground shadow-md">
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
