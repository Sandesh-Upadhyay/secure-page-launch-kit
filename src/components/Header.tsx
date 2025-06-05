
import { useState, useEffect } from "react";
import { Phone, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    if (searchInput && searchInput.value) {
      // Redirect to search results page with query parameter
      window.location.href = `/search?q=${encodeURIComponent(searchInput.value)}`;
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#E67E22] text-white py-1 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-medium">BEST AV DEALS</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>Call To +1(833) 534-4002</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`w-full z-50 transition-all duration-300 bg-[#2C3E50] ${isScrolled ? 'shadow-md' : ''}`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo - Left on desktop, centered on mobile */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
            <img 
              src="/cropped-cropped-NortonFull-1.jpg" 
              alt="Norton" 
              className="h-10" 
            />
          </div>

          {/* Search Bar - Center on both desktop and mobile */}
          <div className="relative w-full md:w-1/3 order-3 md:order-2 mb-4 md:mb-0">
            <form onSubmit={handleSearch} className="flex">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full py-2 px-4 pr-10 bg-[#ECF0F1] border-none rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#E67E22] search-input"
              />
              <button 
                type="submit" 
                className="bg-[#E67E22] text-white px-4 py-2 rounded-r-md hover:bg-[#D35400] transition-colors duration-300 search-button"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4 top-[4.5rem] z-20">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 focus:outline-none text-white hover:text-[#E67E22] transition-colors duration-300"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation - Right on desktop, dropdown on mobile */}
          <div className="order-2 md:order-3 w-full md:w-auto">
            <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 py-4 md:py-0 bg-[#2C3E50] w-full md:w-auto`}>
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-[#E67E22] transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("shop")}
                className="text-white hover:text-[#E67E22] transition-colors duration-300 font-medium"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection("cookies")}
                className="text-[#BDC3C7] hover:text-[#E67E22] transition-colors duration-300 font-medium"
              >
                Cookies Policy
              </button>
              <button
                onClick={() => scrollToSection("disclaimer")}
                className="text-[#BDC3C7] hover:text-[#E67E22] transition-colors duration-300 font-medium"
              >
                Disclaimer
              </button>
              <button
                onClick={() => scrollToSection("privacy")}
                className="text-[#BDC3C7] hover:text-[#E67E22] transition-colors duration-300 font-medium"
              >
                Privacy policy
              </button>
              <button
                onClick={() => scrollToSection("refund")}
                className="text-[#BDC3C7] hover:text-[#E67E22] transition-colors duration-300 font-medium"
              >
                Refund and Cancellation
              </button>
              <button
                onClick={() => scrollToSection("terms")}
                className="text-[#BDC3C7] hover:text-[#E67E22] transition-colors duration-300 font-medium"
              >
                Terms & Conditions
              </button>
              <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white px-4 py-2 rounded-md transition-colors duration-300 md:ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock mr-1"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Login
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Add box shadow to header */}
      <style jsx>{`
        header {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-family: 'Roboto', 'Montserrat', 'Open Sans', sans-serif;
        }
        @media screen and (max-width: 768px) {
          header .container {
            flex-direction: column;
          }
          header .search-bar,
          header .order-2 {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
