import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The education I received at THOS changed my life completely. Today, I'm a software engineer, and I owe it all to the support and care I received here. The teachers believed in me when I didn't believe in myself.",
    name: "Rahul Kumar",
    designation: "Alumni, Software Engineer",
    type: "student"
  },
  {
    quote: "Supporting THOS has been one of the most rewarding experiences of my life. Seeing these children grow, learn, and succeed gives me immense joy. Every donation truly makes a difference - you can see it in their bright smiles and achievements.",
    name: "Mrs. Priya Sharma",
    designation: "Regular Donor",
    type: "donor"
  }
];

export function DonateTestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories of Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from those whose lives have been touched by your generosity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.designation}
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    testimonial.type === 'student' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {testimonial.type === 'student' ? 'Alumni' : 'Donor'}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
