import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-smooth hover:scale-105">
            <img src={logo} alt="La Elegancia del Baby" className="h-12 w-12" />
            <div className="hidden md:flex flex-col">
              <span className="font-display text-xl text-primary-foreground">La Elegancia</span>
              <span className="text-sm text-muted-foreground -mt-1">del Baby</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="pl-10 rounded-full border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                  {cartItems}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-8 pb-4">
          <Link
            to="/"
            className="text-sm font-medium transition-smooth hover:text-primary"
          >
            Inicio
          </Link>
          <Link
            to="/catalogo"
            className="text-sm font-medium transition-smooth hover:text-primary"
          >
            Catálogo
          </Link>
          <Link
            to="/catalogo?categoria=panales"
            className="text-sm font-medium transition-smooth hover:text-primary"
          >
            Pañales
          </Link>
          <Link
            to="/catalogo?categoria=accesorios"
            className="text-sm font-medium transition-smooth hover:text-primary"
          >
            Accesorios
          </Link>
          <Link
            to="/catalogo?categoria=cuidado"
            className="text-sm font-medium transition-smooth hover:text-primary"
          >
            Cuidado Personal
          </Link>
          <Link
            to="/catalogo?categoria=ropa"
            className="text-sm font-medium transition-smooth hover:text-primary"
          >
            Ropa y Textiles
          </Link>
          <Link
            to="/ofertas"
            className="text-sm font-medium text-primary transition-smooth hover:text-accent-foreground"
          >
            Ofertas
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <div className="relative mb-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Buscar productos..."
                  className="pl-10 rounded-full"
                />
              </div>
              <Link to="/" className="py-2 hover:text-primary transition-smooth">
                Inicio
              </Link>
              <Link to="/catalogo" className="py-2 hover:text-primary transition-smooth">
                Catálogo
              </Link>
              <Link to="/catalogo?categoria=panales" className="py-2 hover:text-primary transition-smooth">
                Pañales
              </Link>
              <Link to="/catalogo?categoria=accesorios" className="py-2 hover:text-primary transition-smooth">
                Accesorios
              </Link>
              <Link to="/catalogo?categoria=cuidado" className="py-2 hover:text-primary transition-smooth">
                Cuidado Personal
              </Link>
              <Link to="/catalogo?categoria=ropa" className="py-2 hover:text-primary transition-smooth">
                Ropa y Textiles
              </Link>
              <Link to="/ofertas" className="py-2 text-primary hover:text-accent-foreground transition-smooth">
                Ofertas
              </Link>
              <Button variant="outline" className="mt-2 rounded-full">
                <User className="h-4 w-4 mr-2" />
                Mi Cuenta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
