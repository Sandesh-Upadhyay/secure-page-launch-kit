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

const Shop = () => {
  const { addItem } = useCart();
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Changed from 4 to 12

  const allProducts: Product[] = [
    // Page 1 Products
    {
      id: "avast-premium",
      name: "Avast Premium Security",
      subtitle: "10 Devices, 1 Year",
      price: 99.0,
      originalPrice: 149.99,
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
      image: "/McAfee Antivirus.jpg", // Updated to match provided image
      features: [
        "Award-winning Protection",
        "Secure Online Browsing",
        "24/7/365 Support",
        "PC Optimization",
        "File Shredder",
      ],
    },
    // Page 2 Products
    {
      id: "norton-internet-security-2",
      name: "Norton Internet Security",
      subtitle: "Advanced Protection for 5 Devices",
      price: 49.99,
      originalPrice: 99.99,
      image: "/norton inernet security.jpg",
      features: [
        "Advanced Threat Protection",
        "Smart Firewall",
        "Password Manager",
        "File Shield",
        "Multi-device Support",
      ],
    },
    {
      id: "norton-360-standard",
      name: "Norton 360 Standard",
      subtitle: "Complete Protection Suite",
      price: 39.99,
      originalPrice: 79.99,
      image: "/Norton 360 Standard.jpg",
      features: [
        "Real-time Protection",
        "Secure VPN",
        "Password Manager",
        "PC Cloud Backup",
        "SafeCam Protection",
      ],
    },
    {
      id: "trend-micro-maximum",
      name: "Trend Micro Maximum Security",
      subtitle: "Ultimate Digital Protection",
      price: 59.99,
      originalPrice: 119.99,
      image: "/Trend Micro Maximum Security.jpg",
      features: [
        "Advanced AI Protection",
        "Privacy Scanner",
        "Password Manager",
        "Mobile Security",
        "Pay Guard Browser",
      ],
    },
    {
      id: "avg-internet-security",
      name: "AVG Internet Security",
      subtitle: "Award-winning Security",
      price: 44.99,
      originalPrice: 89.99,
      image: "/AVG Antivirus award winning security.jpg",
      features: [
        "Ransomware Protection",
        "Enhanced Firewall",
        "Webcam Protection",
        "Payment Protection",
        "File Shredder",
      ],
    },

    // Page 3 Products
    {
      id: "norton-360-deluxe",
      name: "Norton 360 Deluxe",
      subtitle: "Premium Security Suite",
      price: 79.99,
      originalPrice: 149.99,
      image: "/norton 360 deluxe.jpg",
      features: [
        "Protection for 5 Devices",
        "50GB Cloud Backup",
        "Secure VPN",
        "Dark Web Monitoring",
        "Parental Controls",
      ],
    },
    {
      id: "bitdefender-plus",
      name: "Bitdefender Antivirus Plus",
      subtitle: "Digital Download Edition",
      price: 39.99,
      originalPrice: 79.99,
      image: "/Bitdefender Antivirus Plus Digital Download.jpg",
      features: [
        "Multi-layer Protection",
        "Safe Online Banking",
        "Anti-phishing",
        "Anti-fraud",
        "Password Manager",
      ],
    },
    {
      id: "mcafee-livesafe",
      name: "McAfee LiveSafe",
      subtitle: "Complete Protection",
      price: 54.99,
      originalPrice: 119.99,
      image: "/McAfee LiveSafe.jpg",
      features: [
        "Unlimited Device Protection",
        "Identity Protection",
        "Secure VPN",
        "Password Manager",
        "File Encryption",
      ],
    },
    {
      id: "mcafee-internet-security",
      name: "McAfee Internet Security",
      subtitle: "Advanced Online Protection",
      price: 44.99,
      originalPrice: 89.99,
      image: "/McAfee Internet Security.jpg",
      features: [
        "Antivirus Protection",
        "Web Protection",
        "Email Protection",
        "Firewall Security",
        "Identity Protection",
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