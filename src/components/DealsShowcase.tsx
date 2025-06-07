
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Download, Clock } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';

const DealsShowcase = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { isAuthenticated } = useAuth();

  const deals = [
    {
      id: "norton-360-deluxe",
      name: "Norton 360 Deluxe",
      originalPrice: "$149.99",
      salePrice: "$39.99",
      discount: "73%",
      features: ["5 Devices", "50GB Cloud Backup", "VPN Included", "Password Manager"],
      rating: 4.8,
      reviews: "25,000+",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "BEST SELLER"
    },
    {
      id: "mcafee-total-protection",
      name: "McAfee Total Protection",
      originalPrice: "$119.99",
      salePrice: "$29.99",
      discount: "75%",
      features: ["Unlimited Devices", "Identity Theft Protection", "Safe Web Browsing", "Anti-Spam"],
      rating: 4.6,
      reviews: "18,500+",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "LIMITED TIME"
    },
    {
      id: "bitdefender-internet-security",
      name: "Bitdefender Internet Security",
      originalPrice: "$89.99",
      salePrice: "$24.99",
      discount: "72%",
      features: ["3 Devices", "Advanced Threat Defense", "Firewall", "Anti-Fraud"],
      rating: 4.9,
      reviews: "32,000+",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "EDITOR'S CHOICE"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🔥 Hot Antivirus Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss these incredible savings on top-rated antivirus software
          </p>
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-semibold mt-4">
            <Clock className="h-4 w-4 mr-2" />
            Sale ends in 24 hours!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {deals.map((deal, index) => (
            <Card key={deal.name} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 left-4 z-10">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                  deal.badge === "BEST SELLER" ? "bg-green-500" :
                  deal.badge === "LIMITED TIME" ? "bg-red-500" : "bg-blue-500"
                }`}>
                  {deal.badge}
                </div>
              </div>
              
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  -{deal.discount} OFF
                </div>
              </div>

              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={deal.image} 
                    alt={deal.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.name}</h3>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(deal.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {deal.rating} ({deal.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-red-600">{deal.salePrice}</span>
                    <span className="text-lg text-gray-500 line-through">{deal.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600">First year price</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {deal.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Shield className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-bold rounded-lg"
                  onClick={() => {
                    if (!isAuthenticated) {
                      navigate('/login');
                    } else {
                      window.location.href = "https://wa.me/18775933166?text=Hello%2C%20I%20need%20assistance";
                    }
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  Instant download • 30-day money back guarantee
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 text-lg">
            View All Antivirus Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DealsShowcase;