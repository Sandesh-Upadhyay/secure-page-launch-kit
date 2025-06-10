import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const SaleBadge = () => (
  <motion.div
    initial={{ scale: 1 }}
    animate={{ 
      scale: [1, 1.05, 1],
      rotate: [0, -2, 2, 0]
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    className="absolute -top-3 -right-3 z-10"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full blur-[2px] opacity-75 animate-pulse"></div>
      <div className="relative bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 py-1.5 rounded-full font-bold shadow-lg border border-white">
        <div className="flex flex-col items-center gap-0">
          <span className="text-[10px] uppercase tracking-wider font-bold">Sale Live</span>
          <span className="text-sm font-black leading-tight">50% OFF</span>
        </div>
      </div>
    </div>
  </motion.div>
);
const HeroSection = () => {
  const { addItem } = useCart()
  const products = [
    // Original 4
    {
      id: 'essential-security',
      name: "AVSafe Solutions Essential Security",
      subtitle: "1-Year / 3-Devices",
      originalPrice: 26.99,
      salePrice: 22.99,
      image: "/mcafee-antivirus-2.webp",
      link: "/product/essential-security-1-year-3-devices",
    },
    {
      id: 'premium-protection',
      name: "AVSafe Solutions Premium Protection",
      subtitle: "10 Devices, 1 Year, Global",
      originalPrice: 109.0,
      salePrice: 99.0,
      image: "/Avast-320x320.png",
      link: "/product/premium-protection-10-devices-1-year",
    },
    {
      id: 'advanced-plus',
      name: "AVSafe Solutions Advanced Plus",
      subtitle: "2 Years | 1 Device | Windows | Downloadable",
      originalPrice: 89.99,
      salePrice: 47.99,
      image: "/bit-av-1-600x600.png",
      link: "/product/advanced-plus-2-years-1-device",
    },
    {
      id: 'internet-security',
      name: "AVSafe Solutions Internet Security",
      subtitle: "1-Year / 3-Devices",
      originalPrice: 44.99,
      salePrice: 34.99,
      image: "/mcafee-internet-security.webp",
      link: "/product/internet-security-1-year-3-devices",
    },
    // User provided products (first 32 from your list)
    { id: "avast-premium", name: "Avast Premium Security", subtitle: "10 Devices, 1 Year", salePrice: 59.99, originalPrice: 99.99, image: "/Avast Premium Security.jpg", link: "/product/avast-premium" },
    { id: "avg-security", name: "AVG Internet Security", subtitle: "Enhanced Firewall Protection", salePrice: 60.0, originalPrice: 89.99, image: "/AVG Antivirus.jpg", link: "/product/avg-security" },
    { id: "bitdefender", name: "Bitdefender Antivirus Plus", subtitle: "Award-winning Protection", salePrice: 47.99, originalPrice: 89.99, image: "/BitDefender Antivirus Plus.jpg", link: "/product/bitdefender" },
    { id: "mcafee", name: "McAfee Antivirus", subtitle: "1 Year Subscription", salePrice: 22.99, originalPrice: 44.99, image: "/McAfee Antivirus.jpg", link: "/product/mcafee" },
    { id: "avast-premium-plus", name: "Avast Premium Security Plus", subtitle: "Advanced Protection Package", salePrice: 89.99, originalPrice: 169.99, image: "/Avast Premium Security2.jpg", link: "/product/avast-premium-plus" },
    { id: "avg-ultimate", name: "AVG Ultimate Security", subtitle: "Complete Protection Suite", salePrice: 69.99, originalPrice: 129.99, image: "/avg-internet-security2.png.jpg", link: "/product/avg-ultimate" },
    { id: "bitdefender-total", name: "BitDefender Total Security", subtitle: "Premium Protection Package", salePrice: 79.99, originalPrice: 149.99, image: "/BitDefender Antivirus Plus2.jpg", link: "/product/bitdefender-total" },
    { id: "mcafee-total", name: "McAfee Total Protection", subtitle: "Complete Security Suite", salePrice: 69.99, originalPrice: 129.99, image: "/McAfee Internet Security 2.jpg", link: "/product/mcafee-total" },
    { id: "norton-360-premium", name: "Norton 360 Premium", subtitle: "Ultimate Security Package", salePrice: 99.99, originalPrice: 199.99, image: "/N360-Standard-Subscription-500x500-1.png", link: "/product/norton-360-premium" },
    { id: "mcafee-livesafe-premium", name: "McAfee LiveSafe Premium", subtitle: "Advanced Protection", salePrice: 89.99, originalPrice: 179.99, image: "/McAfee LiveSafe 2.jpg", link: "/product/mcafee-livesafe-premium" },
    { id: "bitdefender-premium-plus", name: "BitDefender Premium Plus", subtitle: "Advanced Security Suite", salePrice: 84.99, originalPrice: 169.99, image: "/BitDefender Antivirus Plus3.jpg", link: "/product/bitdefender-premium-plus" },
    { id: "mcafee-total-premium", name: "McAfee Total Protection Premium", subtitle: "Premium Security Package", salePrice: 94.99, originalPrice: 189.99, image: "/McAfee LiveSafe 3.jpg", link: "/product/mcafee-total-premium" },
    { id: "norton-360-standard-1", name: "Norton 360 Standard", subtitle: "Basic Protection Package", salePrice: 49.99, originalPrice: 99.99, image: "/Norton 360 Standard.jpg", link: "/product/norton-360-standard-1" },
    { id: "trend-micro-max-1", name: "Trend Micro Maximum Security", subtitle: "Complete Protection", salePrice: 69.99, originalPrice: 139.99, image: "/Trend Micro Maximum Security.jpg", link: "/product/trend-micro-max-1" },
    { id: "webroot-secure-1", name: "Webroot SecureAnywhere", subtitle: "Light & Fast Protection", salePrice: 39.99, originalPrice: 79.99, image: "/Webroot secure Antivirus.jpg", link: "/product/webroot-secure-1" },
    { id: "norton-deluxe-2", name: "Norton 360 Deluxe", subtitle: "Premium Family Protection", salePrice: 89.99, originalPrice: 179.99, image: "/norton 360 deluxe.jpg", link: "/product/norton-deluxe-2" },
    { id: "bitdefender-family", name: "BitDefender Family Pack", subtitle: "Complete Family Security", salePrice: 99.99, originalPrice: 199.99, image: "/Bitdefender Antivirus Plus Digital Download.jpg", link: "/product/bitdefender-family" },
    { id: "mcafee-total-advanced", name: "McAfee Total Protection Advanced", subtitle: "Advanced Security Suite", salePrice: 79.99, originalPrice: 159.99, image: "/McAfee LiveSafe 4.jpg", link: "/product/mcafee-total-advanced" },
    { id: "norton-premium-plus", name: "Norton Premium Plus", subtitle: "Ultimate Protection Pack", salePrice: 129.99, originalPrice: 259.99, image: "/norton security.jpg", link: "/product/norton-premium-plus" },
    { id: "trend-micro-premium", name: "Trend Micro Premium Security", subtitle: "Enterprise-Grade Protection", salePrice: 119.99, originalPrice: 239.99, image: "/Trend Micro Maximum Security.jpg", link: "/product/trend-micro-premium" },
    { id: "mcafee-livesafe-ultimate", name: "McAfee LiveSafe Ultimate", subtitle: "Ultimate Protection Suite", salePrice: 109.99, originalPrice: 219.99, image: "/McAfee LiveSafe 5.jpg", link: "/product/mcafee-livesafe-ultimate" },
    { id: "avg-professional", name: "AVG Professional Security", subtitle: "Professional Grade Protection", salePrice: 79.99, originalPrice: 159.99, image: "/AVG Antivirus award winning security.jpg 2.jpg", link: "/product/avg-professional" },
    { id: "bitdefender-advanced", name: "BitDefender Advanced Security", subtitle: "Advanced Protection Plus", salePrice: 89.99, originalPrice: 179.99, image: "/bit-av-1-600x600.png", link: "/product/bitdefender-advanced" },
    { id: "norton-complete", name: "Norton Complete Protection", subtitle: "Complete Security Solution", salePrice: 119.99, originalPrice: 239.99, image: "/Norton-Security-500x500-1.png", link: "/product/norton-complete" },
    { id: "mcafee-professional", name: "McAfee Professional", subtitle: "Professional Security Suite", salePrice: 129.99, originalPrice: 259.99, image: "/mcafee-antivirus-1.webp", link: "/product/mcafee-professional" },
    { id: "avast-ultimate", name: "Avast Ultimate", subtitle: "Ultimate Protection Suite", salePrice: 149.99, originalPrice: 299.99, image: "/Avast-320x320.png", link: "/product/avast-ultimate" },
    { id: "trend-micro-enterprise", name: "Trend Micro Enterprise", subtitle: "Enterprise Security Solution", salePrice: 159.99, originalPrice: 319.99, image: "/Trend Micro Maximum Security.jpg", link: "/product/trend-micro-enterprise" },
    { id: "mcafee-small-business", name: "McAfee Small Business", subtitle: "Business Security Suite", salePrice: 139.99, originalPrice: 279.99, image: "/mcafee-antivirus-2.webp", link: "/product/mcafee-small-business" },
    { id: "norton-business", name: "Norton Business Premium", subtitle: "Premium Business Protection", salePrice: 169.99, originalPrice: 339.99, image: "/norton for tabbar.jpg", link: "/product/norton-business" },
    { id: "bitdefender-enterprise", name: "BitDefender Enterprise", subtitle: "Enterprise Security Suite", salePrice: 179.99, originalPrice: 359.99, image: "/BitDefender Antivirus PLus.png", link: "/product/bitdefender-enterprise" },
    { id: "mcafee-endpoint", name: "McAfee Endpoint Security", subtitle: "Complete Endpoint Protection", salePrice: 149.99, originalPrice: 299.99, image: "/mcafee-livesafe.webp", link: "/product/mcafee-endpoint" },
    { id: "avg-business", name: "AVG Business Security", subtitle: "Complete Business Protection", salePrice: 159.99, originalPrice: 319.99, image: "/avg-internet-security.png", link: "/product/avg-business" },
    { id: "trend-micro-max-business", name: "Trend Micro Maximum Business", subtitle: "Maximum Business Security", salePrice: 189.99, originalPrice: 379.99, image: "/Trend Micro Maximum Security.jpg", link: "/product/trend-micro-max-business" },
    { id: "norton-cyber-security", name: "Norton Cyber Security", subtitle: "Advanced Cyber Protection", salePrice: 199.99, originalPrice: 399.99, image: "/Norton-Security-500x500-1.png", link: "/product/norton-cyber-security" },
    { id: "mcafee-complete-enterprise", name: "McAfee Complete Enterprise", subtitle: "Total Enterprise Security", salePrice: 209.99, originalPrice: 419.99, image: "/mcafee-internet-security.webp", link: "/product/mcafee-complete-enterprise" },
    { id: "bitdefender-ultimate-business", name: "BitDefender Ultimate Business", subtitle: "Ultimate Business Security", salePrice: 219.99, originalPrice: 439.99, image: "/BitDefender Antivirus Plus.jpg", link: "/product/bitdefender-ultimate-business" },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x">
              Exclusive Security Software Deals
            <span className="fade-in-text">
              <span className="text-blue-600">Secure.</span>{' '}
              <span className="text-teal-600">Private.</span>{' '}
              <span className="text-blue-500">Trusted.</span>
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto" style={{fontWeight: 500}}>
            Comprehensive protection for your digital world
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <a
                href="tel:+18775933166"
                className="buy-now-btn"
                aria-label="Buy Now - Call Support"
              >
                Buy Now
              </a>
              <a
                href="tel:+18775933166"
                className="call-now-button"
                aria-label="Call Now: +1 877-593-3166"
                style={{ borderWidth: 2 }}
              >
                📞 Call Now: +1 877-593-3166
              </a>
            </div>
                        
            {/* Email capture form */}
            <motion.div 
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/90 text-gray-800 placeholder-gray-500 px-6 py-4 text-lg rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500/30 border-r-0 border border-gray-200 shadow-sm"
                />
                <a
                  href="tel:+18775933166"
                  className="call-now-button"
                  aria-label="Call Now: +1 877-593-3166"
                  style={{ minWidth: 120 }}
                >
                  📞 Call Now: +1 877-593-3166
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Or call us directly for instant support
              </p>
            </motion.div>
            {/* Trust badge */}
            <div className="text-gray-700 text-lg flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500 floating-badge" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Trusted by 20M+ Users Worldwide
            </div>
          </div>
        </div>
        {/* Add animation styles */}
        <style jsx="true">{`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 15s ease infinite;
          }

          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: .5;
            }
          }
          .fade-in-text span {
            display: inline-block;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease forwards;
          }
          .fade-in-text span:nth-child(1) { animation-delay: 0.3s; }
          .fade-in-text span:nth-child(2) { animation-delay: 0.6s; }
          .fade-in-text span:nth-child(3) { animation-delay: 0.9s; }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .transition-smooth {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .floating-badge {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .pulse-button {
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}</style>
        <div id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {products.map((product) => (
            <motion.div 
              key={product.name}
              className="relative group bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}  
            >
              <SaleBadge />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
              <p className="text-gray-700 text-lg mb-4">{product.subtitle}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">${product.salePrice}</span>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Save ${(product.originalPrice - product.salePrice).toFixed(2)}
                </span>
              </div>
              <a
                href="tel:+18775933166"
                className="call-now-button"
                aria-label="Call Now: +1 877-593-3166"
              >
                📞 Call Now: +1 877-593-3166
              </a>
            </motion.div>
          ))}
        </div>
        {/* Trust badges section */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {[
            { name: 'Norton', logo: '/norton-logo.png' },
            { name: 'McAfee', logo: '/mcafee-logo.png' },
            { name: 'Avast', logo: '/avast-logo.png' },
            { name: 'Bitdefender', logo: '/bitdefender-logo.png' }
          ].map((brand) => (
            <div
              key={brand.name}
              className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-2"
            >
              <span className="text-lg font-medium text-gray-700">{brand.name}™</span>
            </div>
          ))}
        </div>
        {/* Additional CTA */}
        <div className="mt-12 text-center">
              <a
                href="tel:+18775933166"
                className="call-now-button"
                aria-label="Call Now: +1 877-593-3166"
                style={{ borderWidth: 2 }}
              >
                📞 Call Now: +1 877-593-3166
              </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;