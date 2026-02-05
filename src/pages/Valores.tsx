import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Users, Sparkles, HandHeart, ThumbsUp } from "lucide-react";

const valores = [
  {
    icon: Heart,
    title: "Amor",
    description: "Todo lo que hacemos está motivado por el amor hacia los bebés y sus familias. Cada producto que ofrecemos es seleccionado con cariño pensando en el bienestar de los más pequeños.",
    color: "text-pink-500 bg-pink-50",
  },
  {
    icon: Shield,
    title: "Calidad",
    description: "Nos comprometemos a ofrecer productos de la más alta calidad, garantizando la seguridad y el confort de los bebés. Solo trabajamos con marcas reconocidas y certificadas.",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: Users,
    title: "Familia",
    description: "Creemos en los valores familiares y tratamos a cada cliente como parte de nuestra familia. Entendemos las necesidades de los padres porque somos padres también.",
    color: "text-green-500 bg-green-50",
  },
  {
    icon: HandHeart,
    title: "Servicio",
    description: "Brindamos atención personalizada y asesoría experta. Nuestro equipo está capacitado para ayudarte a encontrar exactamente lo que necesitas para tu bebé.",
    color: "text-purple-500 bg-purple-50",
  },
  {
    icon: ThumbsUp,
    title: "Honestidad",
    description: "Actuamos con transparencia en todos nuestros procesos. Ofrecemos precios justos y claros, sin sorpresas. La confianza de nuestros clientes es nuestra mayor recompensa.",
    color: "text-orange-500 bg-orange-50",
  },
  {
    icon: Sparkles,
    title: "Innovación",
    description: "Nos mantenemos actualizados con las últimas tendencias y productos del mercado para ofrecer siempre lo mejor. Buscamos constantemente nuevas formas de mejorar tu experiencia.",
    color: "text-cyan-500 bg-cyan-50",
  },
];

const Valores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Nuestros Valores
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en La Elegancia del Baby
            </p>
          </div>
        </section>

        {/* Valores Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valores.map((valor, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className={`h-16 w-16 rounded-2xl ${valor.color} flex items-center justify-center mb-6`}>
                    <valor.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-4">
                    {valor.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compromiso */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl text-foreground mb-6">
              Nuestro Compromiso Contigo
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              En La Elegancia del Baby, nos comprometemos a mantener estos valores 
              en cada interacción. Desde el momento en que entras a nuestra tienda 
              o visitas nuestro sitio web, hasta que llevas nuestros productos a casa, 
              queremos que sientas la diferencia de comprar con una empresa que 
              realmente se preocupa por ti y tu familia.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Valores;
