import { Button } from "@/components/ui/button";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Prominent blue spotlight effect on the right side - similar to orange in reference */}
      <div className="absolute top-0 right-0 w-[800px] h-[1000px] bg-gradient-radial from-primary/30 via-primary/15 to-transparent rounded-full blur-[150px] opacity-80" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[800px] bg-gradient-radial from-primary/20 via-primary/8 to-transparent rounded-full blur-[120px] opacity-60" />
      
      {/* Additional subtle spotlight effects */}
      <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-gradient-radial from-secondary/15 via-primary/5 to-transparent rounded-full blur-[80px] animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px] animate-float" />
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>AI-First Products</span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight animate-fade-in animation-delay-200" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}>
              <span className="text-foreground">Intelligence,</span>
              <br />
              <span className="gradient-text">designed for</span>
              <br />
              <span className="gradient-text">everyday use.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-400">
              Altara builds intelligent AI products that seamlessly integrate into your daily life. 
              Simple, powerful, and crafted for everyone.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
              <Button
                variant="hero"
                size="lg"
                asChild
              >
                <a href="https://neo.altara.in" target="_blank" rel="noopener noreferrer">
                  Try the Chatbot
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right - Wireframe Dotted Globe */}
          <div className="relative h-[400px] lg:h-[600px] animate-scale-in animation-delay-400 flex items-center justify-center">
            {/* Ambient glow behind globe */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-60 pointer-events-none" />
            <RotatingEarth width={550} height={550} className="z-10" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
