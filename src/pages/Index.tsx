import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyAltara from "@/components/WhyAltara";
import ProductSection from "@/components/ProductSection";
import NeoEmbed from "@/components/NeoEmbed";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhyAltara />
        <ProductSection />
        <NeoEmbed />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
