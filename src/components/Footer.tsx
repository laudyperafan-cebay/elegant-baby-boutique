import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin, CreditCard, Smartphone } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="Pañalera Elegancia del Baby" className="h-28 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              En <span className="text-primary font-medium">La Elegancia del Baby</span> cuidamos lo más valioso de tu hogar. 
              Productos de calidad con amor y dedicación para el bienestar de tu bebé.
            </p>
            
            {/* Redes Sociales */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-foreground">Síguenos</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/p/Pañalera-Elegancia-Del-BABY-NEIVA-100092431112023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@eleganciadelbaby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                  title="TikTok"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/eleganciadelbaby2009/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition-all duration-300 hover:scale-110"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-foreground">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/573209694966" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  +57 320 969 4966
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">info@laeleganciadelbaby.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground/80">3 Sucursales:</p>
                  <p>Neiva • San Mateo-Soacha • La Plata</p>
                </div>
              </li>
              <li className="mt-4">
                <Link 
                  to="/sucursales" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium transition-colors text-sm underline-offset-4 hover:underline"
                >
                  Ver horarios y ubicaciones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Sobre Nosotros */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-foreground">Sobre Nosotros</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/quienes-somos" className="text-muted-foreground hover:text-primary transition-colors">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link to="/mision-vision" className="text-muted-foreground hover:text-primary transition-colors">
                  Misión y visión
                </Link>
              </li>
              <li>
                <Link to="/valores" className="text-muted-foreground hover:text-primary transition-colors">
                  Nuestros valores
                </Link>
              </li>
              <li>
                <Link to="/trabaja-con-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Pedidos y Ayuda */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-foreground">Pedidos y Ayuda</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/como-comprar" className="text-muted-foreground hover:text-primary transition-colors">
                  Cómo comprar
                </Link>
              </li>
              <li>
                <Link to="/envios" className="text-muted-foreground hover:text-primary transition-colors">
                  Envíos y entregas
                </Link>
              </li>
              <li>
                <Link to="/devoluciones" className="text-muted-foreground hover:text-primary transition-colors">
                  Cambios y devoluciones
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Métodos de Pago */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-foreground">Métodos de Pago</h3>
            <p className="text-sm text-muted-foreground mb-3">Paga de forma segura con:</p>
            <div className="flex flex-wrap gap-2">
              {/* Visa */}
              <div className="bg-muted/60 rounded-md px-3 py-2 flex items-center justify-center">
                <svg viewBox="0 0 48 32" className="h-5 w-auto">
                  <rect fill="#1A1F71" width="48" height="32" rx="4"/>
                  <text x="24" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontStyle="italic">VISA</text>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="bg-muted/60 rounded-md px-3 py-2 flex items-center justify-center">
                <svg viewBox="0 0 48 32" className="h-5 w-auto">
                  <rect fill="#f5f5f5" width="48" height="32" rx="4"/>
                  <circle cx="18" cy="16" r="10" fill="#EB001B"/>
                  <circle cx="30" cy="16" r="10" fill="#F79E1B"/>
                  <path d="M24 8.8a10 10 0 0 0 0 14.4 10 10 0 0 0 0-14.4z" fill="#FF5F00"/>
                </svg>
              </div>
              {/* PSE */}
              <div className="bg-muted/60 rounded-md px-3 py-2 flex items-center justify-center">
                <div className="flex items-center gap-1">
                  <div className="h-5 w-5 rounded-full bg-[#003DA5] flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">PSE</span>
                  </div>
                </div>
              </div>
              {/* Efecty */}
              <div className="bg-muted/60 rounded-md px-3 py-2 flex items-center justify-center">
                <span className="text-xs font-bold text-[#FFDD00] bg-[#1D1D1B] px-2 py-0.5 rounded">efecty</span>
              </div>
              {/* Nequi */}
              <div className="bg-muted/60 rounded-md px-3 py-2 flex items-center justify-center">
                <div className="flex items-center gap-1">
                  <div className="h-5 w-5 rounded-full bg-[#E91E63] flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">N</span>
                  </div>
                  <span className="text-xs font-bold text-[#E91E63]">Nequi</span>
                </div>
              </div>
              {/* Daviplata */}
              <div className="bg-muted/60 rounded-md px-3 py-2 flex items-center justify-center">
                <div className="flex items-center gap-1">
                  <div className="h-5 w-5 rounded-full bg-[#ED1C24] flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">D</span>
                  </div>
                  <span className="text-xs font-bold text-[#ED1C24]">Daviplata</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Transacciones 100% seguras
            </p>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-border/50 bg-muted/40">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pañalera La Elegancia del Baby. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
