
import { Shield, ShieldCheck, Wifi, Lock, Eye, Smartphone } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Real-Time Protection",
      description: "Advanced AI-powered threat detection that stops malware, viruses, and ransomware before they can harm your devices."
    },
    {
      icon: ShieldCheck,
      title: "Identity Protection",
      description: "Monitor your personal information across the dark web and get instant alerts if your data is compromised."
    },
    {
      icon: Wifi,
      title: "Secure VPN",
      description: "Bank-grade encryption for all your internet traffic. Browse anonymously and access geo-restricted content safely."
    },
    {
      icon: Lock,
      title: "Password Manager",
      description: "Generate, store, and auto-fill strong passwords. Never reuse passwords or worry about data breaches again."
    },
    {
      icon: Eye,
      title: "Safe Browsing",
      description: "Block malicious websites, phishing attempts, and dangerous downloads before they reach your device."
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Protect all your devices - Windows, Mac, Android, and iOS - with a single subscription plan."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Digital Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive security suite protects your devices, data, and identity 
            from all types of cyber threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-100 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
