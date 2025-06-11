import React from "react";

const TermsSection = () => {
  return (
    <section id="terms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Terms & Conditions</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">📦 Refund & Cancellation Policy</h3>
              <p className="text-gray-700">
                Thank you for shopping with Best AV Deals!
              </p>
              <p className="text-gray-700 mt-2">
                We value your trust and aim to provide you with the best products and service. If you're not completely satisfied with your purchase, please take a moment to review our Refund and Cancellation Policy below.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">🔁 Order Cancellation Rights</h3>
              <p className="text-gray-700">
                You have the right to cancel your order within 14 days without needing to provide a reason.
              </p>
              <p className="text-gray-700 mt-2">
                The cancellation period ends 15 days from the date you received the product, or when a third party you appointed (not the delivery carrier) received the goods on your behalf.
              </p>
              <p className="text-gray-700 mt-2">
                To request a cancellation, simply email us at:
              </p>
              <p className="text-blue-600 font-medium mt-2">
                📧 support@avsafesolution.com
              </p>
              <p className="text-gray-700 mt-2">
                We will process your refund within 15 days of receiving the returned goods, using the same payment method you used for the original order. No additional fees will be charged.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">📦 Return Conditions</h3>
              <p className="text-gray-700">
                To be eligible for a return, please ensure the following:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                <li>The item was purchased within the last 15 days</li>
                <li>The item is unused, in its original packaging, and in resellable condition</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">❌ Items That Cannot Be Returned:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Products where the product key or code has been revealed or used</li>
                <li>Customized or personalized items</li>
                <li>Items with a short shelf life or that deteriorate quickly</li>
                <li>Products unsealed after delivery that cannot be returned for hygiene or health reasons</li>
                <li>Items that are mixed inseparably with other goods after delivery</li>
              </ul>
              <p className="text-gray-700 mt-2">
                We reserve the right to refuse returns that don't meet these conditions.
              </p>
              <p className="text-gray-700 mt-2 font-medium">
                ⚠️ Please note: Items purchased on sale or promotion are non-refundable, unless otherwise required by law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">🚚 Returning Your Item</h3>
              <p className="text-gray-700">
                You are responsible for the shipping costs and risks involved in returning the item to us.
              </p>
              <p className="text-gray-700 mt-2">
                We strongly recommend using a trackable and insured shipping method to prevent issues with lost or damaged packages.
              </p>
              <p className="text-gray-700 mt-2">
                We cannot issue a refund until the returned item is received or verified via delivery confirmation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">🎁 Returning Gifts</h3>
              <p className="text-gray-700">
                If the item was marked as a gift and shipped directly to you, you'll receive a gift credit once the return is received.
              </p>
              <p className="text-gray-700 mt-2">
                If the item wasn't marked as a gift, or the gift giver had it delivered to themselves before giving it to you, the refund will be issued to the original purchaser.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">📬 Need Help?</h3>
              <p className="text-gray-700">
                If you have any questions or concerns about our Refund & Cancellation Policy, don't hesitate to reach out:
              </p>
              <p className="text-blue-600 font-medium mt-2">
                📧 support@avsafesolution.com
              </p>
              <p className="text-gray-700 mt-2">
                We're here to help and ensure your experience with Best AV Deals is a smooth one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
