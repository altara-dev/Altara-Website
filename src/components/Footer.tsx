import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Blue radial spotlight glow - positioned under Social Media column (3rd column) */}
      <div className="absolute bottom-0 left-[62.5%] -translate-x-1/2 w-[600px] h-[400px] bg-primary/25 rounded-full blur-[120px] opacity-70" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Four Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Column 1: About Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">About Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:hello@altara.in" 
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    hello@altara.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <a 
                    href="tel:+918148646426" 
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    +91 81486 46426
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-4 border-l border-border/30 pl-8 lg:pl-12">
            <h3 className="text-sm font-semibold text-foreground mb-4">Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Services
              </button>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Process
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Industries
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Team
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                404
              </a>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4 border-l border-border/30 pl-8 lg:pl-12">
            <h3 className="text-sm font-semibold text-foreground mb-4">Social Media</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                aria-label="X/Twitter"
              >
                <Twitter className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>X/Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4 border-l border-border/30 pl-8 lg:pl-12">
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & conditions
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-border/30 mb-8">
          <p className="text-xs text-muted-foreground">
            © {currentYear}, Matmajor Tech Pvt Ltd. All rights reserved.
          </p>
        </div>

        {/* Large ALTARA Logo */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-bold leading-none tracking-wide text-foreground select-none">
            ALTARA
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
