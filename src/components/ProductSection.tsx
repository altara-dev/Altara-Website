import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Zap, Sparkles, Layout, ExternalLink } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Smart AI Conversations",
    description: "Natural, context-aware dialogue that understands your needs",
  },
  {
    icon: Zap,
    title: "Fast & Accurate",
    description: "Lightning-quick responses with high precision",
  },
  {
    icon: Layout,
    title: "Intuitive Experience",
    description: "Clean interface designed for seamless interaction",
  },
  {
    icon: Sparkles,
    title: "Built for Daily Use",
    description: "Reliable companion for everyday tasks and questions",
  },
];

const ProductSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-sm text-primary mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet the </span>
            <span className="gradient-text">Altara Chatbot</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your intelligent companion for smarter conversations. 
            Powered by advanced AI, designed for simplicity.
          </p>
        </div>

        {/* Product Card */}
        <Card className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Visual */}
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(208_100%_83%_/_0.1),transparent_70%)]" />
              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg glow-blue">
                  <MessageSquare className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Neo</h3>
                <p className="text-muted-foreground text-sm mt-2">by Altara</p>
              </div>
            </div>

            {/* Right - Features */}
            <div className="p-8 md:p-12">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="w-full mt-8" asChild>
                <a
                  href="https://neo.altara.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use on Neo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductSection;
