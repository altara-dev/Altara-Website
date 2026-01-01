import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleLetsTalkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch custom event to trigger navbar contact dialog
    window.dispatchEvent(new CustomEvent("openContactDialog"));
  };

  return (
    <section id="cta" className="pt-12 md:pt-16 pb-32 md:pb-40 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Ready to see how </span>
            <span className="gradient-text">Altara transforms your business?</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Tell us a bit about your brand and what you're trying to improve. We'll walk you through how our AI solutions can plug into your workflows, with a personalized demo, not a sales pitch.
          </p>

          {/* Primary CTA Button */}
          <Button
            variant="default"
            size="lg"
            className="bg-primary text-black hover:bg-white rounded-full px-8 py-6 text-lg transition-colors"
            onClick={handleLetsTalkClick}
          >
            Let's Talk
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

