
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TechShowcase from "../components/TechShowcase";
import ProductPlans from "../components/ProductPlans";
import ComparisonTable from "../components/ComparisonTable";
import BenefitsSection from "../components/BenefitsSection";
import TrustSection from "../components/TrustSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <HeroSection />
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
