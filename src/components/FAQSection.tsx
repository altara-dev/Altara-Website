import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Altara?",
    answer: "Altara is a technology company that builds intelligent AI products designed for everyday consumers. We focus on creating simple, powerful solutions that seamlessly integrate into daily life.",
  },
  {
    question: "How does the Neo chatbot work?",
    answer: "Neo is our AI-powered chatbot that provides natural, context-aware conversations. Simply start a conversation by typing your question or request, and Neo will provide accurate, helpful responses instantly.",
  },
  {
    question: "Is Neo free to use?",
    answer: "Yes, Neo is available for free. You can access it directly on our website or visit neo.altara.in to start using it right away.",
  },
  {
    question: "What makes Altara different?",
    answer: "We believe in simplicity first. Our products hide complexity while making their impact undeniable. We focus on design-first engineering and consumer-centric AI that adapts to you, not the other way around.",
  },
  {
    question: "Can I integrate Altara's solutions into my business?",
    answer: "Yes, we offer custom AI solutions for businesses. Please reach out through our contact form, and our team will get back to you to discuss your specific needs.",
  },
  {
    question: "What industries does Altara serve?",
    answer: "While our consumer products like Neo are available to everyone, we also develop custom AI solutions for various industries including technology, healthcare, finance, and more.",
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
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
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

