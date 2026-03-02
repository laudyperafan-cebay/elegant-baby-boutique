# Pañalera La Elegancia del Baby - Documentación del Proyecto

> **Versión:** 1.0  
> **Última actualización:** Marzo 2026

---

## 📋 Descripción General

**Pañalera La Elegancia del Baby** es una aplicación web tipo e-commerce desarrollada para una cadena de tiendas especializadas en productos para bebés ubicada en Colombia. El sitio web permite a los clientes explorar el catálogo de productos, conocer información sobre la empresa, contactar por WhatsApp y realizar compras en línea con integración de pagos a través de MercadoPago.

---

## 🎯 Objetivos del Proyecto

### Objetivo General
Digitalizar la experiencia de compra de Pañalera La Elegancia del Baby, permitiendo a los clientes explorar productos, obtener asesoría y realizar compras desde cualquier lugar.

### Objetivos Específicos

1. **Presencia digital:** Establecer una vitrina en línea profesional que refleje la identidad de la marca.
2. **Catálogo interactivo:** Ofrecer un catálogo de productos navegable con filtros por categoría, búsqueda y detalles de cada producto.
3. **Atención automatizada:** Implementar un chatbot con inteligencia artificial que brinde asesoría sobre productos, horarios, sucursales y preguntas frecuentes.
4. **Ventas en línea:** Permitir compras directas con carrito de compras y pasarela de pagos (MercadoPago).
5. **Información institucional:** Dar a conocer la misión, visión, valores y ubicación de las sucursales.
6. **Experiencia de usuario:** Garantizar una navegación fluida, responsiva y accesible desde cualquier dispositivo.

---

## 👥 Público Objetivo

- Mamás y papás con bebés y niños pequeños
- Familias buscando productos de primera necesidad para bebés
- Personas que desean hacer regalos para recién nacidos o bebés
- Clientes de las sucursales físicas que prefieren comprar en línea

---

## 🛍️ Funcionalidades Principales

| Módulo | Descripción |
|--------|-------------|
| **Página de inicio** | Banner hero, categorías destacadas, productos populares |
| **Catálogo** | Listado completo con filtros por categoría y barra de búsqueda |
| **Detalle de producto** | Información completa, imágenes, precio y botón de agregar al carrito |
| **Carrito de compras** | Gestión de productos seleccionados con cantidades y total |
| **Pasarela de pagos** | Integración con MercadoPago (modo prueba y producción) |
| **Chatbot IA** | Asistente virtual para atención al cliente 24/7 |
| **Sucursales** | Información de ubicaciones, horarios y enlaces a Google Maps |
| **Secciones institucionales** | Quiénes Somos, Misión y Visión, Valores |
| **Soporte** | Cómo Comprar, Envíos, Devoluciones, Preguntas Frecuentes |
| **Trabaja con Nosotros** | Formulario de postulación laboral |

---

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| **React 18** | Framework de interfaz de usuario |
| **TypeScript** | Tipado estático para mayor robustez |
| **Vite** | Bundler y servidor de desarrollo |
| **Tailwind CSS** | Framework de estilos utilitarios |
| **shadcn/ui** | Componentes de interfaz accesibles y personalizables |
| **React Router** | Enrutamiento SPA (Single Page Application) |
| **Lovable Cloud** | Backend: base de datos, autenticación, funciones serverless |
| **MercadoPago** | Pasarela de pagos para Colombia |
| **Lucide React** | Iconografía consistente |

### Estructura del Proyecto

```
src/
├── assets/          → Imágenes de productos, logos y banners
├── components/      → Componentes reutilizables (Header, Footer, Chatbot, etc.)
│   └── ui/          → Componentes base de shadcn/ui
├── contexts/        → Estado global (CartContext para el carrito)
├── data/            → Datos mock de productos
├── hooks/           → Hooks personalizados (responsive, toast)
├── integrations/    → Cliente de Lovable Cloud
├── lib/             → Utilidades generales
├── pages/           → Páginas/rutas de la aplicación
docs/                → Documentación del proyecto
supabase/functions/  → Funciones backend (chatbot API)
```

---

## 🗺️ Mapa de Rutas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Index | Página principal |
| `/catalogo` | Catalog | Catálogo completo de productos |
| `/producto/:id` | ProductDetail | Detalle de un producto |
| `/carrito` | Cart | Carrito de compras |
| `/quienes-somos` | QuienesSomos | Historia de la empresa |
| `/mision-vision` | MisionVision | Misión y visión corporativa |
| `/valores` | Valores | Valores de la empresa |
| `/sucursales` | Sucursales | Ubicaciones y horarios |
| `/como-comprar` | ComoComprar | Guía paso a paso |
| `/envios` | Envios | Políticas de envío |
| `/devoluciones` | Devoluciones | Políticas de devolución |
| `/faq` | FAQ | Preguntas frecuentes |
| `/trabaja-con-nosotros` | TrabajaConNosotros | Postulación laboral |

---

## 💳 Métodos de Pago

- Visa / Mastercard (a través de MercadoPago)
- PSE (transferencia bancaria)
- Efecty / Baloto
- Nequi / Daviplata
- Efectivo en sucursales físicas

---

## 📍 Sucursales

| Ciudad | Dirección | Horario L-S | Domingos/Festivos |
|--------|-----------|-------------|-------------------|
| Neiva (Huila) | Centro comercial | 8:30am - 8:30pm | 9:00am - 2:00pm |
| San Mateo - Soacha | Zona comercial | 8:30am - 8:30pm | 9:00am - 8:00pm |
| La Plata (Huila) | Centro | 8:00am - 7:00pm | 8:00am - 4:00pm |

---

## 📞 Contacto

| Canal | Información |
|-------|-------------|
| **WhatsApp** | +57 320 969 4966 |
| **Facebook** | @LaEleganciaDelBaby |
| **Instagram** | @LaEleganciaDelBaby |
| **TikTok** | @LaEleganciaDelBaby |

---

## 🔮 Roadmap / Mejoras Futuras

- [ ] Autenticación de usuarios con historial de pedidos
- [ ] Panel de administración para gestión de productos e inventario
- [ ] Notificaciones por correo electrónico de estado de pedidos
- [ ] Integración con inventario real por sucursal
- [ ] Programa de fidelización / puntos
- [ ] App móvil nativa

---

## 📄 Licencia

Proyecto privado desarrollado para **Pañalera La Elegancia del Baby**. Todos los derechos reservados.
