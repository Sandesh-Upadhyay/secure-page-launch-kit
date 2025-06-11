import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { AnnouncementBar } from "./header/AnnouncementBar";
import { Navigation } from "./header/Navigation";
import { SearchActions } from "./header/SearchActions";
import { MobileMenu } from "./header/MobileMenu";
import { Search, Loader2, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from "@/contexts/AuthContext";
import { Dialog } from "@/components/ui/dialog";
import { Command } from "@/components/ui/command";
import SearchSuggestions from "./SearchSuggestions";
import Shop from "@/pages/Shop";

// Define Product type locally since it's not exported from Shop
interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
  features: string[];
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { cartItems } = useCart() || { cartItems: [] }
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "instant" })
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSearch = (term: string) => {
    if (!term.trim()) return;
    navigate(`/search?q=${encodeURIComponent(term)}`);
    setSearchOpen(false);
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setSearchTerm(suggestion);
    handleSearch(suggestion);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.search-container')) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    handleSearch(searchTerm);
  };

  // Fetch all products for search suggestions
  const allProducts = useMemo(() => {
    // @ts-expect-error: Shop.__ALL_PRODUCTS__ is not standard, but used for search
    return (Shop?.__ALL_PRODUCTS__ || []);
  }, []);

  // Real-time search results
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return allProducts.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.subtitle?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allProducts]);

  const popularSearches = [
    "Norton 360",
    "McAfee Total Protection",
    "Bitdefender",
    "VPN",
    "Password Manager"
  ]

  return (
    <>
      <AnnouncementBar />

      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="w-full px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center justify-between w-full md:w-auto">
              <motion.div 
                className="flex-shrink-0 flex items-center gap-3 transform perspective-1000 transition-transform duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
              >
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src="/nortonlogo.jpg"
                    alt="AV Safe Solutions"
                    className="h-10 w-auto max-w-[120px] rounded-lg cursor-pointer shadow-lg border border-gray-200"
                  />
                </motion.a>
                <span className="font-sans text-gray-900 font-bold text-lg">
                  AV Safe Solutions
                </span>
              </motion.div>
            </div>

            <Navigation scrollToSection={scrollToSection} className="w-full md:w-auto" />

            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <a
                href="tel:+18775933166"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                aria-label="Call Now: +1 877-593-3166"
                style={{ textDecoration: 'none' }}
              >
                <span>📞</span>
                <span className="hidden sm:inline">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header