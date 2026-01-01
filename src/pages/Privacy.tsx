import Navbar from "@/components/Navbar";

const Privacy = () => {
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
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-foreground/90 leading-relaxed">
                At Altara, we respect your privacy and are committed to protecting your data.
              </p>
              <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>
            </div>

            {/* Privacy Content */}
            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  We may collect the following information:
                </p>
                <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside leading-relaxed ml-4">
                  <li>Name, email address, phone number</li>
                  <li>Company name and role</li>
                  <li>Messages submitted via forms or WhatsApp</li>
                  <li>Website usage data (cookies, analytics)</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  We use your information to:
                </p>
                <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside leading-relaxed ml-4">
                  <li>Respond to inquiries and requests</li>
                  <li>Provide AI consulting or services</li>
                  <li>Improve our website and offerings</li>
                  <li>Communicate updates or relevant information</li>
                </ul>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  We do not sell or rent your personal data.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  3. Cookies & Analytics
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We use cookies and analytics tools to understand website usage and improve user experience.
                </p>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  You can disable cookies through your browser settings if you prefer.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  4. Data Sharing
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We may share limited data with trusted third-party service providers (e.g., analytics, hosting) strictly for operational purposes.
                </p>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  All partners are required to maintain data confidentiality.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  5. Data Security
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We take reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside leading-relaxed ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent for communications</li>
                </ul>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  You can exercise these rights by contacting us.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  7. International Users
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  As we work with brands worldwide, your data may be processed in different regions while maintaining appropriate safeguards.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  8. Updates to This Policy
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically. Any changes will be reflected on this page.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  9. Contact Us
                </h2>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  If you have questions about this Privacy Policy or your data, reach us at:
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

export default Privacy;

