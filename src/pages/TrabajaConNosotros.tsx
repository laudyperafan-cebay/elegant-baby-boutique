import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase, Users, Heart, TrendingUp, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const beneficios = [
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Trabajamos en un ambiente cálido y amigable donde cada miembro es valorado.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Profesional",
    description: "Ofrecemos oportunidades de desarrollo y capacitación continua.",
  },
  {
    icon: Heart,
    title: "Pasión por los Bebés",
    description: "Trabaja en algo que amas: el cuidado y bienestar de los más pequeños.",
  },
  {
    icon: Briefcase,
    title: "Estabilidad Laboral",
    description: "Empresa en constante crecimiento con más de 15 años en el mercado.",
  },
];

const TrabajaConNosotros = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    cargo: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se enviaría el formulario
    toast({
      title: "¡Solicitud enviada!",
      description: "Hemos recibido tu información. Te contactaremos pronto.",
    });
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      ciudad: "",
      cargo: "",
      mensaje: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Trabaja con Nosotros
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ¡Únete a la familia La Elegancia del Baby! Buscamos personas apasionadas 
              que quieran hacer la diferencia.
            </p>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-foreground text-center mb-12">
              ¿Por qué trabajar con nosotros?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <beneficio.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {beneficio.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {beneficio.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulario */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-3xl text-foreground text-center mb-4">
                Envía tu hoja de vida
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Completa el siguiente formulario y nos pondremos en contacto contigo
              </p>
              
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      placeholder="300 123 4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad *</Label>
                    <Input
                      id="ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      required
                      placeholder="Neiva, Soacha, La Plata..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo de interés</Label>
                  <Input
                    id="cargo"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    placeholder="Ej: Vendedor(a), Cajero(a), Bodeguero..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Cuéntanos sobre ti</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describe tu experiencia y por qué te gustaría trabajar con nosotros..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Solicitud
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas que procesemos tu información 
                  para fines de selección de personal.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TrabajaConNosotros;
