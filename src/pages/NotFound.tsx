import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        
        {/* Left side static spotlight effects */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-secondary/15 via-primary/5 to-transparent rounded-full blur-[80px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]" />
        
        {/* Right side static spotlight effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-secondary/15 via-primary/5 to-transparent rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]" />
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")' }} />
        
        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '9rem', paddingBottom: '4rem' }}>
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none mb-6">
              <span className="gradient-text">404</span>
            </h1>
            
            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            
            {/* Back to Home Button */}
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 rounded-full"
              asChild
            >
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
