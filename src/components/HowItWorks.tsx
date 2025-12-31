import { MessageCircle, Cpu, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Start a Conversation",
    description: "Simply type your question or request",
  },
  {
    icon: Cpu,
    title: "AI Processes",
    description: "Our intelligent system analyzes your input",
  },
  {
    icon: Send,
    title: "Get Response",
    description: "Receive accurate, helpful answers instantly",
  },
  {
    icon: CheckCircle,
    title: "Take Action",
    description: "Use insights to accomplish your goals",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-sm text-primary mb-6">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with Altara AI is effortless
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(208_100%_83%_/_0.1)]">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-muted border border-border text-xs font-bold flex items-center justify-center text-muted-foreground">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
