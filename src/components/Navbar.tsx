import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Altara team,\n\nI'm exploring AI solutions for a D2C brand and came across your work. Would love to connect and learn more.");
    const phoneNumber = "918077846426";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <div className="relative max-w-3xl w-full mx-auto px-4 lg:px-5">
        {/* Subtle invisible frost effect - constrained to nav width */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full transition-all duration-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/5 to-white/3 rounded-full transition-all duration-300" />
        
        <nav className="relative z-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group shrink-0 ml-1">
          <img 
            src="/logo.png" 
            alt="Altara" 
            className="h-8 w-auto object-contain"
          />
          <span className="text-lg font-semibold text-foreground uppercase tracking-wide">
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
            Solutions
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors text-sm font-medium whitespace-nowrap"
          >
            FAQ
          </button>
        </div>

        {/* CTA Button */}
        <Button
          variant="default"
          size="sm"
          onClick={() => setIsContactDialogOpen(true)}
          className="bg-primary text-black hover:bg-white rounded-full px-5 shrink-0 -mr-1 transition-colors"
        >
          Let's Talk
        </Button>
        </nav>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
            <DialogDescription>
              Choose your preferred way to contact us
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            {/* Email */}
            <a
              href="mailto:hello@altara.in"
              className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/30 transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 transition-colors">
                <Mail className="h-6 w-6 text-foreground/70" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Email</p>
                <p className="text-sm text-muted-foreground">hello@altara.in</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+918077846426"
              className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/30 transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 transition-colors">
                <Phone className="h-6 w-6 text-foreground/70" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Phone</p>
                <p className="text-sm text-muted-foreground">+91 8077846426</p>
              </div>
            </a>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/30 transition-all duration-200 group text-left"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 transition-colors">
                <MessageCircle className="h-6 w-6 text-foreground/70" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">WhatsApp</p>
                <p className="text-sm text-muted-foreground">+91 8077846426</p>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
