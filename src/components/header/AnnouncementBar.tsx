import { Phone, Clock, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/effects/noise.png')] opacity-10" />
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">24/7 Support Available</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:+18335344002" 
                  className="hover:underline transition-all font-medium"
                >
                  +1 (833) 534-4002
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="hidden md:inline mr-4 font-medium">
                Norton Security Solutions
              </span>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-orange-600/30 rounded-full transition-colors"
                aria-label="Close announcement"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}