import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const BRANCHES = [
  {
    id: "neiva",
    name: "Neiva - Sede Principal",
    city: "Neiva",
    department: "Huila",
    hours: {
      mondayToSaturday: "8:30am - 8:30pm",
      sundaysAndHolidays: "9:00am - 2:00pm",
    },
  },
  {
    id: "san-mateo-soacha",
    name: "San Mateo - Soacha",
    city: "Soacha",
    department: "Cundinamarca",
    hours: {
      mondayToSaturday: "8:30am - 8:30pm",
      sundaysAndHolidays: "9:00am - 8:00pm",
    },
  },
  {
    id: "la-plata",
    name: "La Plata",
    city: "La Plata",
    department: "Huila",
    hours: {
      mondayToSaturday: "8:00am - 7:00pm",
      sundaysAndHolidays: "8:00am - 4:00pm",
    },
  },
];

export default defineTool({
  name: "list_branches",
  title: "List branches",
  description:
    "List all Pañalera La Elegancia del Baby physical branches with their city, department and opening hours (weekday and Sunday/holiday schedules).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `La Elegancia del Baby tiene ${BRANCHES.length} sucursales.\n\n${JSON.stringify(BRANCHES, null, 2)}`,
      },
    ],
    structuredContent: { count: BRANCHES.length, branches: BRANCHES },
  }),
});
