import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppFloat({ 
  phoneNumber = "+1234567890", 
  message = "Hello! I'd like to get in touch with THOS." 
}: WhatsAppFloatProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
