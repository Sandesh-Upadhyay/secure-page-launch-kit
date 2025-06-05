
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does SecureShield protect my devices?",
      answer: "SecureShield uses advanced AI-powered threat detection to monitor your devices in real-time. It scans files, emails, and web traffic to identify and block malware, viruses, ransomware, and other cyber threats before they can cause damage."
    },
    {
      question: "Can I use SecureShield on multiple devices?",
      answer: "Yes! Our Pro plan covers up to 5 devices, and our Premium plan protects up to 10 devices. You can use SecureShield on Windows, Mac, Android, and iOS devices with a single subscription."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 30-day free trial for all our plans. You can experience the full protection of SecureShield without any commitment. No credit card required to start your trial."
    },
    {
      question: "How does the VPN feature work?",
      answer: "Our Secure VPN encrypts your internet connection with bank-grade encryption, hiding your IP address and online activities from hackers, ISPs, and government surveillance. It's included in our Pro and Premium plans with unlimited data."
    },
    {
      question: "What if SecureShield doesn't work for me?",
      answer: "We're confident you'll love SecureShield, but if you're not completely satisfied, we offer a 30-day money-back guarantee. Simply contact our support team within 30 days for a full refund."
    },
    {
      question: "How often are virus definitions updated?",
      answer: "Our threat intelligence is updated in real-time, 24/7. SecureShield continuously receives the latest threat signatures and behavioral analysis data to ensure you're protected against even the newest threats."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about SecureShield
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
