
import { Button } from "@/components/ui/button";
import { Shield, Download, Star } from "lucide-react";

const HeroSection = () => {
  const handleDownload = () => {
    // Simulate download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'norton-360-setup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Download started! Norton 360 installer will begin shortly.');
  };

  const handleViewPricing = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="relative mr-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <Shield className="h-10 w-10 text-black" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-white/80 ml-2">4.9/5 (50,000+ reviews)</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ultimate Protection
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
              Norton 360 Security
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Advanced antivirus protection with real-time threat detection, secure VPN, 
            and comprehensive identity protection. Trusted by millions worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleDownload}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free Trial
            </Button>
            <Button 
              variant="outline" 
              onClick={handleViewPricing}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-lg"
            >
              View Pricing Plans
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50M+</div>
              <div className="text-sm">Protected Users</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm">Threat Detection</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
