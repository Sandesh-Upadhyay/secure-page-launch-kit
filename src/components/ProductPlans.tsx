import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Check, Star } from "lucide-react";

const ProductPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29.99",
      period: "/year",
      popular: false,
      features: [
        "Real-time antivirus protection",
        "Web protection",
        "Email security",
        "Basic firewall",
        "1 device protection"
      ]
    },
    {
      name: "Pro",
      price: "$49.99",
      period: "/year",
      popular: true,
      features: [
        "Everything in Basic",
        "Secure VPN (unlimited data)",
        "Password manager",
        "Safe browsing tools",
        "Up to 5 devices",
        "Dark web monitoring"
      ]
    },
    {
      name: "Premium",
      price: "$79.99",
      period: "/year",
      popular: false,
      features: [
        "Everything in Pro",
        "Identity theft protection",
        "Parental controls",
        "Cloud backup (50GB)",
        "Up to 10 devices",
        "Premium support",
        "PC optimization tools"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Protection Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic antivirus to comprehensive digital security. 
            All plans include 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative transform hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? "border-blue-500 shadow-2xl ring-2 ring-blue-500 ring-opacity-50 bg-gradient-to-b from-white to-blue-50" 
                  : "border-gray-200 shadow-lg hover:shadow-xl bg-gradient-to-b from-white to-gray-50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-6">
                  <Shield className={`w-12 h-12 ${plan.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-xl text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="tel:+1 877-593-3166"
                  className="buy-now-btn"
                  aria-label="Buy Now - Call Support (+1 877-593-3166)"
                >
                  Buy Now
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Check className="h-6 w-6 text-green-500" />
              <span className="text-lg text-gray-700">30-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-6 w-6 text-green-500" />
              <span className="text-lg text-gray-700">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-6 w-6 text-green-500" />
              <span className="text-lg text-gray-700">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPlans;