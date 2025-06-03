
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    { name: "Real-time antivirus protection", basic: true, pro: true, premium: true },
    { name: "Web protection", basic: true, pro: true, premium: true },
    { name: "Email security", basic: true, pro: true, premium: true },
    { name: "Firewall protection", basic: "Basic", pro: "Advanced", premium: "Advanced" },
    { name: "Secure VPN", basic: false, pro: "Unlimited", premium: "Unlimited" },
    { name: "Password manager", basic: false, pro: true, premium: true },
    { name: "Dark web monitoring", basic: false, pro: true, premium: true },
    { name: "Identity theft protection", basic: false, pro: false, premium: true },
    { name: "Parental controls", basic: false, pro: false, premium: true },
    { name: "Cloud backup", basic: false, pro: false, premium: "50GB" },
    { name: "PC optimization", basic: false, pro: false, premium: true },
    { name: "Devices supported", basic: "1", pro: "5", premium: "10" },
    { name: "Support level", basic: "Standard", pro: "Priority", premium: "Premium 24/7" }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-500 mx-auto" />;
    } else if (value === false) {
      return <X className="h-5 w-5 text-gray-300 mx-auto" />;
    } else {
      return <span className="text-sm font-medium text-gray-700">{value}</span>;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Feature Comparison
          </h2>
          <p className="text-xl text-gray-600">
            See what's included in each protection plan
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-900 text-white">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Features</h3>
              </div>
              <div className="p-6 text-center border-l border-gray-700">
                <h3 className="text-lg font-semibold">Basic</h3>
                <p className="text-sm text-gray-300 mt-1">$29.99/year</p>
              </div>
              <div className="p-6 text-center border-l border-gray-700 bg-blue-600">
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="text-sm text-blue-100 mt-1">$49.99/year</p>
              </div>
              <div className="p-6 text-center border-l border-gray-700">
                <h3 className="text-lg font-semibold">Premium</h3>
                <p className="text-sm text-gray-300 mt-1">$79.99/year</p>
              </div>
            </div>

            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-4 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="p-4 font-medium text-gray-900">
                  {feature.name}
                </div>
                <div className="p-4 text-center border-l border-gray-200">
                  {renderFeatureValue(feature.basic)}
                </div>
                <div className="p-4 text-center border-l border-gray-200 bg-blue-50">
                  {renderFeatureValue(feature.pro)}
                </div>
                <div className="p-4 text-center border-l border-gray-200">
                  {renderFeatureValue(feature.premium)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
