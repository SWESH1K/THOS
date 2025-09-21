import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import { heroProducts } from "@/data/constants";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        {/* Custom parallax background with images only */}
        <div className="h-full w-full relative">
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8 opacity-20">
            {heroProducts.slice(0, 12).map((product, index) => (
              <div
                key={product.title}
                className="relative h-32 md:h-40 lg:h-48 rounded-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:opacity-80"
                style={{
                  animation: `fadeInUp 1s ease-out ${index * 0.1}s both`,
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60 flex items-center justify-center z-10">
        <div className="text-center text-foreground px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up text-foreground">
            Building Brighter Futures
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 text-muted-foreground font-semibold">
            At THOS, we provide love, care, education, and hope to children in need, 
            empowering them to create their own success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button size="lg" className="text-lg px-8 py-3 w-full sm:w-auto transform hover:scale-105 transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 w-full sm:w-auto transform hover:scale-105 transition-all duration-200 border-border text-foreground hover:bg-muted">
              <Users className="mr-2 h-5 w-5" />
              Apply for Admission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
