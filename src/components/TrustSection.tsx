
import { Star, Shield, Award, Users } from "lucide-react";

const TrustSection = () => {
  const trustBadges = [
    { name: "AV-TEST", score: "100%", description: "Protection Score" },
    { name: "AV-Comparatives", score: "99.8%", description: "Detection Rate" },
    { name: "VB100", score: "Certified", description: "Award Winner" },
    { name: "ICSA Labs", score: "Verified", description: "Anti-Virus" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "SecureShield has protected my business for 3 years. Never had a single security incident!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Professional",
      content: "The best antivirus I've used. Lightweight, effective, and excellent customer support.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Remote Worker",
      content: "Love the VPN feature! I feel safe working from anywhere with public WiFi.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Millions Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join over 50 million users who trust SecureShield to protect their digital lives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {trustBadges.map((badge, index) => (
            <div key={badge.name} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{badge.name}</h3>
                <div className="text-2xl font-bold text-blue-400 mb-1">{badge.score}</div>
                <p className="text-blue-200 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-blue-200 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white">50M+</div>
              <div className="text-blue-200">Protected Users</div>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-blue-200">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-blue-200">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
