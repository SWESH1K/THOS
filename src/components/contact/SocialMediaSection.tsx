import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export function SocialMediaSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/thos",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/thos",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/thos",
      color: "hover:text-pink-600"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@thos",
      color: "hover:text-red-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/thos",
      color: "hover:text-blue-700"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Follow Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Stay connected with us on social media for updates, stories, and community events.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-2 transition-colors ${social.color}`}
                  onClick={() => window.open(social.url, '_blank')}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-xs">{social.name}</span>
                </Button>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2 text-sm">Stay Updated</h4>
            <p className="text-xs text-muted-foreground">
              Follow our social media channels to see daily updates about our children, 
              upcoming events, volunteer opportunities, and success stories from our community.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
