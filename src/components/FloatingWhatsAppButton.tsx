import React from "react";

const whatsappNumber = "+18775933166";
const whatsappMessage = "Hi, I need help with my order";

const FloatingWhatsAppButton = () => (
  <a
    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed z-[9999] bottom-6 right-6 md:bottom-8 md:right-8 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center gap-3 px-6 py-4 text-lg font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 animate-bounce"
    style={{ boxShadow: "0 8px 32px rgba(37, 211, 102, 0.3)" }}
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
      <path d="M12.004 2.003c-5.523 0-9.997 4.474-9.997 9.997 0 1.762.463 3.484 1.341 4.997l-1.409 5.151a1 1 0 0 0 1.225 1.225l5.151-1.409a9.96 9.96 0 0 0 4.997 1.341c5.523 0 9.997-4.474 9.997-9.997s-4.474-9.997-9.997-9.997zm0 18.001a7.96 7.96 0 0 1-4.07-1.142 1 1 0 0 0-.765-.099l-3.36.92.92-3.36a1 1 0 0 0-.099-.765A7.96 7.96 0 0 1 4.003 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.285-5.548c-.234-.117-1.384-.683-1.599-.761-.215-.078-.372-.117-.53.117-.156.234-.608.761-.746.917-.137.156-.273.176-.507.059-.234-.117-.987-.364-1.88-1.162-.695-.619-1.164-1.381-1.302-1.615-.137-.234-.015-.36.103-.477.106-.105.234-.273.352-.41.117-.137.156-.234.234-.39.078-.156.039-.293-.02-.41-.059-.117-.53-1.28-.726-1.753-.192-.461-.388-.398-.53-.406l-.45-.008c-.156 0-.41.059-.625.293-.215.234-.82.801-.82 1.953 0 1.152.84 2.263.957 2.419.117.156 1.652 2.527 4.008 3.445.56.192.995.307 1.336.393.561.143 1.072.123 1.477.075.451-.054 1.384-.565 1.58-1.112.195-.547.195-1.016.137-1.112-.059-.097-.215-.156-.449-.273z" />
    </svg>
    Chat on WhatsApp
  </a>
);

export default FloatingWhatsAppButton;
