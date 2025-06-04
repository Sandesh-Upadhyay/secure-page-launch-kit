
import { useState, useEffect } from "react";
import { Shield, Phone } from "lucide-react";
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

  const handlePhoneCall = () => {
    window.location.href = "tel:+18445905283";
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-900">norton</span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handlePhoneCall}
            className="hidden md:flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-semibold">+1(844) 590-5283</span>
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Support
            </button>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
            Download Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
