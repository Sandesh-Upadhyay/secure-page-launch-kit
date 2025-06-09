import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { AnnouncementBar } from "./header/AnnouncementBar"
import { Navigation } from "./header/Navigation"
import { SearchActions } from "./header/SearchActions"
import { MobileMenu } from "./header/MobileMenu"
import { ShoppingCart, Search, Phone, Moon, Sun } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false)
  const { cartItems = [] } = useCart()
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setTheme('light') // Set light theme as default
  }, [])

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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.open(`/search?q=${encodeURIComponent(searchQuery.trim())}`, '_blank')
      setSearchQuery("")
      setShowSearchSuggestions(false)
    }
  }

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

      {/* Main Header */}
      <header className={cn(
        "sticky top-0 w-full z-50 bg-gray-900 backdrop-blur-lg border-b border-gray-700 shadow-xl"
      )}>
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
                  className="h-10 w-auto max-w-[120px] rounded-lg cursor-pointer shadow-lg border border-white/20"
                />
              </motion.a>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white font-bold text-lg hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                  AV Safe Solutions
                </span>
              </motion.div>
            </motion.div>

            <Navigation scrollToSection={scrollToSection} />

            <div className="flex-1 max-w-xl mx-4 relative">
              <form onSubmit={handleSearch} className="relative">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setShowSearchSuggestions(e.target.value.length > 0)
                    }}
                    onFocus={() => setShowSearchSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                    placeholder="Search products..."
                    className="w-full py-2 px-4 pr-10 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 border border-white/20"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </motion.div>

                <AnimatePresence>
                  {showSearchSuggestions && searchQuery && (
                    <motion.div
                      className="absolute top-full left-0 right-0 mt-2 bg-white/5 backdrop-blur-lg rounded-xl shadow-xl border border-white/10 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {popularSearches
                        .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((item, index) => (
                          <motion.div
                            key={index}
                            className="px-4 py-3 text-white hover:bg-white/10 cursor-pointer flex items-center gap-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => {
                              setSearchQuery(item)
                              setShowSearchSuggestions(false)
                            }}
                          >
                            <Search className="h-4 w-4 text-white/50" />
                            <span>{item}</span>
                          </motion.div>
                        ))
                      }
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* User Actions */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={toggleTheme}
                className="p-2 text-white hover:text-amber-300 transition-colors"
                whileHover={{ rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>

            <motion.button
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/+18775933166?text=Hi%20I%20need%20help%20with%20my%20order', '_blank')}
            >
              <span>Contact Us</span>
            </motion.button>
            </motion.div>
          </div>

          <MobileMenu 
            isMobileMenuOpen={isMobileMenuOpen}
            scrollToSection={scrollToSection}
            toggleTheme={toggleTheme}
            theme={theme}
          />
        </div>
      </header>
    </>
  )
}

export default Header