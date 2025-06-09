import { cn } from "@/lib/utils"
import { Sparkles, ChevronRight, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface MobileMenuProps {
  isMobileMenuOpen: boolean
  scrollToSection: (sectionId: string) => void
  toggleTheme: () => void
  theme: string
}

export const MobileMenu = ({ 
  isMobileMenuOpen, 
  scrollToSection,
  toggleTheme,
  theme
}: MobileMenuProps) => {
  const menuItems = [
    { 
      label: "Home", 
      action: () => scrollToSection("home"),
      icon: <ChevronRight className="h-4 w-4 text-blue-300" />
    },
    { 
      label: "Shop", 
      href: "/shop",
      icon: <ChevronRight className="h-4 w-4 text-blue-300" />
    },
    { 
      label: "Deals", 
      href: "/deals",
      icon: <Sparkles className="h-4 w-4 text-yellow-300" />
    },
    { 
      label: "Contact", 
      href: "/contact",
      icon: <ChevronRight className="h-4 w-4 text-blue-300" />
    },
    { 
      label: "Theme",
      action: toggleTheme,
      icon: theme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-300" />
      ) : (
        <Moon className="h-4 w-4 text-indigo-300" />
      )
    }
  ]

  const supportItems = [
    { 
      label: "Cookies Policy",
      action: () => scrollToSection("cookies"),
      icon: <ChevronRight className="h-4 w-4 text-blue-300" />
    },
    { 
      label: "Privacy Policy",
      action: () => scrollToSection("privacy"),
      icon: <ChevronRight className="h-4 w-4 text-blue-300" />
    },
    { 
      label: "Refund Policy",
      action: () => scrollToSection("refund"),
      icon: <ChevronRight className="h-4 w-4 text-blue-300" />
    },
    { 
      label: "Terms & Conditions",
      action: () => scrollToSection("terms"),
      icon: <ChevronRight className="h-4 w-4 text-blue-300" />
    }
  ]

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white/5 backdrop-blur-xl border-t border-white/10"
        >
          <nav>
            <motion.div 
              className="flex flex-col space-y-1 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3 
                className="px-4 py-2 text-sm font-semibold text-white/70 uppercase tracking-wider"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Menu
              </motion.h3>
              
              {menuItems.map((item, index) => {
                const Component = item.href ? 'a' : 'button'
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <Component
                      {...(item.href ? { href: item.href } : { onClick: item.action })}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 rounded-lg",
                        "text-left text-white hover:bg-white/10 transition-all duration-200"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      {item.href && <ChevronRight className="h-4 w-4 text-blue-300" />}
                    </Component>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div 
              className="flex flex-col space-y-1 p-4 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.h3 
                className="px-4 py-2 text-sm font-semibold text-white/70 uppercase tracking-wider"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Support
              </motion.h3>
              
              {supportItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                >
                  <button
                    onClick={item.action}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-left text-white/80 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-blue-300" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
