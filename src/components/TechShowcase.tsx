
import { Shield, Lock, Eye, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TechShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced <span className="text-blue-600">Security Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by cutting-edge artificial intelligence and machine learning algorithms 
            to provide unparalleled protection against modern cyber threats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Security Programming Code" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Protection</h3>
                <p className="text-gray-600">AI-powered threat detection that monitors your system 24/7, identifying and blocking malicious activities before they can cause damage.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Encryption</h3>
                <p className="text-gray-600">Military-grade encryption technology that secures your personal data and communications from unauthorized access.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Behavioral Analysis</h3>
                <p className="text-gray-600">Smart algorithms that learn your device's normal behavior patterns to detect suspicious activities and zero-day threats.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
            <CardContent className="relative p-8 text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast Scans</h3>
              <p className="text-gray-600">Complete system scans in under 5 minutes with our optimized scanning engine.</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10"></div>
            <CardContent className="relative p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Secure Laptop" 
                className="w-20 h-16 object-cover rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Device Support</h3>
              <p className="text-gray-600">Protect all your devices with a single license - Windows, Mac, Android, and iOS.</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
            <CardContent className="relative p-8 text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">99.9% Detection Rate</h3>
              <p className="text-gray-600">Industry-leading malware detection with minimal false positives.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
