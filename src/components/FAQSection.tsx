import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What type of protection does Norton antivirus provide?",
      answer: "Norton provides comprehensive protection against various cyber threats including viruses, malware, ransomware, spyware, and zero-day exploits. It includes real-time threat protection, smart firewall, password manager, secure VPN, and dark web monitoring. The software uses advanced AI and machine learning to detect and block even the newest threats."
    },
    {
      question: "How do I install and activate my antivirus product?",
      answer: "After purchase, you'll receive an activation key via email. Visit the product's setup page (e.g., norton.com/setup), sign in or create an account, enter your product key, and follow the installation instructions. The process typically takes 5-10 minutes. Our 24/7 support team is available if you need assistance with installation or activation."
    },
    {
      question: "What payment methods and guarantees do you offer?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All transactions are processed through secure, encrypted channels. We offer a 30-day money-back guarantee on all products - if you're not completely satisfied, contact our support team at support@avsafesolution.com within 30 days of purchase for a full refund."
    },
    {
      question: "Can I use the antivirus on multiple devices?",
      answer: "Yes! Our products offer flexible multi-device protection. Norton 360 Standard covers 1 device, Deluxe covers 5 devices, and Premium protects up to 10 devices. You can use the software on various platforms including Windows, Mac, iOS, and Android devices. Device management is easy through your online dashboard."
    },
    {
      question: "How often are virus definitions and protection updated?",
      answer: "Our antivirus products receive continuous, real-time updates 24/7. The virus definitions database is updated multiple times daily to protect against the latest threats. The software automatically downloads and installs these updates in the background, ensuring you're always protected without any manual intervention."
    },
    {
      question: "What happens when my subscription expires?",
      answer: "You'll receive renewal notifications before your subscription ends. You can enable auto-renewal for uninterrupted protection or manually renew when convenient. If you don't renew, your protection will be limited to basic features only, and you'll need to reactivate to restore full protection. We often offer special renewal discounts for existing customers."
    },
    {
      question: "What technical support options are available?",
      answer: "We provide comprehensive 24/7 technical support through multiple channels: phone, email, live chat, and an extensive online knowledge base. Our expert support team can assist with installation, activation, troubleshooting, virus removal, and any other technical issues. Premium plans include priority support with faster response times."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our antivirus products
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
