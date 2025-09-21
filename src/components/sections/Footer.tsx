import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { footerLinks, contactInfo } from "@/data/constants";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">THOS</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building brighter futures for children in need through love, education, and unwavering support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground text-sm break-all">{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 THOS - The Home of Smiles. All rights reserved. Made with ❤️ for children's futures.
          </p>
        </div>
      </div>
    </footer>
  );
}
