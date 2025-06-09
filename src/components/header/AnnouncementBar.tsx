import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-white relative"
        >
          <div className="container mx-auto px-4">
            <div className="py-2 text-center text-sm font-medium flex items-center justify-center">
              <span className="inline-flex items-center">
                🎉 Special offer: Save up to 75% on Premium Security Solutions!&nbsp;
                <a href="#deals" className="underline hover:text-white/90 font-bold">
                  Shop Now
                </a>
              </span>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}