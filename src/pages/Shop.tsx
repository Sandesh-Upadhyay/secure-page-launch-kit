import DealsShowcase from "../components/DealsShowcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrustBadges from "../components/TrustBadges";
import ProductPlans from "../components/ProductPlans";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
  features: string[];
}

const Shop = () => {  const { addItem } = useCart();
  const { isAuthenticated } = useAuth();  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Show 12 products per page

  const allProducts: Product[] = [
    // Page 1 Products
    {
      id: "avast-premium",
      name: "Avast Premium Security",
      subtitle: "10 Devices, 1 Year",
      price: 59.99,
      originalPrice: 99.99,
      image: "/Avast Premium Security.jpg",
      features: [
        "Advanced Threat Protection",
        "Webcam Protection",
        "Password Manager",
        "File Shield",
        "Multi-device Support",
      ],
    },
    {
      id: "avg-security",
      name: "AVG Internet Security",
      subtitle: "Enhanced Firewall Protection",
      price: 60.0,
      originalPrice: 89.99,
      image: "/AVG Antivirus.jpg",
      features: [
        "Enhanced Firewall",
        "Webcam Security",
        "Shopping Protection",
        "Banking Protection",
        "Anti-ransomware",
      ],
    },
    {
      id: "bitdefender",
      name: "Bitdefender Antivirus Plus",
      subtitle: "Award-winning Protection",
      price: 47.99,
      originalPrice: 89.99,
      image: "/BitDefender Antivirus Plus.jpg",
      features: [
        "Multi-layer Ransomware Protection",
        "Safe Online Banking",
        "Password Manager",
        "VPN (200 MB/day/device)",
        "Zero-day Threat Protection",
      ],
    },
    {
      id: "mcafee",
      name: "McAfee Antivirus",
      subtitle: "1 Year Subscription",
      price: 22.99,
      originalPrice: 44.99,
      image: "/McAfee Antivirus.jpg",
      features: [
        "Award-winning Protection",
        "Secure Online Browsing",
        "24/7/365 Support",
        "PC Optimization",
        "File Shredder",
      ],
    },

    // Page 2 Products (Exactly matching screenshot)
    {
      id: "avast-premium-plus",
      name: "Avast Premium Security Plus",
      subtitle: "Advanced Protection Package",
      price: 89.99,
      originalPrice: 169.99,
      image: "/Avast Premium Security2.jpg",
      features: [
        "Real-time Protection",
        "Advanced Firewall",
        "Password Manager",
        "Data Shield",
        "Multi-device Security",
      ],
    },
    {
      id: "avg-ultimate",
      name: "AVG Ultimate Security",
      subtitle: "Complete Protection Suite",
      price: 69.99,
      originalPrice: 129.99,
      image: "/avg-internet-security2.png.jpg",
      features: [
        "Ultimate Protection",
        "Performance Optimization",
        "VPN Included",
        "Mobile Security",
        "Advanced Firewall",
      ],
    },
    {
      id: "bitdefender-total",
      name: "BitDefender Total Security",
      subtitle: "Premium Protection Package",
      price: 79.99,
      originalPrice: 149.99,
      image: "/BitDefender Antivirus Plus2.jpg",
      features: [
        "Complete Device Protection",
        "Advanced Threat Defense",
        "Secure VPN",
        "Password Manager",
        "Anti-theft Features",
      ],
    },
    {
      id: "mcafee-total",
      name: "McAfee Total Protection",
      subtitle: "Complete Security Suite",
      price: 69.99,
      originalPrice: 129.99,
      image: "/McAfee Internet Security 2.jpg",
      features: [
        "Total Device Protection",
        "Identity Protection",
        "Secure VPN",
        "Password Manager",
        "Safe Web Browsing",
      ],
    },

    // Page 3 Products (Exactly matching screenshot)
    {
      id: "norton-360-premium",
      name: "Norton 360 Premium",
      subtitle: "Ultimate Security Package",
      price: 99.99,
      originalPrice: 199.99,
      image: "/N360-Standard-Subscription-500x500-1.png",
      features: [
        "Premium Device Security",
        "100GB Cloud Backup",
        "Secure VPN Unlimited",
        "Dark Web Monitoring",
        "Parental Controls Plus",
      ],
    },
    {
      id: "mcafee-livesafe-premium",
      name: "McAfee LiveSafe Premium",
      subtitle: "Advanced Protection",
      price: 89.99,
      originalPrice: 179.99,
      image: "/McAfee LiveSafe 2.jpg",
      features: [
        "Advanced Identity Protection",
        "Premium VPN Service",
        "Encrypted Storage",
        "Safe Family Features",
        "Unlimited Device Security",
      ],
    },
    {
      id: "bitdefender-premium-plus",
      name: "BitDefender Premium Plus",
      subtitle: "Advanced Security Suite",
      price: 84.99,
      originalPrice: 169.99,
      image: "/BitDefender Antivirus Plus3.jpg",
      features: [
        "Premium Malware Protection",
        "Advanced Threat Defense",
        "Multi-layer Ransomware Protection",
        "Priority Support",
        "Advanced VPN",
      ],
    },
    {
      id: "mcafee-total-premium",
      name: "McAfee Total Protection Premium",
      subtitle: "Premium Security Package",
      price: 94.99,
      originalPrice: 189.99,
      image: "/McAfee LiveSafe 3.jpg",
      features: [
        "Premium Device Security",
        "Identity Theft Protection",
        "Unlimited VPN",
        "Secure File Storage",
        "Tech Support Plus",
      ],
    },

    // Additional products for page 2
    {
      id: "norton-360-standard-1",
      name: "Norton 360 Standard",
      subtitle: "Basic Protection Package",
      price: 49.99,
      originalPrice: 99.99,
      image: "/Norton 360 Standard.jpg",
      features: [
        "Essential Device Security",
        "Smart Firewall",
        "Password Manager",
        "PC Cloud Backup",
        "Secure VPN",
      ],
    },
    {
      id: "trend-micro-max-1",
      name: "Trend Micro Maximum Security",
      subtitle: "Complete Protection",
      price: 69.99,
      originalPrice: 139.99,
      image: "/Trend Micro Maximum Security.jpg",
      features: [
        "Advanced Protection",
        "Ransomware Protection",
        "Mobile Security",
        "Password Manager",
        "Safe Banking",
      ],
    },
    {
      id: "webroot-secure-1",
      name: "Webroot SecureAnywhere",
      subtitle: "Light & Fast Protection",
      price: 39.99,
      originalPrice: 79.99,
      image: "/Webroot secure  Antivirus.jpg",
      features: [
        "Real-time Protection",
        "Identity Protection",
        "Fast Scanning",
        "Web Protection",
        "Phishing Protection",
      ],
    },
    {
      id: "norton-deluxe-2",
      name: "Norton 360 Deluxe",
      subtitle: "Premium Family Protection",
      price: 89.99,
      originalPrice: 179.99,
      image: "/norton 360 deluxe.jpg",
      features: [
        "Protection for 5 Devices",
        "Parental Controls",
        "School Time Controls",
        "Dark Web Monitoring",
        "50GB Cloud Storage",
      ],
    },

    // Additional products for page 3
    {
      id: "bitdefender-family",
      name: "BitDefender Family Pack",
      subtitle: "Complete Family Security",
      price: 99.99,
      originalPrice: 199.99,
      image: "/Bitdefender Antivirus Plus Digital Download.jpg",
      features: [
        "Unlimited Devices",
        "Parental Controls",
        "File Encryption",
        "Social Network Protection",
        "Advanced Threat Defense",
      ],
    },
    {
      id: "mcafee-total-advanced",
      name: "McAfee Total Protection Advanced",
      subtitle: "Advanced Security Suite",
      price: 79.99,
      originalPrice: 159.99,
      image: "/McAfee LiveSafe 4.jpg",
      features: [
        "Identity Monitoring",
        "Secure VPN",
        "Password Manager",
        "File Lock",
        "Performance Optimization",
      ],
    },
    {
      id: "norton-premium-plus",
      name: "Norton Premium Plus",
      subtitle: "Ultimate Protection Pack",
      price: 129.99,
      originalPrice: 259.99,
      image: "/norton security.jpg",
      features: [
        "Unlimited Devices",
        "200GB Cloud Backup",
        "Premium Support",
        "Credit Monitoring",
        "VIP Support",
      ],
    },
    {
      id: "trend-micro-premium",
      name: "Trend Micro Premium Security",
      subtitle: "Enterprise-Grade Protection",
      price: 119.99,
      originalPrice: 239.99,
      image: "/Trend Micro Maximum Security.jpg",
      features: [
        "AI-Powered Protection",
        "Data Theft Prevention",
        "Ransomware Protection",
        "Password Manager",
        "Premium Support",
      ],
    },

    // Additional products to reach 36
    {
      id: "mcafee-livesafe-ultimate",
      name: "McAfee LiveSafe Ultimate",
      subtitle: "Ultimate Protection Suite",
      price: 109.99,
      originalPrice: 219.99,
      image: "/McAfee LiveSafe 5.jpg",
      features: [
        "Ultimate Device Protection",
        "Premium VPN Service",
        "Advanced Password Manager",
        "Complete ID Protection",
        "Priority Customer Support",
      ],
    },
    {
      id: "avg-professional",
      name: "AVG Professional Security",
      subtitle: "Professional Grade Protection",
      price: 79.99,
      originalPrice: 159.99,
      image: "/AVG Antivirus award winning security.jpg 2.jpg",
      features: [
        "Business-grade Protection",
        "Advanced Firewall",
        "Data Encryption",
        "Remote Management",
        "24/7 Technical Support",
      ],
    },
    {
      id: "bitdefender-advanced",
      name: "BitDefender Advanced Security",
      subtitle: "Advanced Protection Plus",
      price: 89.99,
      originalPrice: 179.99,
      image: "/bit-av-1-600x600.png",
      features: [
        "Multi-layer Protection",
        "Advanced Threat Defense",
        "Network Protection",
        "Device Optimizer",
        "Cloud Protection",
      ],
    },
    {
      id: "norton-complete",
      name: "Norton Complete Protection",
      subtitle: "Complete Security Solution",
      price: 119.99,
      originalPrice: 239.99,
      image: "/Norton-Security-500x500-1.png",
      features: [
        "Complete Device Security",
        "Advanced VPN Service",
        "Cloud Backup 100GB",
        "Password Management",
        "Family Protection",
      ],
    },
    {
      id: "mcafee-professional",
      name: "McAfee Professional",
      subtitle: "Professional Security Suite",
      price: 129.99,
      originalPrice: 259.99,
      image: "/mcafee-antivirus-1.webp",
      features: [
        "Enterprise Security",
        "Advanced Firewall",
        "File Encryption",
        "Team Management",
        "24/7 Support",
      ],
    },
    {
      id: "avast-ultimate",
      name: "Avast Ultimate",
      subtitle: "Ultimate Protection Suite",
      price: 149.99,
      originalPrice: 299.99,
      image: "/Avast-320x320.png",
      features: [
        "Ultimate Device Security",
        "SecureLine VPN",
        "Premium Support",
        "Cleanup Premium",
        "Passwords Premium",
      ],
    },
    {
      id: "trend-micro-enterprise",
      name: "Trend Micro Enterprise",
      subtitle: "Enterprise Security Solution",
      price: 159.99,
      originalPrice: 319.99,
      image: "/Trend Micro Maximum Security.jpg",
      features: [
        "Enterprise-grade Security",
        "Advanced AI Protection",
        "Email Protection",
        "Endpoint Security",
        "Cloud Security",
      ],
    },
    {
      id: "mcafee-small-business",
      name: "McAfee Small Business",
      subtitle: "Business Security Suite",
      price: 139.99,
      originalPrice: 279.99,
      image: "/mcafee-antivirus-2.webp",
      features: [
        "Business Endpoint Security",
        "Email Protection",
        "Web Protection",
        "File Server Security",
        "Mobile Security",
      ],
    },
    {
      id: "norton-business",
      name: "Norton Business Premium",
      subtitle: "Premium Business Protection",
      price: 169.99,
      originalPrice: 339.99,
      image: "/norton for tabbar.jpg",
      features: [
        "Business Device Security",
        "Cloud Backup 250GB",
        "Email Protection",
        "Endpoint Security",
        "Mobile Security",
      ],
    },
    {
      id: "bitdefender-enterprise",
      name: "BitDefender Enterprise",
      subtitle: "Enterprise Security Suite",
      price: 179.99,
      originalPrice: 359.99,
      image: "/BitDefender Antivirus PLus.png",
      features: [
        "Enterprise Protection",
        "Network Security",
        "Cloud Workload Security",
        "EDR & MDR",
        "Advanced Threat Security",
      ],
    },
    {
      id: "mcafee-endpoint",
      name: "McAfee Endpoint Security",
      subtitle: "Complete Endpoint Protection",
      price: 149.99,
      originalPrice: 299.99,
      image: "/mcafee-livesafe.webp",
      features: [
        "Endpoint Protection",
        "Threat Prevention",
        "Data Protection",
        "Device Control",
        "Advanced Analytics",
      ],
    },
    {
      id: "avg-business",
      name: "AVG Business Security",
      subtitle: "Complete Business Protection",
      price: 159.99,
      originalPrice: 319.99,
      image: "/avg-internet-security.png",
      features: [
        "Business Antivirus",
        "File Server Security",
        "Remote Management",
        "Data Security",
        "Email Security",
      ],
    },
    {
      id: "trend-micro-max-business",
      name: "Trend Micro Maximum Business",
      subtitle: "Maximum Business Security",
      price: 189.99,
      originalPrice: 379.99,
      image: "/Trend Micro Maximum Security.jpg",
      features: [
        "Complete Business Protection",
        "Email & Collaboration Security",
        "Cloud App Security",
        "Network Defense",
        "Endpoint Security",
      ],
    },
    {
      id: "norton-cyber-security",
      name: "Norton Cyber Security",
      subtitle: "Advanced Cyber Protection",
      price: 199.99,
      originalPrice: 399.99,
      image: "/Norton-Security-500x500-1.png",
      features: [
        "Advanced Cyber Protection",
        "Threat Hunting",
        "Security Analytics",
        "Cloud Security",
        "Zero Trust Security",
      ],
    },
    {
      id: "mcafee-complete-enterprise",
      name: "McAfee Complete Enterprise",
      subtitle: "Total Enterprise Security",
      price: 209.99,
      originalPrice: 419.99,
      image: "/mcafee-internet-security.webp",
      features: [
        "Enterprise Endpoint Security",
        "Cloud Access Security",
        "Data Center Security",
        "Threat Intelligence",
        "Security Management",
      ],
    },
    {
      id: "bitdefender-ultimate-business",
      name: "BitDefender Ultimate Business",
      subtitle: "Ultimate Business Security",
      price: 219.99,
      originalPrice: 439.99,
      image: "/BitDefender Antivirus Plus.jpg",
      features: [
        "Ultimate Business Protection",
        "Risk Analytics",
        "Managed EDR",
        "Cloud Security",
        "Security Operations",
      ],
    }
  ];

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Antivirus Software Shop
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Browse our selection of top-rated antivirus software at unbeatable
            prices
          </p>
        </div>
      </section>

      {/* Single products section with pagination */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    SALE
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain p-6"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.subtitle}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination controls */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    pageNum === currentPage
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  className="w-10 h-10 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <Footer />
    </div>
  );
};

export default Shop;