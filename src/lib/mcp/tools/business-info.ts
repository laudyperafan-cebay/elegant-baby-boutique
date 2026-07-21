import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const BUSINESS_INFO = {
  name: "Pañalera La Elegancia del Baby",
  slogan: "Todo para tu bebé",
  description:
    "Cadena de pañalerías en Colombia especializada en productos para bebés: pañales, leches formuladas, juguetería, montables, paseadores, teteros y chupos, ropa, accesorios y productos de higiene.",
  contact: {
    whatsapp: "+57 320 969 4966",
    whatsappLink: "https://wa.me/573209694966",
  },
  paymentMethods: ["Efectivo", "Visa", "Mastercard", "PSE", "Efecty", "Nequi", "Daviplata"],
  socialMedia: {
    facebook:
      "https://www.facebook.com/p/Pañalera-Elegancia-Del-BABY-NEIVA-100092431112023/",
    instagram: "https://www.instagram.com/eleganciadelbaby2009/",
    tiktok: "https://www.tiktok.com/@eleganciadelbaby",
  },
  branches: 3,
  productCategories: [
    "Pañales",
    "Alimentación (leches formuladas, teteros, chupos)",
    "Juguetería",
    "Montables",
    "Paseadores y caminadores",
    "Cuidado personal e higiene",
    "Ropa y textiles",
    "Accesorios (chupetes, mordedores, cobijas)",
  ],
  shipping: {
    domestic: "Envíos a todo Colombia",
    pickup: "Recogida en tienda gratis en cualquiera de las 3 sucursales",
    freeShippingThreshold: "Envío gratis en compras seleccionadas por zona",
  },
};

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description:
    "Get general information about Pañalera La Elegancia del Baby: contact (WhatsApp), payment methods, social media, shipping options and product categories.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(BUSINESS_INFO, null, 2) }],
    structuredContent: { info: BUSINESS_INFO },
  }),
});
