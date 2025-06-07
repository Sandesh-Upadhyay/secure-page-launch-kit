import React from 'react';

const PaymentBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-white/10 rounded-lg">
      {/* Payment Methods */}
      <div className="flex items-center gap-2">
        <img 
          src="/payment-visa.jpg" 
          alt="Visa" 
          className="h-8 object-contain"
        />
        <img 
          src="/payment-mastercard.jpg" 
          alt="MasterCard" 
          className="h-8 object-contain"
        />
        <img 
          src="/payment-amex.jpg" 
          alt="American Express" 
          className="h-8 object-contain"
        />
        <img 
          src="/payment-discover.jpg" 
          alt="Discover" 
          className="h-8 object-contain"
        />
        <img 
          src="/payment-paypal.jpg" 
          alt="PayPal" 
          className="h-8 object-contain"
        />
        <img 
          src="/payment-applepay.jpg" 
          alt="Apple Pay" 
          className="h-8 object-contain"
        />
        <img 
          src="/payment-googlepay.jpg" 
          alt="Google Pay" 
          className="h-8 object-contain"
        />
        <img 
          src="/payment-stripe.jpg" 
          alt="Stripe" 
          className="h-8 object-contain"
        />
        <img 
          src="/payment-interac.jpg" 
          alt="Interac" 
          className="h-8 object-contain"
        />
      </div>

      {/* Security Badges */}
      <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
        <div className="flex items-center gap-2">
          <img 
            src="/ssl-secured.jpg" 
            alt="SSL Secured" 
            className="h-8 object-contain"
          />
          <span className="text-sm text-white">SSL Secured</span>
        </div>
        <div className="flex items-center gap-2">
          <img 
            src="/https-lock.jpg" 
            alt="HTTPS Secure" 
            className="h-8 object-contain"
          />
          <span className="text-sm text-white">HTTPS Secure</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentBadges;
