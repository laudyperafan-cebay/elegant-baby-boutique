import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const sucursales = [
  {
    nombre: "Neiva - Sede Principal",
    direccion: "Calle 8 # 5-42, Centro",
    ciudad: "Neiva, Huila",
    telefono: "+57 320 969 4966",
    horario: {
      semana: "Lunes a Sábado: 8:00 AM - 7:00 PM",
      domingo: "Domingos: 9:00 AM - 2:00 PM",
    },
    mapsUrl: "https://maps.google.com/?q=Neiva+Huila+Colombia",
    destacado: true,
  },
  {
    nombre: "San Mateo - Soacha",
    direccion: "Carrera 7 # 12-34, San Mateo",
    ciudad: "Soacha, Cundinamarca",
    telefono: "+57 320 969 4966",
    horario: {
      semana: "Lunes a Sábado: 8:00 AM - 7:00 PM",
      domingo: "Domingos: 9:00 AM - 2:00 PM",
    },
    mapsUrl: "https://maps.google.com/?q=San+Mateo+Soacha+Colombia",
    destacado: false,
  },
  {
    nombre: "La Plata",
    direccion: "Calle Principal # 4-56, Centro",
    ciudad: "La Plata, Huila",
    telefono: "+57 320 969 4966",
    horario: {
      semana: "Lunes a Sábado: 8:00 AM - 6:00 PM",
      domingo: "Domingos: 9:00 AM - 1:00 PM",
    },
    mapsUrl: "https://maps.google.com/?q=La+Plata+Huila+Colombia",
    destacado: false,
  },
];

const Sucursales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Nuestras Sucursales
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visítanos en cualquiera de nuestras 3 tiendas. ¡Te esperamos con los brazos abiertos!
            </p>
          </div>
        </section>

        {/* Sucursales Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sucursales.map((sucursal, index) => (
                <div 
                  key={index}
                  className={`bg-card border-2 rounded-2xl p-6 relative ${
                    sucursal.destacado 
                      ? 'border-primary shadow-lg' 
                      : 'border-border'
                  }`}
                >
                  {sucursal.destacado && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Sede Principal
                    </div>
                  )}
                  
                  <h3 className="font-display text-xl text-foreground mb-4 mt-2">
                    {sucursal.nombre}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground">{sucursal.direccion}</p>
                        <p className="text-muted-foreground text-sm">{sucursal.ciudad}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <a 
                        href={`https://wa.me/${sucursal.telefono.replace(/\D/g, '')}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {sucursal.telefono}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-foreground">{sucursal.horario.semana}</p>
                        <p className="text-muted-foreground">{sucursal.horario.domingo}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <a 
                      href={sucursal.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Cómo llegar
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Información general */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl text-foreground mb-6">
                Información General
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Atención Personalizada</h3>
                  <p className="text-muted-foreground text-sm">
                    En todas nuestras sucursales contamos con personal capacitado 
                    para asesorarte y ayudarte a encontrar lo mejor para tu bebé.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Recoge tu Pedido</h3>
                  <p className="text-muted-foreground text-sm">
                    Compra en línea y recoge sin costo en la sucursal más cercana. 
                    Tu pedido estará listo en 24 horas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA WhatsApp */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contáctanos por WhatsApp y te responderemos de inmediato
            </p>
            <a 
              href="https://wa.me/573209694966"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600">
                <Phone className="h-4 w-4 mr-2" />
                +57 320 969 4966
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sucursales;
