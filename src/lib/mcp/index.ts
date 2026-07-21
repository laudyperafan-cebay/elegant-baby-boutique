import { defineMcp } from "@lovable.dev/mcp-js";
import listProducts from "./tools/list-products";
import getProduct from "./tools/get-product";
import searchProducts from "./tools/search-products";
import listBranches from "./tools/list-branches";
import getBusinessInfo from "./tools/business-info";

export default defineMcp({
  name: "elegancia-del-baby-mcp",
  title: "Pañalera La Elegancia del Baby",
  version: "0.1.0",
  instructions:
    "Herramientas públicas de la Pañalera La Elegancia del Baby. Usa `list_products` y `search_products` para consultar el catálogo, `get_product` para detalles de un producto por id, `list_branches` para ver las 3 sucursales (Neiva, San Mateo-Soacha, La Plata) con horarios, y `get_business_info` para métodos de pago, WhatsApp y redes sociales.",
  tools: [listProducts, getProduct, searchProducts, listBranches, getBusinessInfo],
});
