
import { Shield, Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+18445905283";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:support@norton.com";
  };

  return (
    <footer id="support" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold">norton</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of comprehensive cybersecurity solutions. 
              Protecting millions of users worldwide with cutting-edge technology.
            </p>
            
            <div className="space-y-3 mb-6">
              <button
                onClick={handlePhoneCall}
                className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">+1(844) 590-5283</span>
              </button>
              <button
                onClick={handleEmailContact}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>support@norton.com</span>
              </button>
            </div>

            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Norton 360 Standard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Norton 360 Deluxe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Norton 360 with LifeLock</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Download Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">System Requirements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Renewal Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2024 NorTech Inc. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
