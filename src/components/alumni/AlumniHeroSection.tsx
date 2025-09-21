export function AlumniHeroSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Our <span className="text-primary">Alumni</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto font-light">
            Celebrating the achievements of our graduates who are making a difference in the world
          </p>
          <div className="pt-4">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From entrepreneurs to scientists, teachers to athletes - our alumni continue to embody the values and excellence instilled during their time at THOS.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
    </section>
  );
}
