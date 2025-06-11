import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingCallButton = () => {
  const isMobile = useIsMobile();
  const phoneNumber = "+1 877-593-3166";

  if (!isMobile) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-0 right-0 z-50 mx-auto px-4 w-full sm:max-w-[400px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1,
        y: 0,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 10
        }
      }}
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 1.5rem) + 0.5rem)",
      }}
    >
      <motion.a
        href={`tel:${phoneNumber}`}
        className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-green-500 to-green-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg shadow-green-500/30 w-full mx-auto border border-green-400/20 backdrop-blur-sm overflow-hidden"
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 8px 32px rgba(74, 222, 128, 0.3)"
        }}
        whileTap={{ 
          scale: 0.98,
        }}
        animate={{
          boxShadow: [
            "0 4px 12px rgba(74, 222, 128, 0.2)",
            "0 8px 24px rgba(74, 222, 128, 0.3)",
            "0 4px 12px rgba(74, 222, 128, 0.2)",
          ],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12"
          animate={{
            x: ["0%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
        />
        <motion.span
          className="absolute inset-0 bg-white/30 opacity-0"
          initial={false}
          animate={{ 
            scale: [0.8, 2],
            opacity: [0.8, 0],
            translateX: ["-50%", "-50%"],
            translateY: ["-50%", "-50%"]
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{
            left: "50%",
            top: "50%",
            borderRadius: "50%",
          }}
        />
        <Phone className="w-6 h-6 relative" strokeWidth={2.5} />
        <span className="text-xl tracking-wide relative">Call Us Now: +1 877-593-3166</span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingCallButton;