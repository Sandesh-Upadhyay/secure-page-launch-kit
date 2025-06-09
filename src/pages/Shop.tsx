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
      image: "/Avast-320x320.png",
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
      image: "/avg-internet-security.png",
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
      image: "/bit-av-1-600x600.png",
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
      image: "/mcafee-antivirus-2.webp",
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
      image: "/norton-internet-security.png",
      features: [
        "Advanced Threat Protection",
        "Smart Firewall",
        "Password Manager",
        "File Shield",
        "Multi-device Support",
      ],
    },
    {
      id: "trend-micro-titanium-1",
      name: "Trend Micro Titanium Security",
      subtitle: "Complete Protection Suite",
      price: 39.99,
      originalPrice: 79.99,
      image: "/trend-micro-titanium.png",
      features: [
        "Real-time Protection",
        "Ransomware Protection",
        "Banking Protection",
        "Password Manager",
        "Web Protection",
      ],
    },
    {
      id: "webroot-security-plus",
      name: "Webroot Security Plus",
      subtitle: "3 Devices, 1 Year",
      price: 34.99,
      originalPrice: 69.99,
      image: "/webroot-security-plus.png",
      features: [
        "Advanced Cyber Protection",
        "Cloud-Based Security",
        "Secure Online Banking",
        "Password Manager",
        "Multi-device Support",
      ],
    },
    {
      id: "webroot-complete",
      name: "Webroot Security Complete",
      subtitle: "Ultimate Protection Package",
      price: 44.99,
      originalPrice: 89.99,
      image: "/webroot-complete.png",
      features: [
        "Advanced Threat Protection",
        "Ransomware Shield",
        "Mobile Security",
        "Password Manager",
        "System Optimizer",
      ],
    },
    {
      id: "trend-micro-maximum",
      name: "Trend Micro Maximum Security",
      subtitle: "Ultimate Digital Protection",
      price: 49.99,
      originalPrice: 99.99,
      image: "/trend-micro-maximum.png",
      features: [
        "Advanced AI Protection",
        "Privacy Scanner",
        "Password Manager",
        "Mobile Security",
        "Pay Guard Browser",
      ],
    },
    {
      id: "webroot-antivirus",
      name: "Webroot Antivirus",
      subtitle: "Essential Protection",
      price: 29.99,
      originalPrice: 59.99,
      image: "/webroot-antivirus.png",
      features: [
        "Real-time Protection",
        "Lightweight Solution",
        "Fast Scanning",
        "Web Protection",
        "Anti-phishing",
      ],
    },

    // Page 3 Products
    {
      id: "norton-360-deluxe-1",
      name: "Norton 360 Deluxe",
      subtitle: "3-Year Protection",
      price: 79.99,
      originalPrice: 149.99,
      image: "/norton-360-deluxe.png",
      features: [
        "Device Security",
        "Online Privacy",
        "Smart Firewall",
        "Password Manager",
        "Cloud Backup",
      ],
    },
    {
      id: "trend-micro-titanium-2",
      name: "Trend Micro Titanium Security",
      subtitle: "Advanced Protection",
      price: 75.0,
      originalPrice: 149.99,
      image: "/trend-micro-titanium.png",
      features: [
        "Advanced AI Protection",
        "Privacy Scanner",
        "Password Manager",
        "Mobile Security",
        "Pay Guard Browser",
      ],
    },
    {
      id: "mcafee-internet-security",
      name: "McAfee Internet Security",
      subtitle: "Multi-Device Protection",
      price: 44.99,
      originalPrice: 89.99,
      image: "/mcafee-internet-security.png",
      features: [
        "Award-winning Protection",
        "Safe Web Browsing",
        "Multi-device Support",
        "Password Manager",
        "File Protection",
      ],
    },
    {
      id: "mcafee-livesafe",
      name: "McAfee LiveSafe",
      subtitle: "Ultimate Protection",
      price: 54.99,
      originalPrice: 119.99,
      image: "/mcafee-livesafe.png",
      features: [
        "Ultimate Device Protection",
        "Identity Monitoring",
        "Secure VPN",
        "Password Manager",
        "File Encryption",
      ],
    },
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