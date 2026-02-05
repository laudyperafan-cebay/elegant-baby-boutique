import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Heart, Award, Clock } from "lucide-react";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Quiénes Somos
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Somos una empresa familiar dedicada al cuidado y bienestar de los más pequeños del hogar
            </p>
          </div>
        </section>

        {/* Historia */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl text-foreground mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <span className="text-primary font-semibold">La Elegancia del Baby</span> nació en 2009 
                  en la ciudad de Neiva, Huila, con el sueño de ofrecer productos de calidad para bebés 
                  a precios accesibles para todas las familias colombianas.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Lo que comenzó como una pequeña tienda familiar, hoy se ha convertido en una cadena 
                  de 3 sucursales ubicadas en Neiva, San Mateo-Soacha y La Plata, atendiendo a miles 
                  de familias que confían en nosotros para el cuidado de sus bebés.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Más de 15 años de experiencia nos respaldan, durante los cuales hemos crecido 
                  gracias a la confianza de nuestros clientes y al compromiso de ofrecer siempre 
                  lo mejor para los más pequeños.
                </p>
              </div>
              <div className="bg-primary/5 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-3xl text-primary">+15</h3>
                    <p className="text-sm text-muted-foreground">Años de experiencia</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-3xl text-primary">+10K</h3>
                    <p className="text-sm text-muted-foreground">Familias felices</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-3xl text-primary">3</h3>
                    <p className="text-sm text-muted-foreground">Sucursales</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-3xl text-primary">+500</h3>
                    <p className="text-sm text-muted-foreground">Productos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl text-foreground mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contamos con un equipo comprometido y capacitado, listo para asesorarte 
              y ayudarte a encontrar lo mejor para tu bebé.
            </p>
            <div className="bg-card rounded-2xl p-8 max-w-xl mx-auto border border-border">
              <p className="text-lg text-foreground italic">
                "Cada cliente es parte de nuestra familia. Nos esforzamos por brindar 
                la mejor atención y los mejores productos porque sabemos lo importante 
                que es el bienestar de tu bebé."
              </p>
              <p className="text-primary font-semibold mt-4">— Equipo La Elegancia del Baby</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;
