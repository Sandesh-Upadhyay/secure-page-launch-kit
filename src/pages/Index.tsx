
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TrustBadges from "../components/TrustBadges";
import DealsShowcase from "../components/DealsShowcase";
import TechShowcase from "../components/TechShowcase";
import ProductPlans from "../components/ProductPlans";
import ComparisonTable from "../components/ComparisonTable";
import BenefitsSection from "../components/BenefitsSection";
import TrustSection from "../components/TrustSection";
import FAQSection from "../components/FAQSection";
import TermsSection from "../components/TermsSection";
import Footer from "../components/Footer";
import PrivacySection from "@/components/PrivacySection";
import RefundCancellation from "@/components/RefundCancellation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustBadges />
      <DealsShowcase />
      <TechShowcase />
      <ProductPlans />
      <ComparisonTable />
      <BenefitsSection />
      <TrustSection />      <FAQSection />
      <TermsSection />
      <PrivacySection />
      <RefundCancellation />
      <Footer />
    </div>
  );
};

export default Index;
