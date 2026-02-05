import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Compass } from "lucide-react";

const MisionVision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Misión y Visión
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestro propósito y hacia dónde nos dirigimos
            </p>
          </div>
        </section>

        {/* Misión */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h2 className="font-display text-3xl text-foreground mb-6">
                  Nuestra Misión
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Brindar a las familias colombianas productos de alta calidad para el cuidado 
                  y bienestar de sus bebés, ofreciendo una experiencia de compra excepcional, 
                  precios justos y un servicio al cliente cálido y personalizado que refleje 
                  nuestro compromiso con cada familia que confía en nosotros.
                </p>
              </div>
              <div className="order-1 md:order-2 bg-primary/5 rounded-3xl p-12 text-center">
                <p className="text-2xl font-display text-primary italic">
                  "Cuidamos lo más valioso de tu hogar"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visión */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-secondary/20 rounded-3xl p-12 text-center">
                <p className="text-2xl font-display text-secondary-foreground italic">
                  "Líderes en el cuidado de bebés en Colombia"
                </p>
              </div>
              <div>
                <div className="h-20 w-20 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <Eye className="h-10 w-10 text-secondary-foreground" />
                </div>
                <h2 className="font-display text-3xl text-foreground mb-6">
                  Nuestra Visión
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ser reconocidos como la cadena de pañaleras líder en Colombia, expandiendo 
                  nuestra presencia a nivel nacional mientras mantenemos nuestros valores 
                  de calidad, servicio y compromiso con las familias. Aspiramos a ser el 
                  aliado de confianza de cada familia colombiana en el cuidado de sus bebés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Propósito */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 mx-auto">
              <Compass className="h-10 w-10 text-accent-foreground" />
            </div>
            <h2 className="font-display text-3xl text-foreground mb-6">
              Nuestro Propósito
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              Acompañar a las familias en cada etapa del crecimiento de sus bebés, 
              desde los primeros días hasta sus primeros pasos, proporcionando productos 
              de calidad que faciliten el cuidado diario y contribuyan a crear momentos 
              especiales entre padres e hijos.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MisionVision;
