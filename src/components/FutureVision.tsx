import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FutureVision = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-8 glow-blue">
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">The Future is Unfolding</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Altara is building an ecosystem of AI-powered products designed for 
            everyday consumers. More intelligent solutions are on the horizon.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["More Products Coming", "Consumer AI", "Growing Ecosystem", "Innovation First"].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button variant="hero-outline" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Stay Updated
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
