import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, Shield } from "lucide-react";
import { getFeaturedProducts, getDiscountProducts } from "@/data/mockProducts";

const Index = () => {
  const featuredProducts = getFeaturedProducts(4);
  const offerProducts = getDiscountProducts().slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <Categories />

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
                Productos Destacados
              </h2>
              <p className="text-muted-foreground">
                Lo mejor para tu bebé, seleccionado especialmente
              </p>
            </div>
            <Link to="/catalogo" className="hidden md:block">
              <Button variant="outline" className="rounded-full group">
                Ver Todo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center md:hidden">
            <Link to="/catalogo">
              <Button variant="outline" className="rounded-full">
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Offers Section */}
        <section className="bg-gradient-elegant py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
                  Ofertas Especiales
                </h2>
                <p className="text-muted-foreground">
                  Aprovecha nuestros descuentos exclusivos
                </p>
              </div>
              <Link to="/ofertas" className="hidden md:block">
                <Button className="rounded-full group">
                  Ver Todas
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {offerProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center md:hidden">
              <Link to="/ofertas">
                <Button className="rounded-full">
                  Ver Todas las Ofertas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprometidos con la calidad, el servicio y el bienestar de tu bebé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-primary-foreground">
                Calidad Premium
              </h3>
              <p className="text-sm text-muted-foreground">
                Productos certificados de las mejores marcas internacionales
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl text-primary-foreground">
                Con Amor y Cuidado
              </h3>
              <p className="text-sm text-muted-foreground">
                Cada producto seleccionado pensando en el bienestar de tu bebé
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl text-primary-foreground">
                Compra Segura
              </h3>
              <p className="text-sm text-muted-foreground">
                Garantía de satisfacción y envío seguro a toda Colombia
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-baby-blue/20 flex items-center justify-center mx-auto">
                <span className="text-3xl">🏪</span>
              </div>
              <h3 className="font-display text-xl text-primary-foreground">
                4 Sucursales
              </h3>
              <p className="text-sm text-muted-foreground">
                En Neiva, Bogotá y Armenia. Recoge en tienda o envío a domicilio
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="container mx-auto px-4 pb-16">
          <div className="gradient-hero rounded-3xl p-8 md:p-12 text-center shadow-elegant">
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Explora nuestro catálogo completo y encuentra todo lo que tu bebé necesita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalogo">
                <Button size="lg" className="rounded-full shadow-medium hover:shadow-elegant">
                  Ver Catálogo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/ofertas">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  Ver Ofertas
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
