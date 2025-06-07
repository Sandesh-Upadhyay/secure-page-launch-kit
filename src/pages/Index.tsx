
import { motion } from "framer-motion"
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

const sectionVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
}

const Index = () => {
  return (
    <motion.main 
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="flex-1">
        <motion.div 
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
        >
          <HeroSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <TrustBadges />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <DealsShowcase />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <TechShowcase />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <ProductPlans />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <ComparisonTable />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <BenefitsSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <TrustSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <FAQSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <TermsSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <PrivacySection/>
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen">
          <RefundCancellation />
        </motion.div>
      </main>
      <Footer />
    </motion.main>
  );
};

export default Index;