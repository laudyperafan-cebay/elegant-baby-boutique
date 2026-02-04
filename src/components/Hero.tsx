import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero rounded-3xl mx-4 my-8 shadow-elegant">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-soft-gold" />
              <span className="text-sm font-medium text-primary-foreground">
                Bienvenidos a La Elegancia del Baby
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
              Todo lo que tu bebé
              <span className="block text-primary"> necesita y merece</span>
            </h1>

            <p className="text-lg text-foreground/80 max-w-lg">
              Descubre nuestra colección premium de pañales, accesorios y productos de cuidado para tu bebé. 
              Calidad, elegancia y amor en cada producto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/catalogo">
                <Button size="lg" className="rounded-full shadow-medium hover:shadow-elegant transition-smooth group">
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link to="/ofertas">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                >
                  Ver Ofertas
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-primary/20">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">Envío Rápido</p>
                  <p className="text-xs text-foreground/70">A todo Colombia</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">Calidad Premium</p>
                  <p className="text-xs text-foreground/70">Productos certificados</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">🏪</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">3 Sucursales</p>
                  <p className="text-xs text-foreground/70">Neiva, Soacha, La Plata</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Productos para bebé premium"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-elegant animate-in zoom-in duration-500 delay-500 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-elegant flex items-center justify-center">
                  <span className="text-2xl">👶</span>
                </div>
                <div>
                  <p className="font-display text-lg text-primary-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Clientes felices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
