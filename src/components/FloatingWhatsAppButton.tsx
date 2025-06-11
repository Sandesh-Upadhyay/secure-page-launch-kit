import React from "react";

const phoneNumber = "+1 877-593-3166";

const FloatingCallButton = () => (
  <a
    href={`tel:+1 877-593-3166`}
    aria-label="Call Us Now"
    className="fixed z-[9999] bottom-6 right-6 md:bottom-8 md:right-8 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-2xl flex items-center gap-3 px-6 py-4 text-lg font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 animate-bounce"
    style={{ boxShadow: "0 8px 32px rgba(37, 99, 235, 0.3)" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="mr-2"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 22 2 13.93 2 4.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
    </svg>
    Call Us Now
  </a>
);

export default FloatingCallButton;
