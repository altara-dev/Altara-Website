import Navbar from "@/components/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        
        {/* Left side static spotlight effects */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-secondary/15 via-primary/5 to-transparent rounded-full blur-[80px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]" />
        
        {/* Right side static spotlight effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-secondary/15 via-primary/5 to-transparent rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-[100px]" />
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")' }} />
        
        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10" style={{ paddingTop: '9rem', paddingBottom: '8rem' }}>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                <span className="gradient-text">Terms and Conditions</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Welcome to Altara!
              </p>
              <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                By accessing or using our website, products, or services, you agree to the following Terms and Conditions. Please read them carefully.
              </p>
            </div>

            {/* Terms Content */}
            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  1. About Altara
                </h2>
                <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Altara is an AI Agency that designs and builds enterprise AI solutions for D2C brands worldwide.
                  </p>
                  <p>
                    Our services may include AI consulting, custom AI solution development, enterprise chatbots and other agentic solutions.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  2. Use of the Website
                </h2>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  By using this website, you agree that you will:
                </p>
                <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside leading-relaxed ml-4">
                  <li>Use the site only for lawful purposes</li>
                  <li>Not attempt to disrupt, harm, or misuse our systems</li>
                  <li>Not copy, reproduce, or redistribute content without permission</li>
                </ul>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  We reserve the right to restrict access if misuse is detected.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  3. Services & Engagements
                </h2>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  All services provided by Altara are subject to:
                </p>
                <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside leading-relaxed ml-4">
                  <li>A separate written agreement or proposal</li>
                  <li>Defined scope, timelines, and pricing</li>
                  <li>Mutual acceptance by both parties</li>
                </ul>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  Information shared on this website does not constitute a binding offer.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  4. Intellectual Property
                </h2>
                <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                  <p>
                    All content on this website, including text, visuals, branding, and design is the intellectual property of Altara unless stated otherwise.
                  </p>
                  <p>
                    You may not copy, reuse, or modify our content without prior written consent.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  5. Confidentiality
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Any information shared with Altara during discussions, audits, or engagements will be treated as confidential and used only for the purpose of providing our services.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  Altara will not be liable for:
                </p>
                <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside leading-relaxed ml-4">
                  <li>Indirect or consequential losses</li>
                  <li>Business interruptions</li>
                  <li>Loss of data or revenue resulting from website use</li>
                </ul>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  All services are provided on a best-effort basis unless otherwise specified in a contract.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  7. Third-Party Links
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for their content, policies, or practices.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  8. Termination
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate access to the website if these terms are violated.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  9. Changes to These Terms
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We may update these Terms and Conditions from time to time. Continued use of the website indicates acceptance of the updated terms.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  10. Contact
                </h2>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  For any questions regarding these terms, contact us at:
                </p>
                <a 
                  href="mailto:support@altara.in" 
                  className="text-primary hover:text-primary/80 transition-colors text-base inline-flex items-center gap-2"
                >
                  support@altara.in
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;

