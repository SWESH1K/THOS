import { FocusCards } from "../ui/focus-cards";
import { galleryCards } from "../../data/constants";

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Gallery</h2>
          <p className="text-xl text-muted-foreground">Moments that capture our journey together</p>
        </div>
        
        <FocusCards cards={galleryCards} />
      </div>
    </section>
  );
}
