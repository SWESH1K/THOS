import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Phone, MessageCircle } from "lucide-react";
import type { ContactInfo } from "../../data/admissionsData";

interface ContactSectionProps {
  contact: ContactInfo;
  onWhatsAppClick: () => void;
}

export function ContactSection({ contact, onWhatsAppClick }: ContactSectionProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team is here to help you through every step of the process
          </p>
          
          <Separator className="my-8" />
          
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">For queries, contact:</span>
              <a 
                href={`tel:${contact.phone}`}
                className="text-primary font-semibold hover:underline"
              >
                {contact.phone}
              </a>
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={onWhatsAppClick}
              className="bg-green-50 hover:bg-green-100 border-green-200 text-green-800 px-8 py-6 h-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Quick WhatsApp Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
