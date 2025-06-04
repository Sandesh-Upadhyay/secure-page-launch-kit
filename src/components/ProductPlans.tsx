
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const ProductPlans = () => {
  const plans = [
    {
      name: "Norton 360 Standard",
      originalPrice: "$99.99",
      price: "$39.99",
      period: "/year",
      popular: false,
      devices: "1 Device",
      onSale: true,
      features: [
        "Real-time antivirus protection",
        "Smart Firewall",
        "Password Manager",
        "Secure VPN (Unlimited)",
        "PC SafeCam for PC",
        "10GB Cloud Backup"
      ]
    },
    {
      name: "Norton 360 Deluxe",
      originalPrice: "$149.99",
      price: "$49.99",
      period: "/year",
      popular: true,
      devices: "5 Devices",
      onSale: true,
      features: [
        "Everything in Standard",
        "Dark Web Monitoring",
        "Parental Controls",
        "School Time for kids",
        "50GB Cloud Backup",
        "Privacy Monitor"
      ]
    },
    {
      name: "Norton 360 with LifeLock",
      originalPrice: "$299.99",
      price: "$99.99",
      period: "/year",
      popular: false,
      devices: "10 Devices",
      onSale: true,
      features: [
        "Everything in Deluxe",
        "LifeLock Identity Alert System",
        "Identity Restoration Support",
        "Stolen Wallet Protection",
        "Credit Monitoring",
        "Social Security Number Monitoring"
      ]
    }
  ];

  const handlePlanSelection = (planName: string) => {
    alert(`Redirecting to checkout for ${planName}...`);
    // In a real application, this would redirect to a payment processor
    console.log(`Selected plan: ${planName}`);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Norton 360 Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic antivirus to comprehensive digital security with identity protection. 
            All plans include 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative transform hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? "border-yellow-500 shadow-2xl ring-2 ring-yellow-500 ring-opacity-50" 
                  : "border-gray-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.onSale && (
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold transform rotate-12">
                  SALE
                </div>
              )}

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  {plan.onSale && (
                    <div className="text-lg text-gray-500 line-through">{plan.originalPrice}</div>
                  )}
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <div className="text-sm text-gray-600 mt-2">{plan.devices}</div>
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
                
                <Button 
                  onClick={() => handlePlanSelection(plan.name)}
                  className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black"
                      : "bg-blue-900 hover:bg-blue-800 text-white"
                  }`}
                >
                  Choose {plan.name.split(' ')[2] || plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include 30-day free trial • No credit card required • Cancel anytime
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Prices shown are promotional rates. Standard pricing applies after first year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPlans;
