import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ShoppingCart, CreditCard, Truck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pasos = [
  {
    numero: 1,
    icon: Search,
    title: "Explora nuestro catálogo",
    description: "Navega por nuestra amplia selección de productos para bebés. Usa los filtros para encontrar exactamente lo que necesitas por categoría, precio o marca.",
  },
  {
    numero: 2,
    icon: ShoppingCart,
    title: "Agrega al carrito",
    description: "Selecciona los productos que deseas y agrégalos a tu carrito. Puedes modificar las cantidades en cualquier momento antes de finalizar tu compra.",
  },
  {
    numero: 3,
    icon: CreditCard,
    title: "Realiza el pago",
    description: "Elige tu método de pago preferido: Visa, Mastercard, PSE, Efecty, Nequi o Daviplata. Todas las transacciones son 100% seguras.",
  },
  {
    numero: 4,
    icon: Truck,
    title: "Recibe tu pedido",
    description: "Enviaremos tu pedido a la dirección indicada. También puedes recogerlo en cualquiera de nuestras 3 sucursales sin costo adicional.",
  },
];

const ComoComprar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Cómo Comprar
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprar en La Elegancia del Baby es fácil, rápido y seguro. 
              Sigue estos simples pasos.
            </p>
          </div>
        </section>

        {/* Pasos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {pasos.map((paso, index) => (
                <div 
                  key={index}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl">
                      {paso.numero}
                    </div>
                    {index < pasos.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/30 mx-auto mt-4" />
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <paso.icon className="h-6 w-6 text-primary" />
                      <h3 className="font-display text-xl text-foreground">
                        {paso.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {paso.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl text-foreground mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-muted-foreground mb-8">
              Explora nuestro catálogo y encuentra todo lo que tu bebé necesita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalogo">
                <Button size="lg" className="rounded-full">
                  Ver Catálogo
                </Button>
              </Link>
              <a 
                href="https://wa.me/573209694966?text=Hola,%20necesito%20ayuda%20con%20mi%20compra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="rounded-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Necesito Ayuda
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Nota WhatsApp */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-display text-xl text-foreground mb-2">
                ¿Prefieres comprar por WhatsApp?
              </h3>
              <p className="text-muted-foreground mb-4">
                También puedes hacer tu pedido directamente por WhatsApp. 
                Nuestro equipo te atenderá de inmediato.
              </p>
              <a 
                href="https://wa.me/573209694966"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full bg-green-500 hover:bg-green-600">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  +57 320 969 4966
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComoComprar;
