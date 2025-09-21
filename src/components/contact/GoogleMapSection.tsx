import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function GoogleMapSection() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Find Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.942180288362!2d78.59253170000001!3d17.4624813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c416e3ebcad%3A0x96ab4f5bed01bee3!2sThe%20Home%20for%20Orphan%20Students!5e0!3m2!1sen!2sin!4v1758451231344!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '384px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="THOS Orphanage Location"
            className="w-full h-full"
          />
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            <strong>Note:</strong> This is a placeholder map embed. Replace the src URL with your actual Google Maps embed link.
            To get your embed link, visit{" "}
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Maps
            </a>
            , search for your location, click "Share" → "Embed a map" → "Copy HTML".
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
