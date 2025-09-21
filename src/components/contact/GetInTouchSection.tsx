import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MessageSquare, Heart, Users } from "lucide-react";

export function GetInTouchSection() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We'd love to hear from you! Whether you're interested in learning more about our programs, 
              volunteering opportunities, or how you can support our mission, we're here to help.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Volunteer Opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    Join our community of dedicated volunteers and make a direct impact on children's lives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Partnership Inquiries</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore partnership opportunities to expand our reach and impact in the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visit Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              We welcome visitors by appointment. Please call ahead or send us an email to schedule your visit.
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Visiting Guidelines</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• All visitors must register at the front desk</li>
                <li>• Valid ID required for entry</li>
                <li>• Guided tours available on weekends</li>
                <li>• Children's safety is our top priority</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              For urgent matters involving child welfare or emergencies:
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
              <p className="font-medium text-red-800 dark:text-red-200">
                Emergency Hotline: +1 (234) 567-8901
              </p>
              <p className="text-xs text-red-600 dark:text-red-300 mt-1">
                Available 24/7 for immediate assistance
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
