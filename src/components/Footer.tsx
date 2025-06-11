import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const Footer = () => {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

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

  return (
    <footer className="bg-white py-12 md:py-16 border-t">
      <div className="container mx-auto px-4">
        {/* SSL Secure Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="flex flex-wrap items-center gap-4">
            <img src="/SSL Secure image.jpg" alt="SSL Secure" className="h-12 sm:h-16 object-contain transition-transform hover:scale-105" />
            <img src="/HTTPS Secure.jpg" alt="HTTPS Secure" className="h-12 sm:h-16 object-contain transition-transform hover:scale-105" />
            <img src="/Norton Authorized Reseller.jpg" alt="Norton Authorized Reseller" className="h-10 sm:h-12 object-contain transition-transform hover:scale-105" />
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4">
            <img src="/American Express.jpg" alt="American Express" className="h-6 sm:h-8 object-contain transition-transform hover:scale-105" />
            <img src="/Master card image.jpg" alt="Mastercard" className="h-6 sm:h-8 object-contain transition-transform hover:scale-105" />
            <img src="/Visa Image.jpg" alt="Visa" className="h-6 sm:h-8 object-contain transition-transform hover:scale-105" />
            <img src="/paypal image.jpg" alt="PayPal" className="h-6 sm:h-8 object-contain transition-transform hover:scale-105" />
            <img src="/Apple Pay.jpg" alt="Apple Pay" className="h-6 sm:h-8 object-contain transition-transform hover:scale-105" />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Norton Security Standard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Norton 360 Standard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Norton 360 Deluxe</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Norton 360 Premium</a></li>
            </ul>
          </div>

          {/* {Important Links} */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Links</h3>
            <ul className="space-y-3">
              {/* <li><a href="#" className="text-gray-600 hover:text-gray-900">Cart</a></li> */}
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Checkout</a></li>
              {/* <li><a href="#" className="text-gray-600 hover:text-gray-900">My account</a></li> */}
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About US</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shop</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact US</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">support@avsafesolution.com</span>
              </li>
              <li>
                <span className="text-gray-600">Website: www.AVSafe Solutions</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#cookies" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Cookies Policy
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('terms')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="#privacy" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600">
              © {currentYear} AVSafe Solutions. All rights reserved.
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full hover:bg-gray-100 transition-all ${social.color}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
