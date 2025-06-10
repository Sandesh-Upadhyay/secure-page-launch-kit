import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { AnnouncementBar } from "./header/AnnouncementBar"
import { Navigation } from "./header/Navigation"
import { SearchActions } from "./header/SearchActions"
import { MobileMenu } from "./header/MobileMenu"
import { Search, Moon, Sun, Loader2 } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useLocation, useSearchParams, Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const { cartItems = [] } = useCart()
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate();

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedQuery = searchQuery.trim()
    
    if (!trimmedQuery) return
    
    try {
      setIsSearching(true)
      setShowSearchSuggestions(false)
      
      // Use React Router navigation
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`)
      
      setSearchQuery("")
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsSearching(false)
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

      <header className={cn(
        "sticky top-0 w-full z-50 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-[0_4px_20px_-3px_rgba(0,0,0,0.5)] transition-all duration-300"
      )}>
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between gap-6">
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
                  className="h-10 w-auto max-w-[120px] rounded-lg cursor-pointer shadow-lg border border-white/20"
                />
              </motion.a>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="font-sans text-white font-bold text-lg hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-blue-400 to-gray-100 animate-gradient-x">
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
                    className="w-full py-2 px-4 pr-10 rounded-full bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-700/50 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_-3px_rgba(0,0,0,0.5)] font-sans"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSearching || !searchQuery.trim()}
                    className={cn(
                      "absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      "focus:outline-none focus:ring-2 focus:ring-cyan-400/50",
                      "rounded-full p-1"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSearching ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Search className="h-5 w-5" />
                    )}
                  </motion.button>
                </motion.div>

                <AnimatePresence>
                  {showSearchSuggestions && searchQuery && (
                    <motion.div
                      className="absolute top-full left-0 right-0 mt-2 bg-gray-900/90 backdrop-blur-xl rounded-xl shadow-[0_5px_25px_-5px_rgba(0,0,0,0.4)] border border-gray-700/30 overflow-hidden font-sans"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {popularSearches
                        .filter(item => 
                          item.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((item, index) => (
                          <motion.div
                            key={index}
                            className="px-4 py-3 text-white hover:bg-white/10 cursor-pointer flex items-center gap-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => {
                              setSearchQuery(item)
                              handleSearch(new Event('submit') as any)
                            }}
                          >
                            <Search className="h-4 w-4 text-white/50" />
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      {popularSearches
                        .filter(item => 
                          item.toLowerCase().includes(searchQuery.toLowerCase()))
                        .length === 0 && (
                        <div className="px-4 py-3 text-white/50 text-sm">
                          No suggestions found
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-800/30 text-gray-300 hover:text-blue-400 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>

              <a
                href="tel:+18775933166"
                className="call-now-button"
                aria-label="Call Now: +1 877-593-3166"
                style={{ minWidth: 120, textAlign: 'center' }}
              >
                📞 Call Now: +1 877-593-3166
              </a>
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
