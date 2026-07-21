import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getProductById } from "@/data/mockProducts";

export default defineTool({
  name: "get_product",
  title: "Get product details",
  description:
    "Get full details of a single product from the Pañalera La Elegancia del Baby catalog by its id, including description, features, brand, price, discount, stock and recommended age.",
  inputSchema: {
    id: z.string().min(1).describe("Product id (e.g. '1', '2', ...)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const product = getProductById(id);
    if (!product) {
      return {
        content: [
          { type: "text", text: `No se encontró un producto con id '${id}'.` },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(product, null, 2) }],
      structuredContent: { product },
    };
  },
});
