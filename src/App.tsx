import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import QuienesSomos from "./pages/QuienesSomos";
import MisionVision from "./pages/MisionVision";
import Valores from "./pages/Valores";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import ComoComprar from "./pages/ComoComprar";
import Envios from "./pages/Envios";
import Devoluciones from "./pages/Devoluciones";
import FAQ from "./pages/FAQ";
import Sucursales from "./pages/Sucursales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/ofertas" element={<Catalog />} />
            {/* Sobre Nosotros */}
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/valores" element={<Valores />} />
            <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
            {/* Pedidos y Ayuda */}
            <Route path="/como-comprar" element={<ComoComprar />} />
            <Route path="/envios" element={<Envios />} />
            <Route path="/devoluciones" element={<Devoluciones />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Sucursales */}
            <Route path="/sucursales" element={<Sucursales />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
