import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/admissions", label: "Admissions" },
    { href: "/alumni", label: "Alumni" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="h-15 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container bg-cards mx-auto px-4 h-full flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center space-x-3">
          <Heart className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">THOS</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const isExternal = link.href.startsWith("#");
            
            if (isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              );
            }
            
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors ${
                  isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center space-x-2">
          <Link to="/admissions">
            <Button size="sm" variant="outline" className="hidden sm:inline-flex">
              Admissions
            </Button>
          </Link>
          <Link to="/donate">
            <Button size="sm">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
