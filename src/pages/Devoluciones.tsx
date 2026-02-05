import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RefreshCw, Shield, Clock, AlertCircle, CheckCircle, XCircle } from "lucide-react";

const Devoluciones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Cambios y Devoluciones
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tu satisfacción es nuestra prioridad. Conoce nuestra política de cambios y devoluciones.
            </p>
          </div>
        </section>

        {/* Política general */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">30 Días</h3>
                  <p className="text-sm text-muted-foreground">
                    Tienes hasta 30 días para solicitar un cambio o devolución
                  </p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Cambios Gratis</h3>
                  <p className="text-sm text-muted-foreground">
                    Cambia por otra talla o producto sin costo adicional
                  </p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Garantía</h3>
                  <p className="text-sm text-muted-foreground">
                    Todos nuestros productos cuentan con garantía del fabricante
                  </p>
                </div>
              </div>

              {/* Condiciones */}
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Condiciones para Cambios y Devoluciones
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Aceptamos cambios si:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        El producto está sin usar y en su empaque original
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        Conservas la factura o comprobante de compra
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        Han pasado menos de 30 días desde la compra
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        Las etiquetas están intactas
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" />
                      No aceptamos cambios de:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Productos de higiene personal (chupones, teteros usados)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Pañales abiertos o en paquetes incompletos
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Productos con signos de uso o deterioro
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Artículos en liquidación o promoción especial
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Proceso */}
              <div className="bg-muted/30 rounded-2xl p-8">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  ¿Cómo solicitar un cambio o devolución?
                </h2>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Contáctanos por WhatsApp</h4>
                      <p className="text-muted-foreground">Escríbenos al +57 320 969 4966 indicando tu número de pedido y el motivo del cambio.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Envía fotos del producto</h4>
                      <p className="text-muted-foreground">Tomaremos fotos para verificar el estado del producto y agilizar el proceso.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Lleva el producto a la tienda o coordina envío</h4>
                      <p className="text-muted-foreground">Puedes llevar el producto a cualquiera de nuestras sucursales o coordinar la devolución por mensajería.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Recibe tu cambio o reembolso</h4>
                      <p className="text-muted-foreground">Procesamos cambios inmediatamente. Los reembolsos se realizan en 3-5 días hábiles.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Nota importante */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Importante</h3>
                  <p className="text-amber-700 text-sm">
                    Para productos defectuosos o con fallas de fábrica, la garantía cubre el cambio 
                    sin importar el tiempo transcurrido. Contáctanos para hacer válida tu garantía.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Devoluciones;
