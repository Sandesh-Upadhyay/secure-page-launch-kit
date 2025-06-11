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
      className="relative min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="flex-1 w-full max-w-full mx-auto px-2 sm:px-4 md:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
        >
          <HeroSection />
          <div className="flex justify-center mt-8 w-full">
            <motion.a
              href="tel:+1 877-593-3166"
              className="w-full max-w-xs py-4 px-8 text-lg font-extrabold tracking-wide rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-200 uppercase text-center"
              aria-label="Buy Now - Call Support (+1 877-593-3166)"
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.18)" }}
              whileTap={{ scale: 0.97 }}
            >
              BUY NOW
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <TrustBadges />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <DealsShowcase />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <TechShowcase />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <ProductPlans />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full overflow-x-auto">
          <ComparisonTable />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <BenefitsSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <TrustSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <FAQSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <TermsSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <PrivacySection/>
        </motion.div>

        <motion.div variants={sectionVariants} initial="offscreen" whileInView="onscreen" className="w-full">
          <RefundCancellation />
        </motion.div>
      </main>
      <Footer />
    </motion.main>
  );
};

export default Index;