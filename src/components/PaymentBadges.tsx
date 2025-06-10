import React from 'react';

const PaymentBadges = () => {
  return (    <div className="w-full bg-white rounded-lg p-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-gray-700 text-sm font-medium mb-4">We Accept:</h3>
        
        <div className="flex items-center justify-center gap-6">
          {/* Payment Methods */}
          <img 
            src="/Visa Image.jpg" 
            alt="Visa" 
            className="h-10 object-contain"
          />          <img 
            src="/Master card image.jpg" 
            alt="MasterCard" 
            className="h-10 object-contain"
          />
          <img 
            src="/American Express.jpg" 
            alt="American Express" 
            className="h-10 object-contain"
          />
          <img 
            src="/Discover Image.jpg" 
            alt="Discover" 
            className="h-10 object-contain"
          />
          <img 
            src="/paypal image.jpg" 
            alt="PayPal" 
            className="h-10 object-contain"
          />
          <img 
            src="/Apple pay with google pay.jpg" 
            alt="Apple Pay and Google Pay" 
            className="h-10 object-contain"
          />
          <img 
            src="/stripe image.jpg" 
            alt="Stripe" 
            className="h-10 object-contain"
          />
          <img 
            src="/Interac Image.jpg" 
            alt="Interac" 
            className="h-10 object-contain"
          />

          {/* Security Badges */}          <div className="border-l border-gray-200 pl-6 ml-6">
            <div className="flex items-center gap-4">
              <img 
                src="/SSL Secure image.jpg" 
                alt="SSL Secured" 
                className="h-10 object-contain"
              />
              <img 
                src="/HTTPS Secure.jpg" 
                alt="HTTPS Secure" 
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBadges;
