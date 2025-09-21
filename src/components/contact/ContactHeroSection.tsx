import { Phone, Mail, MessageCircle } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Contact <span className="text-primary">THOS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions, discuss partnership opportunities, 
            and welcome you into our community of care. Reach out to us anytime.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 backdrop-blur px-4 py-2 rounded-full border">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-8900</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 backdrop-blur px-4 py-2 rounded-full border">
              <Mail className="w-4 h-4" />
              <span>info@thos.org</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 backdrop-blur px-4 py-2 rounded-full border">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
