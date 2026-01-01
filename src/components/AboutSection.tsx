import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const ContentLine = ({ content, hasGradient = false }: { content: string; hasGradient?: boolean }) => {
  const contentRef = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start 0.70", "start start"],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className="text-container inline-block relative overflow-hidden" ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className={`highlighted-text absolute left-0 top-0 w-full h-full z-10 transition-[clip-path] duration-100 ease-out ${hasGradient ? "gradient-text" : "text-foreground"}`}
        data-text={content}
      />
      <span className={`static-text relative inline-block ${hasGradient ? "gradient-text" : "text-muted-foreground"}`}>
        {content}
      </span>
    </span>
  );
};

const AboutSection = () => {
  const content = [
    { text: "We’re an AI solutions company helping", gradient: false },
    { text: "D2C brands use AI in practical, impactful ways.", gradient: false },
    { text: "We build enterprise-ready AI solutions that", gradient: false },
    { text: "adapt to how your team actually works.", gradient: false },
    
    
  ];

  return (
    <section id="about" className="pt-40 md:pt-48 pb-24 md:pb-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            <span className="text-foreground">About </span>
            <span className="gradient-text">Us</span>
          </h2>

          {/* Content */}
          <div className="text-3xl md:text-4xl leading-relaxed font-medium">
            <p className="text-center">
              <ContentLine content="We’re an AI solutions company helping" hasGradient={false} />
              {content.slice(1).map((item, index) => (
                <span key={index + 1}>
                  <ContentLine content={item.text} hasGradient={item.gradient} />
                  {index < content.length - 2 && " "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .highlighted-text::before {
          content: attr(data-text);
          display: inline-block;
        }
        .text-container {
          line-height: 1.3;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

