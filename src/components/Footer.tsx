import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle, CreditCard, Smartphone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="La Elegancia del Baby" className="h-14 w-14" />
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
                  href="https://www.facebook.com/p/Pa%C3%B1alera-Elegancia-Del-BABY-NEIVA-100092431112023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110"
                  title="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
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
                <span className="text-muted-foreground">+57 (123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">info@laeleganciadelbaby.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Sucursal Principal</p>
                  <p className="font-medium text-foreground/80">Neiva, Huila</p>
                </div>
              </li>
              <li className="mt-4">
                <Link 
                  to="/sucursales" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium transition-colors text-sm underline-offset-4 hover:underline"
                >
                  Ver todas nuestras sucursales →
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
              <div className="bg-white rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <CreditCard className="h-4 w-4 text-[#1A1F71]" />
                  <span className="text-xs font-semibold text-[#1A1F71]">VISA</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <CreditCard className="h-4 w-4 text-[#EB001B]" />
                  <span className="text-xs font-semibold text-[#FF5F00]">Mastercard</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4 text-[#E91E63]" />
                  <span className="text-xs font-semibold text-[#E91E63]">Nequi</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4 text-[#ED1C24]" />
                  <span className="text-xs font-semibold text-[#ED1C24]">Daviplata</span>
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
