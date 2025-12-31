import RotatingEarth from "@/components/ui/wireframe-dotted-globe";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Left side static spotlight effects */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-secondary/15 via-primary/5 to-transparent rounded-full blur-[80px]" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]" />
      
      {/* Right side static spotlight effects - matching left */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-secondary/15 via-primary/5 to-transparent rounded-full blur-[80px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]" />
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")' }} />
      
      {/* Fading static grid lines - top left origin */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 120% 120% at 0% 0%, black 20%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse 120% 120% at 0% 0%, black 20%, transparent 60%)'
        }}
      />

      {/* Text Content - Positioned above the globe */}
      <div className="container mx-auto px-6 relative z-10 pb-[35vh]" style={{ paddingTop: '9rem' }}>
        <div className="flex flex-col items-center">
          {/* Centered Content */}
          <div className="text-center max-w-5xl animate-fade-in animation-delay-200">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}>
              <span className="text-foreground block whitespace-nowrap">Turning AI into real leverage</span>
              <span className="gradient-text block whitespace-nowrap">for D2C brands worldwide</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto animate-fade-in animation-delay-300 mt-4">
              Enterprise AI solutions for marketing, operations, and customer experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400 mt-10">
              <Button
                variant="default"
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 rounded-full"
                asChild
              >
                <a href="https://neo.altara.in" target="_blank" rel="noopener noreferrer">
                  Try Neo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border bg-background/50 text-foreground hover:bg-background/70 rounded-full"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom - Wireframe Dotted Globe positioned at bottom - Only upper half visible */}
      <div className="absolute bottom-0 left-0 right-0 h-[65vh] overflow-hidden pointer-events-none z-0">
        <div className="relative w-full h-full flex items-end justify-center">
          {/* Ambient glow behind globe */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-40 pointer-events-none" />
          <div className="relative w-full h-full flex items-end justify-center">
            <div className="z-10 translate-y-[50%]" style={{ transform: 'translateY(60%) scale(1.6)' }}>
              <RotatingEarth width={2400} height={1200} className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
