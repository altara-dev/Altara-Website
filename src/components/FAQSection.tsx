import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Altara different?",
    answer: "We believe in simplicity first. Our AI products hide complexity while making their impact clear. We focus on design-first engineering and consumer-centric AI that adapts to your business, not the other way around. No clutter. No unnecessary features. Just AI that works.",
  },
  {
    question: "Can Altara's AI Solutions integrate with our existing tools?",
    answer: "Yes. Our AI solutions are designed to work seamlessly with the tools you already use, including websites, CRMs, support platforms, and internal systems. We prioritize smooth integration and minimal disruption, so your team can start seeing value quickly.",
  },
  {
    question: "How secure is our data?",
    answer: "Data security and privacy are a priority for us. Your data is used only to configure and operate your AI solutions, and we follow industry best practices to keep it protected. We never use client data for anything unrelated.",
  },
  {
    question: "How do we get started?",
    answer: "Getting started is simple. Reach out to us using the contact options on this site, and we'll take time to understand your business and use cases. From there, we'll walk you through personalized demos and help you choose the right way to integrate our AI solutions into your workflows.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Find answers to common questions about Altara and our products.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 py-2 bg-card/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

