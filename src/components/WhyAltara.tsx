import { Lightbulb, Target, Palette, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Simplicity First",
    description: "Complexity hidden, elegance visible. Every interaction is intuitive and effortless.",
  },
  {
    icon: Target,
    title: "Purpose-Built Intelligence",
    description: "AI engineered for real tasks, not just demonstrations. Practical power at your fingertips.",
  },
  {
    icon: Palette,
    title: "Design-First Engineering",
    description: "Where form meets function. Beautiful products that work beautifully.",
  },
  {
    icon: Users,
    title: "Consumer-Centric AI",
    description: "Technology that adapts to you, not the other way around. Human-first always.",
  },
];

const WhyAltara = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Why </span>
            <span className="gradient-text">Altara?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We believe technology should be invisible in its complexity, 
            yet undeniable in its impact.
          </p>
        </div>

        {/* Values Grid - Elegant and Minimal */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center shrink-0 group-hover:border-border transition-colors">
                  <value.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {value.description}
                  </p>
                </div>
              </div>
              {index < values.length - 1 && (
                <div className="mt-12 md:hidden border-t border-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAltara;
