import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Star, Check, Truck, Shield, ArrowLeft } from "lucide-react";
import { getProductById, mockProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { toast } = useToast();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-3xl mb-4">Producto no encontrado</h1>
          <Link to="/catalogo">
            <Button className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Catálogo
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = mockProducts
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "¡Producto agregado!",
      description: `${quantity} unidad(es) de ${product.name} agregadas al carrito.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-smooth">
            Inicio
          </Link>
          <span>/</span>
          <Link to="/catalogo" className="hover:text-primary transition-smooth">
            Catálogo
          </Link>
          <span>/</span>
          <Link
            to={`/catalogo?categoria=${product.categoryId}`}
            className="hover:text-primary transition-smooth"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-muted/30 shadow-elegant">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-lg px-4 py-2">
                  -{product.discount}% OFF
                </Badge>
              )}
              {product.isNew && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-lg px-4 py-2">
                  Nuevo
                </Badge>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? "fill-soft-gold text-soft-gold"
                        : "text-muted stroke-muted"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  ({product.rating}.0) - 156 reseñas
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${product.price.toLocaleString("es-CO")}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toLocaleString("es-CO")}
                  </span>
                )}
              </div>
            </div>

            {/* Stock Info */}
            {product.stock > 0 ? (
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-green-600" />
                <span className="text-foreground">
                  {product.stock < 10
                    ? `Solo quedan ${product.stock} unidades`
                    : "Disponible en stock"}
                </span>
              </div>
            ) : (
              <div className="text-sm text-destructive">Agotado</div>
            )}

            {/* Product Info */}
            <div className="space-y-3 bg-muted/30 rounded-2xl p-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Marca:</span>
                <span className="font-medium">{product.brand}</span>
              </div>
              {product.size && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tamaño:</span>
                  <span className="font-medium">{product.size}</span>
                </div>
              )}
              {product.age && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Edad:</span>
                  <span className="font-medium">{product.age}</span>
                </div>
              )}
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Cantidad:</label>
                <div className="flex items-center border border-border rounded-full overflow-hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-none px-4"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={product.stock === 0}
                  >
                    -
                  </Button>
                  <span className="px-6 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-none px-4"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={product.stock === 0}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 rounded-full shadow-medium hover:shadow-elegant transition-smooth"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al Carrito
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`rounded-full ${isFavorite ? "border-primary bg-primary/10" : ""}`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : ""}`}
                  />
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Envío gratis</p>
                  <p className="text-xs text-muted-foreground">En compras +$100k</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Garantía</p>
                  <p className="text-xs text-muted-foreground">30 días</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Auténtico</p>
                  <p className="text-xs text-muted-foreground">100% original</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="rounded-full">
            <TabsTrigger value="description" className="rounded-full">
              Descripción
            </TabsTrigger>
            <TabsTrigger value="features" className="rounded-full">
              Características
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-full">
              Reseñas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <p className="text-foreground leading-relaxed">{product.description}</p>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <p className="text-muted-foreground">
                Las reseñas de clientes estarán disponibles próximamente.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-display text-3xl text-primary-foreground mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
