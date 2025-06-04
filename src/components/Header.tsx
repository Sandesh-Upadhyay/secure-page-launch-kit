
import { useState, useEffect } from "react";
import { Shield, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>Call: 1-800-ANTIVIRUS</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>support@bestavdeals.com</span>
            </div>
          </div>
          <div className="text-yellow-400 font-semibold">
            🔥 Limited Time: Up to 85% OFF!
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`fixed top-8 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">BestAVDeals</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("deals")}
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              Hot Deals
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              Compare
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              Support
            </button>
          </nav>

          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-bold">
            Shop Now
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
