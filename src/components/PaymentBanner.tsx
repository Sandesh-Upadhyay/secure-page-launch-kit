import React from 'react';

const PaymentBanner = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-gray-700 text-sm font-medium mb-4">We Accept:</h3>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Payment Methods */}
          <img src="/payment-icons/visa.jpg" alt="Visa" className="h-10 object-contain" />
          <img src="/payment-icons/mastercard.jpg" alt="MasterCard" className="h-10 object-contain" />
          <img src="/payment-icons/amex.jpg" alt="American Express" className="h-10 object-contain" />
          <img src="/payment-icons/discover.jpg" alt="Discover" className="h-10 object-contain" />
          <img src="/payment-icons/paypal.jpg" alt="PayPal" className="h-10 object-contain" />
          <img src="/payment-icons/applepay.jpg" alt="Apple Pay" className="h-10 object-contain" />
          <img src="/payment-icons/googlepay.jpg" alt="Google Pay" className="h-10 object-contain" />
          <img src="/payment-icons/stripe.jpg" alt="Stripe" className="h-10 object-contain" />
          <img src="/payment-icons/interac.jpg" alt="Interac" className="h-10 object-contain" />

          {/* Security Badges */}
          <div className="border-l border-gray-200 pl-6 ml-6">
            <div className="flex items-center gap-4">
              <img src="/security-icons/ssl-secured.jpg" alt="SSL Secured" className="h-10 object-contain" />
              <img src="/security-icons/https-lock.jpg" alt="HTTPS Secure" className="h-10 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBanner;
