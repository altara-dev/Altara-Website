import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <div className="relative max-w-5xl w-full mx-auto px-6 lg:px-8">
        {/* Subtle invisible frost effect - constrained to nav width */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/5 to-white/3 rounded-lg" />
        
        <nav className="relative z-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img 
            src="/altara.png" 
            alt="Altara" 
            className="h-8 w-auto object-contain"
          />
          <span className="text-lg font-semibold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
            ALTARA
          </span>
        </Link>

        {/* Nav Links - Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium whitespace-nowrap"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium whitespace-nowrap"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium whitespace-nowrap"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <Button
          variant="default"
          size="sm"
          onClick={() => scrollToSection("contact")}
          className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-5 shrink-0"
        >
          Contact Us
        </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
