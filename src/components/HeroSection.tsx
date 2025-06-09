import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const HeroSection = () => {
  const { addItem } = useCart()
  const products = [
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
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-800 mb-6">
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
              <Button 
                className="px-8 py-4 text-xl font-medium rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg pulse-button"
                onClick={() => window.open('https://wa.me/18775933166?text=Hi%20I%20want%20to%20explore%20your%20products', '_blank')}
              >
                Chat on WhatsApp
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 text-xl font-medium rounded-full border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => window.open('https://wa.me/18775933166?text=Hi%20I%20want%20a%20free%20trial', '_blank')}
              >
                Free Trial
              </Button>
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
                <Button
                  className="px-8 py-4 text-lg rounded-r-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://wa.me/18775933166?text=Hi%20I%20want%20to%20get%20started', '_blank')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Chat Now
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                We'll contact you via WhatsApp
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg p-6 transition-smooth hover:shadow-xl hover:scale-[1.02] border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
              <p className="text-gray-700 text-lg mb-4">{product.subtitle}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ${product.salePrice}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Save ${(product.originalPrice - product.salePrice).toFixed(2)}
                </span>
              </div>
              <Button
                onClick={() => window.open(`https://wa.me/18775933166?text=Hi%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}%20for%20$${product.salePrice}`, '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 shadow-md"
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
        {/* Trust badges section */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {['Norton', 'McAfee', 'Avast', 'Bitdefender'].map((brand) => (
            <div key={brand} className="bg-white px-6 py-3 rounded-full shadow-sm flex items-center gap-2">
              <span className="text-lg font-medium text-gray-700">{brand}™</span>
            </div>
          ))}
        </div>
        {/* Additional CTA */}
        <div className="mt-12 text-center">
              <Button 
                variant="outline"
                className="px-8 py-6 text-xl font-medium rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 bg-white/10 backdrop-blur-lg shadow-lg"
                onClick={() => window.open('https://wa.me/18775933166?text=Hi%20I%20have%20questions%20about%20your%20products', '_blank')}
              >
                Contact Us
              </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
