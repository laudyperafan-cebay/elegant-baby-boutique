import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="La Elegancia del Baby" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-display text-lg text-primary-foreground">La Elegancia</span>
                <span className="text-xs text-muted-foreground -mt-1">del Baby</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Todo lo que tu bebé necesita con la elegancia que merece.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/Pa%C3%B1alera-Elegancia-Del-BABY-NEIVA-100092431112023/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                title="Sede Neiva"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/p/Pa%C3%B1alera-Elegancia-Del-Baby-La-Plata-100069245627041/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                title="Sede La Plata"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063739052782"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                title="Otra Sede"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-muted-foreground hover:text-primary transition-smooth">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/ofertas" className="text-muted-foreground hover:text-primary transition-smooth">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-smooth">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display text-lg mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalogo?categoria=panales" className="text-muted-foreground hover:text-primary transition-smooth">
                  Pañales
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=accesorios" className="text-muted-foreground hover:text-primary transition-smooth">
                  Accesorios
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=cuidado" className="text-muted-foreground hover:text-primary transition-smooth">
                  Cuidado Personal
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=ropa" className="text-muted-foreground hover:text-primary transition-smooth">
                  Ropa y Textiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4">Nuestras Sucursales</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Neiva, Huila</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Bogotá D.C.</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Armenia, Quindío</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+57 (123) 456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">info@laelegancia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} La Elegancia del Baby. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
