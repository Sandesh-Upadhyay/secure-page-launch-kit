import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import PaymentBanner from "./PaymentBanner"
import { useTheme } from "next-themes"

const Footer = () => {
  const { theme } = useTheme()

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      url: "#",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "#",
      color: "text-sky-400 hover:text-sky-500"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "#",
      color: "text-blue-500 hover:text-blue-600"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      url: "#",
      color: "text-pink-400 hover:text-pink-500"
    }
  ]

  const productLinks = [
    { name: "Antivirus Basic", url: "#" },
    { name: "Antivirus Pro", url: "#" },
    { name: "Premium Suite", url: "#" },
    { name: "Business Solutions", url: "#" }
  ]

  const supportLinks = [
    { name: "Help Center", url: "#" },
    { name: "Contact Support", url: "#" },
    { name: "Download Center", url: "#" },
    { name: "System Requirements", url: "#" }
  ]

  const companyLinks = [
    { name: "About Us", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Press", url: "#" },
    { name: "Blog", url: "#" }
  ]

  return (
    <motion.footer 
      id="support"
      className="bg-white/5 backdrop-blur-lg border-t border-white/10 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                AVSafe Solutions
              </span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Leading provider of comprehensive cybersecurity solutions. 
              Protecting millions of users worldwide with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>support@avsafe.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 (877) 593-3166</span>
              </div>
            </div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all ${social.color}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.url} className="text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.url} className="text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.url} className="text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col space-y-6">
            <PaymentBanner />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/70">
                © {new Date().getFullYear()} AVSafe Solutions. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
