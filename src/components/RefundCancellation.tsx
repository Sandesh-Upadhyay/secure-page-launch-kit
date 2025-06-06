import React from "react";

const RefundCancellation: React.FC = () => {
  return (
    <section id="refund" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Refund & Cancellation Policy</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <p className="text-gray-700">
                Thank you for shopping at <strong>Best AV Deals</strong>. We value your satisfaction and strive to ensure you have a great shopping experience. Please review our Refund & Cancellation Policy below.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">🔁 Order Cancellation Rights</h3>
              <p className="text-gray-700">
                You may cancel your order within <strong>14 days</strong> without providing a reason. The cancellation period ends <strong>15 days</strong> from the date you or a third party (other than the carrier) receives the goods.
              </p>
              <p className="text-gray-700 mt-2">
                To cancel your order, contact us at:{" "}
                <span className="text-blue-600 font-medium">📧 contact@bestavdeals.shop</span>
              </p>
              <p className="text-gray-700 mt-2">
                Refunds will be processed within <strong>15 days</strong> of receiving the returned goods, using the same payment method. No extra fees will be charged.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">📦 Return Conditions</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                <li>The item must be purchased within the last 15 days.</li>
                <li>The item must be unused, in its original packaging, and in resellable condition.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">❌ Non-Returnable Items</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Items with revealed or redeemed product keys.</li>
                <li>Customized or personalized products.</li>
                <li>Items that spoil quickly or have expired.</li>
                <li>Unsealed items not returnable for health or hygiene reasons.</li>
                <li>Items inseparably mixed with other goods after delivery.</li>
              </ul>
              <p className="text-gray-700 mt-2">
                We reserve the right to reject returns that do not meet these conditions.
              </p>
              <p className="text-gray-700 mt-2 font-medium">
                ⚠️ Sale or promotional items are non-refundable unless legally required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">🚚 Returning Your Goods</h3>
              <p className="text-gray-700">
                You are responsible for the shipping costs and risks involved in returning items to us. Please use a trackable and insured shipping method.
              </p>
              <p className="text-gray-700 mt-2">
                Refunds cannot be issued until the returned item is received or delivery is confirmed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">🎁 Returning Gifts</h3>
              <p className="text-gray-700">
                If the item was marked as a gift and shipped directly to you, you’ll receive store credit once the return is processed.
              </p>
              <p className="text-gray-700 mt-2">
                If it wasn’t marked as a gift, the refund will be issued to the original purchaser.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">📬 Contact Us</h3>
              <p className="text-gray-700">
                For any questions about this policy, feel free to contact us:
              </p>
              <p className="text-blue-600 font-medium mt-2">📧 contact@bestavdeals.shop</p>
              <p className="text-gray-700 mt-2">
                We're here to help make your experience with Best AV Deals smooth and satisfactory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundCancellation;
