
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
import Footer from "../components/Footer";

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
      <TrustSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
