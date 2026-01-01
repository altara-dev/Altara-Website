import { ArrowUpRight } from "lucide-react";

// Footer Content Component
const FooterContent = () => {
  return (
    <footer className="relative bg-background w-full h-full">
      {/* Blue gradient patch in bottom right - matching Hero Section style */}
      <div 
        className="absolute -bottom-[200px] right-0 w-[800px] h-[800px] rounded-full blur-[80px] pointer-events-none" 
        style={{
          background: 'radial-gradient(circle, hsl(206 93% 71% / 0.2) 0%, hsl(206 93% 71% / 0.1) 50%, transparent 100%)',
          transform: 'translateX(100px)'
        }}
      />
      
      <div className="w-full pt-4 md:pt-6 pb-4 md:pb-6 pr-16 md:pr-24 relative z-10 h-full flex flex-col justify-between pl-16 md:pl-24 overflow-visible">
        {/* Top section - LinkedIn/WhatsApp, Copyright, and Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 w-full">
          {/* LinkedIn and WhatsApp - Left */}
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href="https://www.linkedin.com/company/altaratech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
            >
              LinkedIn
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a 
              href="https://wa.me/918077846426?text=Hi%2C%0A%0AI'm%20exploring%20AI%20solutions%20for%20a%20D2C%20brand%20and%20came%20across%20your%20work.%20Would%20love%20to%20connect%20and%20learn%20more."
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
            >
              WhatsApp
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          
          {/* Copyright text - Center */}
          <p className="text-sm md:text-base text-foreground/80 text-center flex-1 ml-8 md:ml-12">
            © 2025 Altara. All Rights Reserved.
          </p>
          
          {/* Terms and Privacy links - Right */}
          <div className="flex gap-4 md:gap-6 text-sm md:text-base">
            <a 
              href="/terms" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
            >
              Terms and Conditions
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a 
              href="/privacy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
            >
              Privacy Policy
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
        
        {/* Bottom section - ALTARA text (upper 3/4 visible) */}
        <div className="absolute bottom-0 left-0 w-full overflow-visible" style={{ height: '75%' }}>
          <div className="flex items-end justify-center gap-0 absolute left-0" style={{ width: '100%', bottom: '-20%' }}>
            <h1 
              className="font-bold gradient-text uppercase tracking-tight leading-none text-center whitespace-nowrap"
              style={{
                fontSize: 'clamp(5.25rem, 26.5vw, 31.5rem)',
                letterSpacing: '-0.05em',
                transform: 'translateY(-2.5rem)',
                width: '100%',
                opacity: 0.8
              }}
            >ALTARA
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sticky Footer Component (Method 1: position fixed with clip-path)
const Footer = () => {
  // Footer height - adjust as needed based on your content
  const footerHeight = 550;

  return (
    <>
      {/* Top border line - scrolls with page */}
      <div 
        className="relative w-full z-30"
        style={{
          height: '1.5px',
          background: 'rgba(255, 255, 255, 0.1)'
        }}
      />
      <div 
        className="relative w-full"
        style={{
          height: `${footerHeight}px`,
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"
        }}
      >
        <div 
          className="fixed bottom-0 w-full"
          style={{
            height: `${footerHeight}px`
          }}
        >
          <FooterContent />
        </div>
      </div>
    </>
  );
};

export default Footer;
