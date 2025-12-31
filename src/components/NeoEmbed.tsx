const NeoEmbed = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-sm text-primary mb-6">
            Try Neo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Experience </span>
            <span className="gradient-text">Neo Chatbot</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interact with our AI chatbot directly on this page
          </p>
        </div>

        {/* Embedded Neo Website */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
          <iframe
            src="https://neo.altara.in"
            title="Neo Chatbot"
            className="w-full h-[500px] md:h-[600px] border-0"
            allow="clipboard-read; clipboard-write"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
    </section>
  );
};

export default NeoEmbed;

