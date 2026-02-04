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
            <p className="text-sm text-muted-foreground mb-4">Paga de forma segura con:</p>
            <div className="grid grid-cols-2 gap-3">
              {/* Visa */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="h-8 w-auto">
                  <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/>
                  <path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.846 30v-.002h3.078L18.281 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"/>
                  <path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"/>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="h-8 w-auto">
                  <path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/>
                  <circle fill="#FFC107" cx="30" cy="24" r="10"/>
                  <circle fill="#FF3D00" cx="18" cy="24" r="10"/>
                  <path fill="#FF9800" d="M18,14c-3.497,0-6.584,1.794-8.387,4.511C11.022,18.186,12.468,18,14,18c3.497,0,6.584,1.794,8.387,4.511C20.978,22.186,19.532,22,18,22c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.532,0,2.978-0.186,4.387-0.511C20.584,32.206,17.497,34,14,34c-1.532,0-2.978-0.186-4.387-0.511C11.416,30.772,14.503,28.978,18,28.978V14z"/>
                </svg>
              </div>
              {/* Nequi */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="h-6 w-6 rounded-full bg-[#E91E63] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <span className="text-sm font-bold text-[#E91E63]">Nequi</span>
                </div>
              </div>
              {/* Daviplata */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="h-6 w-6 rounded-full bg-[#ED1C24] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">D</span>
                  </div>
                  <span className="text-sm font-bold text-[#ED1C24]">Daviplata</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
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
