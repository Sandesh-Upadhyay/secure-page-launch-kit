
import { Button } from "@/components/ui/button";
import { Shield, Download, Star, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-lg mb-6">
            🔥 LIMITED TIME OFFER - UP TO 85% OFF!
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Best Antivirus Deals
            <span className="block text-yellow-400">Save Big Today!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
            Get premium antivirus protection at unbeatable prices. 
            Protect your devices with award-winning security software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              <Download className="mr-2 h-5 w-5" />
              Shop Now & Save 85%
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-lg">
              View All Deals
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-white">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-yellow-400" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-yellow-400" />
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-yellow-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
