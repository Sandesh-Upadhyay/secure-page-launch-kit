
import { Shield, Award, CheckCircle, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { icon: Shield, text: "SSL Secured", subtext: "256-bit encryption" },
    { icon: Award, text: "Trusted by 50M+", subtext: "Happy customers" },
    { icon: CheckCircle, text: "Money Back", subtext: "30-day guarantee" },
    { icon: Users, text: "24/7 Support", subtext: "Expert assistance" }
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <badge.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{badge.text}</div>
              <div className="text-sm text-gray-600">{badge.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
