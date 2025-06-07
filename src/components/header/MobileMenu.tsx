import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface MobileMenuProps {
  isMobileMenuOpen: boolean
  scrollToSection: (sectionId: string) => void
}

export const MobileMenu = ({ isMobileMenuOpen, scrollToSection }: MobileMenuProps) => {
  const menuItems = [
    { label: "Home", action: () => scrollToSection("home") },
    { label: "Shop", href: "/shop" },
    { 
      label: "Deals", 
      href: "/deals",
      icon: <Sparkles className="h-4 w-4 text-yellow-400" />
    },
    { label: "Contact", href: "/contact" },
    { 
      label: "Cookies Policy",
      action: () => scrollToSection("cookies"),
      isSupport: true
    },
    { 
      label: "Privacy Policy",
      action: () => scrollToSection("privacy"),
      isSupport: true
    },
    { 
      label: "Refund Policy",
      action: () => scrollToSection("refund"),
      isSupport: true
    },
    { 
      label: "Terms & Conditions",
      action: () => scrollToSection("terms"),
      isSupport: true
    },
  ]

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-sm"
        >
          <nav className="border-t border-slate-700/50 mt-4">
            <div className="flex flex-col space-y-1 p-4">
              {menuItems.map((item, index) => {
                const Component = item.href ? 'a' : 'button'
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Component
                      {...(item.href ? { href: item.href } : { onClick: item.action })}
                      className={cn(
                        "flex items-center space-x-2 w-full px-4 py-3 rounded-lg",
                        "text-left text-white hover:bg-slate-800 transition-colors duration-200",
                        item.isSupport ? "text-slate-300" : "text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      {item.icon}
                    </Component>
                  </motion.div>
                )
              })}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}