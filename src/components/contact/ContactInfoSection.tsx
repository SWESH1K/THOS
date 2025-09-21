import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function ContactInfoSection() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Our Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <address className="not-italic text-muted-foreground leading-relaxed">
            THOS Orphanage<br />
            123 Care Street<br />
            Hope District<br />
            Compassion City, CC 12345<br />
            United States
          </address>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Email Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              <span className="font-medium">General Inquiries:</span><br />
              <a href="mailto:info@thos.org" className="text-primary hover:underline">
                info@thos.org
              </a>
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium">Admissions:</span><br />
              <a href="mailto:admissions@thos.org" className="text-primary hover:underline">
                admissions@thos.org
              </a>
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium">Donations:</span><br />
              <a href="mailto:donations@thos.org" className="text-primary hover:underline">
                donations@thos.org
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            Call Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              <span className="font-medium">Main Office:</span><br />
              <a href="tel:+1234567890" className="text-primary hover:underline">
                +1 (234) 567-8900
              </a>
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium">Emergency:</span><br />
              <a href="tel:+1234567891" className="text-primary hover:underline">
                +1 (234) 567-8901
              </a>
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium">WhatsApp:</span><br />
              <a href="https://wa.me/1234567890" className="text-primary hover:underline">
                +1 (234) 567-8900
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Office Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex justify-between">
              <span>Monday - Friday:</span>
              <span>8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span>9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span>10:00 AM - 2:00 PM</span>
            </div>
            <div className="text-xs mt-4 text-muted-foreground/80">
              * Emergency services available 24/7
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
