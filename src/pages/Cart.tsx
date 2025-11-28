import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-muted mx-auto mb-6" />
            <h1 className="font-display text-3xl mb-4">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-8">
              Agrega productos a tu carrito para comenzar tu compra
            </p>
            <Link to="/catalogo">
              <Button size="lg" className="rounded-full">
                Ver Catálogo
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl md:text-4xl text-primary-foreground mb-8">
          Carrito de Compras
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-2xl p-4 flex gap-4"
              >
                <Link to={`/producto/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                </Link>

                <div className="flex-1">
                  <Link to={`/producto/${item.id}`}>
                    <h3 className="font-display text-lg hover:text-primary transition-smooth">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <p className="text-xl font-bold text-primary">
                    ${item.price.toLocaleString("es-CO")}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center border border-border rounded-full overflow-hidden">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-none px-3"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="px-4 py-1 font-medium">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-none px-3"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              onClick={clearCart}
              className="w-full rounded-full"
            >
              Vaciar Carrito
            </Button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-4">
              <h2 className="font-display text-2xl mb-6">Resumen</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${totalPrice.toLocaleString("es-CO")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="font-medium">Calculado en checkout</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-display text-lg">Total</span>
                  <span className="font-display text-2xl text-primary">
                    ${totalPrice.toLocaleString("es-CO")}
                  </span>
                </div>
              </div>

              <Button size="lg" className="w-full rounded-full mb-3">
                Proceder al Pago
              </Button>

              <Link to="/catalogo">
                <Button variant="outline" size="lg" className="w-full rounded-full">
                  Seguir Comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
