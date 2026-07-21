import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { mockProducts } from "@/data/mockProducts";

export default defineTool({
  name: "search_products",
  title: "Search products",
  description:
    "Full-text search across the Pañalera La Elegancia del Baby catalog. Matches product name, description, brand, category, features, size and recommended age.",
  inputSchema: {
    query: z
      .string()
      .min(1)
      .describe("Search text, e.g. 'pañales recién nacido', 'shampoo', 'caminador'."),
    limit: z.number().int().positive().optional().describe("Max results to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query.toLowerCase();
    let items = mockProducts.filter((p) => {
      const haystack = [
        p.name,
        p.description,
        p.brand,
        p.category,
        p.categoryId,
        p.size ?? "",
        p.age ?? "",
        p.features.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
    if (limit) items = items.slice(0, limit);
    const summary = items.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      category: p.category,
      brand: p.brand,
      age: p.age,
      stock: p.stock,
    }));
    return {
      content: [
        {
          type: "text",
          text: `Se encontraron ${summary.length} resultado(s) para "${query}".\n\n${JSON.stringify(summary, null, 2)}`,
        },
      ],
      structuredContent: { query, count: summary.length, products: summary },
    };
  },
});
