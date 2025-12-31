import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

const NeoBanner = () => {
  return (
    <section className="relative py-8 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl glow-border p-8 md:p-10 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-[60px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Try our chatbot on <span className="gradient-text">Neo</span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Experience intelligent conversations powered by Altara AI
                </p>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <a
                href="https://neo.altara.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Go to neo.altara.in
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeoBanner;
