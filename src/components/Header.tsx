<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Phone, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { AnnouncementBar } from "./header/AnnouncementBar"
import { Navigation } from "./header/Navigation"
import { SearchActions } from "./header/SearchActions"
import { MobileMenu } from "./header/MobileMenu"
import { ShoppingCart, Search, Phone } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { motion } from "framer-motion"
>>>>>>> c3c52eec9c59996c9b25b343274802c0617d1d4c

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { items = [] } = useCart()

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
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const searchInput = document.querySelector('.search-input') as HTMLInputElement
    if (searchInput?.value) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput.value)}`
    }
  }

  return (
    <>
      <AnnouncementBar />

      {/* Main Header */}
      <header className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-gradient-to-r from-slate-800/95 to-indigo-900/95 backdrop-blur-md"
      )}>
        <div className="w-full px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <motion.img
                src="/placeholder.svg"
                alt="AVSafe Solutions"
                className="h-12 rounded-lg cursor-pointer shadow-lg"
                onClick={() => scrollToSection("home")}

                className="text-white hover:text-[#E67E22] transition-colors duration-300 font-medium"
              >
                Home
              </button>              <a
                href="/shop"
                className="text-white hover:text-[#E67E22] transition-colors duration-300 font-medium"

                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg hidden md:block">
                  AVSafe Solutions
                </span>
                <a 
                  href="https://wa.me/18775933166" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hidden md:block hover:text-white transition-colors"
                >
                  1-877-593-3166
                </a>
              </div>
            </div>

            <Navigation scrollToSection={scrollToSection} />

            <div className="flex-1 max-w-xl mx-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 pr-10 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <motion.a
                className="p-2 text-white hover:text-white/80 transition-all"
                href="https://wa.me/18775933166"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}              >
                <Phone className="h-6 w-6" />
              </motion.a>

              <div className="relative">
                <motion.button 
                  className="p-2 text-white hover:text-amber-300 transition-all relative"
                  onClick={() => window.open('https://wa.me/18775933166', '_blank')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingCart className="h-6 w-6" />
                  {items.length > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0.8, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      {items.length}
                    </motion.span>
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          <MobileMenu 
            isMobileMenuOpen={isMobileMenuOpen}
            scrollToSection={scrollToSection}
          />
        </div>
      </header>
    </>
  )
}

export default Header