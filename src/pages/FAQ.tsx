import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    category: "Compras y Pedidos",
    questions: [
      {
        question: "¿Cómo puedo hacer un pedido?",
        answer: "Puedes hacer tu pedido a través de nuestra página web agregando productos al carrito, o directamente por WhatsApp al +57 320 969 4966. Nuestro equipo te guiará en el proceso.",
      },
      {
        question: "¿Cuáles son los métodos de pago disponibles?",
        answer: "Aceptamos Visa, Mastercard, PSE, Efecty, Nequi y Daviplata. Todas las transacciones son 100% seguras.",
      },
      {
        question: "¿Puedo modificar o cancelar mi pedido?",
        answer: "Sí, puedes modificar o cancelar tu pedido siempre y cuando no haya sido despachado. Contáctanos por WhatsApp lo antes posible.",
      },
      {
        question: "¿Emiten factura electrónica?",
        answer: "Sí, enviamos factura electrónica a tu correo una vez confirmado el pago de tu pedido.",
      },
    ],
  },
  {
    category: "Envíos y Entregas",
    questions: [
      {
        question: "¿Cuánto tarda en llegar mi pedido?",
        answer: "El tiempo varía según tu ubicación: 1-2 días en Neiva, 2-3 días en Bogotá/Soacha, y 3-5 días para el resto del país.",
      },
      {
        question: "¿El envío tiene algún costo?",
        answer: "Ofrecemos envío gratis en compras mayores a $100.000 para Neiva y La Plata, y $150.000 para Bogotá y Soacha. Para otros destinos, el costo se calcula según la ubicación.",
      },
      {
        question: "¿Puedo recoger mi pedido en tienda?",
        answer: "¡Sí! Puedes recoger tu pedido sin costo en cualquiera de nuestras 3 sucursales: Neiva, San Mateo-Soacha y La Plata.",
      },
      {
        question: "¿Cómo puedo rastrear mi pedido?",
        answer: "Te enviaremos el número de seguimiento por WhatsApp una vez despachado tu pedido para que puedas rastrearlo en tiempo real.",
      },
    ],
  },
  {
    category: "Productos",
    questions: [
      {
        question: "¿Los productos son originales?",
        answer: "Sí, todos nuestros productos son 100% originales. Trabajamos directamente con marcas reconocidas y distribuidores autorizados.",
      },
      {
        question: "¿Tienen productos de todas las tallas?",
        answer: "Manejamos una amplia variedad de tallas en ropa y pañales. Si no encuentras la talla que necesitas, contáctanos y te ayudamos a conseguirla.",
      },
      {
        question: "¿Los precios incluyen IVA?",
        answer: "Sí, todos los precios mostrados en nuestra tienda ya incluyen el IVA.",
      },
    ],
  },
  {
    category: "Cambios y Devoluciones",
    questions: [
      {
        question: "¿Cuánto tiempo tengo para cambiar un producto?",
        answer: "Tienes hasta 30 días desde la fecha de compra para solicitar un cambio, siempre que el producto esté sin usar y en su empaque original.",
      },
      {
        question: "¿Cómo solicito una devolución?",
        answer: "Escríbenos por WhatsApp al +57 320 969 4966 con tu número de pedido y fotos del producto. Te guiaremos en el proceso.",
      },
      {
        question: "¿Los productos tienen garantía?",
        answer: "Sí, todos nuestros productos cuentan con garantía del fabricante. Para productos defectuosos, el cambio aplica sin importar el tiempo transcurrido.",
      },
    ],
  },
  {
    category: "Sucursales",
    questions: [
      {
        question: "¿Dónde están ubicadas las tiendas?",
        answer: "Tenemos 3 sucursales: Neiva (sede principal), San Mateo-Soacha y La Plata. Visita nuestra página de Sucursales para ver direcciones y horarios.",
      },
      {
        question: "¿Cuáles son los horarios de atención?",
        answer: "Nuestras tiendas atienden de lunes a sábado de 8:00 AM a 7:00 PM, y domingos de 9:00 AM a 2:00 PM.",
      },
      {
        question: "¿Tienen servicio a domicilio desde las tiendas?",
        answer: "Sí, en Neiva ofrecemos domicilios el mismo día para pedidos realizados antes de las 4:00 PM.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="font-display text-2xl text-foreground mb-4">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="bg-card border border-border rounded-2xl overflow-hidden">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-b border-border last:border-b-0"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para ayudarte con cualquier duda
            </p>
            <a 
              href="https://wa.me/573209694966?text=Hola,%20tengo%20una%20pregunta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600">
                <MessageCircle className="h-4 w-4 mr-2" />
                Escríbenos por WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
