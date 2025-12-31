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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-sm text-primary mb-6">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Why </span>
            <span className="gradient-text">Altara?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe AI should be invisible in its complexity, 
            yet undeniable in its impact.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(208_100%_83%_/_0.1)]"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAltara;
