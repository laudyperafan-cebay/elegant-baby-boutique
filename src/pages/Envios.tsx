import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Clock, MapPin, Package, CheckCircle } from "lucide-react";

const zonas = [
  {
    zona: "Neiva y alrededores",
    tiempo: "1-2 días hábiles",
    costo: "Gratis en compras mayores a $100.000",
  },
  {
    zona: "Soacha y Bogotá",
    tiempo: "2-3 días hábiles",
    costo: "Gratis en compras mayores a $150.000",
  },
  {
    zona: "La Plata y Huila",
    tiempo: "2-4 días hábiles",
    costo: "Gratis en compras mayores a $100.000",
  },
  {
    zona: "Resto del país",
    tiempo: "3-5 días hábiles",
    costo: "Calculado según destino",
  },
];

const Envios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Envíos y Entregas
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Llevamos los productos que tu bebé necesita hasta la puerta de tu casa
            </p>
          </div>
        </section>

        {/* Opciones de entrega */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-foreground text-center mb-12">
              Opciones de Entrega
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Envío a domicilio */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Truck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-4">
                  Envío a Domicilio
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Entrega en todo Colombia
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Seguimiento de tu pedido en tiempo real
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Envío gratis en compras seleccionadas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Embalaje seguro y protegido
                  </li>
                </ul>
              </div>

              {/* Recogida en tienda */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-4">
                  Recogida en Tienda
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ¡Gratis! Sin costo de envío
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Disponible en 3 sucursales
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Listo en 24 horas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Verifica tu pedido antes de llevarlo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tiempos y costos */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-foreground text-center mb-12">
              Tiempos y Costos de Envío
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 font-semibold text-foreground">
                  <div>Zona</div>
                  <div>Tiempo estimado</div>
                  <div>Costo</div>
                </div>
                {zonas.map((zona, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-3 gap-4 p-4 border-t border-border text-muted-foreground"
                  >
                    <div className="font-medium text-foreground">{zona.zona}</div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {zona.tiempo}
                    </div>
                    <div>{zona.costo}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Información adicional */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-6">
                <Package className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">
                  Seguimiento de Pedidos
                </h3>
                <p className="text-muted-foreground text-sm">
                  Recibirás un número de seguimiento por WhatsApp para que puedas 
                  rastrear tu pedido en todo momento.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">
                  Horario de Despacho
                </h3>
                <p className="text-muted-foreground text-sm">
                  Los pedidos realizados antes de las 2:00 PM se despachan el mismo día. 
                  Después de esa hora, se envían al día siguiente hábil.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Envios;
