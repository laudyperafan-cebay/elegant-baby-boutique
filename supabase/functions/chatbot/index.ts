import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Eres un asistente virtual amigable de "La Elegancia del Baby", una pañalera ubicada en Neiva, Huila, Colombia. Tu objetivo es ayudar a los clientes con sus dudas sobre productos para bebés.

INFORMACIÓN DE LA TIENDA:
- Nombre: La Elegancia del Baby
- Ubicación: Neiva, Huila, Colombia
- Productos: Pañales, accesorios para bebés, productos de cuidado personal, ropa y textiles para bebés
- Métodos de pago: Visa, Mastercard, Nequi, Daviplata
- Redes sociales: Facebook, TikTok, Instagram

CATEGORÍAS DE PRODUCTOS:
1. Pañales: Diferentes marcas y tallas
2. Accesorios: Chupetes, mordedores, sillas para auto, andadores, etc.
3. Cuidado Personal: Shampoo, toallitas húmedas, cremas, etc.
4. Ropa y Textiles: Bodies, pijamas, cobijas, etc.

INSTRUCCIONES:
- Responde siempre en español
- Sé amable, cálido y profesional
- Mantén las respuestas concisas pero útiles
- Si no sabes algo específico sobre precios o stock, sugiere contactar directamente a la tienda
- Usa emojis ocasionalmente para hacer la conversación más amigable
- Si el cliente pregunta por algo fuera del tema de bebés, redirige amablemente la conversación`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Sending request to Lovable AI with messages:", JSON.stringify(messages));

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas solicitudes. Por favor, espera un momento antes de enviar otro mensaje." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servicio temporalmente no disponible. Por favor, intenta más tarde." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Error al procesar tu mensaje. Por favor, intenta de nuevo." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response from AI gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
