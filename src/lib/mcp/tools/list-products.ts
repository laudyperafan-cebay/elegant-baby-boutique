import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { catalogProducts as mockProducts } from "../catalog";

export default defineTool({
  name: "list_products",
  title: "List products",
  description:
    "List products from the Pañalera La Elegancia del Baby catalog. Optionally filter by category id (panales, alimentacion, jugueteria, paseadores, teteros, cuidado, ropa, accesorios, montables) and limit the number of results.",
  inputSchema: {
    categoryId: z
      .string()
      .optional()
      .describe("Optional category id to filter by (e.g. 'panales')."),
    limit: z
      .number()
      .int()
      .positive()
      .optional()
      .describe("Optional max number of products to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ categoryId, limit }) => {
    let items = mockProducts;
    if (categoryId) {
      items = items.filter((p) => p.categoryId === categoryId);
    }
    if (limit) items = items.slice(0, limit);
    const summary = items.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      originalPrice: p.originalPrice,
      category: p.category,
      categoryId: p.categoryId,
      brand: p.brand,
      age: p.age,
      size: p.size,
      stock: p.stock,
      isNew: p.isNew ?? false,
      discount: p.discount,
    }));
    return {
      content: [
        {
          type: "text",
          text: `Se encontraron ${summary.length} producto(s).\n\n${JSON.stringify(summary, null, 2)}`,
        },
      ],
      structuredContent: { count: summary.length, products: summary },
    };
  },
});
