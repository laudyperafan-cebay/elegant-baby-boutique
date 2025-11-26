// Mock product data for the store

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  categoryId: string;
  description: string;
  rating: number;
  stock: number;
  isNew?: boolean;
  discount?: number;
  brand: string;
  size?: string;
  age?: string;
  features: string[];
}

// Product images - real photos from the store and professional images
import productDiapers1 from "@/assets/product-diapers-1.jpg";
import productDiapers2 from "@/assets/product-diapers-2.jpg";
import productDiapers3 from "@/assets/product-diapers-3.jpg";
import productPacifier from "@/assets/product-pacifier.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";
import productBodysuit from "@/assets/product-bodysuit.jpg";
import productBlanket from "@/assets/product-blanket.jpg";
import productWipes from "@/assets/product-wipes.jpg";
import productTeether from "@/assets/product-teether.jpg";
import productPajamas from "@/assets/product-pajamas.jpg";
import productHighchair from "@/assets/product-highchair.png";
import productWalker from "@/assets/product-walker.png";
import productCar from "@/assets/product-car.png";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Pañales Premium Recién Nacido",
    price: 45000,
    originalPrice: 55000,
    image: productDiapers1,
    category: "Pañales",
    categoryId: "panales",
    description: "Pañales ultra suaves con tecnología absorbente de última generación. Perfectos para la piel delicada de tu recién nacido.",
    rating: 5,
    stock: 25,
    isNew: true,
    discount: 18,
    brand: "Premium Baby",
    size: "Talla RN (hasta 4kg)",
    age: "0-3 meses",
    features: [
      "Ultra absorbente",
      "Hipoalergénico",
      "Indicador de humedad",
      "Ajuste anatómico",
      "Suavidad premium"
    ]
  },
  {
    id: "2",
    name: "Pañales Ecológicos Etapa 2",
    price: 52000,
    image: productDiapers2,
    category: "Pañales",
    categoryId: "panales",
    description: "Pañales biodegradables con materiales naturales. Cuida de tu bebé y del planeta.",
    rating: 5,
    stock: 15,
    isNew: true,
    brand: "Eco Baby",
    size: "Talla 2 (3-6kg)",
    age: "1-4 meses",
    features: [
      "100% biodegradable",
      "Sin químicos",
      "Certificado ecológico",
      "Super absorbente"
    ]
  },
  {
    id: "3",
    name: "Chupetes Ortodónticos Pack x3",
    price: 28000,
    originalPrice: 35000,
    image: productPacifier,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Pack de 3 chupetes con diseño ortodóntico que favorece el desarrollo bucal correcto.",
    rating: 5,
    stock: 30,
    discount: 20,
    brand: "Baby Comfort",
    age: "0-6 meses",
    features: [
      "Diseño ortodóntico",
      "Silicona suave",
      "Colores pastel",
      "Libre de BPA"
    ]
  },
  {
    id: "4",
    name: "Biberones Anti-Cólicos 260ml",
    price: 38000,
    image: productPacifier,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Biberones con sistema anti-cólicos que reduce el malestar digestivo del bebé.",
    rating: 5,
    stock: 20,
    brand: "FlowEasy",
    size: "260ml",
    age: "0-12 meses",
    features: [
      "Sistema anti-cólicos",
      "Tetina anatómica",
      "Vidrio resistente",
      "Fácil limpieza"
    ]
  },
  {
    id: "5",
    name: "Shampoo Natural para Bebé 400ml",
    price: 32000,
    image: productShampoo,
    category: "Cuidado Personal",
    categoryId: "cuidado",
    description: "Shampoo con ingredientes naturales, sin sulfatos ni parabenos. Ideal para el cuero cabelludo sensible.",
    rating: 5,
    stock: 40,
    isNew: true,
    brand: "Pure Baby",
    size: "400ml",
    age: "0-12 meses",
    features: [
      "Ingredientes naturales",
      "Sin lágrimas",
      "Dermatológicamente probado",
      "Aroma suave"
    ]
  },
  {
    id: "6",
    name: "Crema Protectora Pañal 100g",
    price: 24000,
    originalPrice: 30000,
    image: productShampoo,
    category: "Cuidado Personal",
    categoryId: "cuidado",
    description: "Crema protectora que previene y alivia las rozaduras del pañal con óxido de zinc.",
    rating: 5,
    stock: 3,
    discount: 20,
    brand: "Protect Baby",
    size: "100g",
    age: "0-24 meses",
    features: [
      "Con óxido de zinc",
      "Acción calmante",
      "Barrera protectora",
      "Hipoalergénico"
    ]
  },
  {
    id: "7",
    name: "Body de Algodón Orgánico Pack x3",
    price: 65000,
    image: productBodysuit,
    category: "Ropa y Textiles",
    categoryId: "ropa",
    description: "Pack de 3 bodies en colores pastel, hechos con algodón orgánico certificado.",
    rating: 5,
    stock: 18,
    isNew: true,
    brand: "Organic Baby Wear",
    size: "Talla 0-3M",
    age: "0-3 meses",
    features: [
      "Algodón orgánico",
      "Certificado GOTS",
      "Botones de presión",
      "Colores pastel"
    ]
  },
  {
    id: "8",
    name: "Manta Suave de Bambú",
    price: 48000,
    originalPrice: 60000,
    image: productBlanket,
    category: "Ropa y Textiles",
    categoryId: "ropa",
    description: "Manta ultra suave de fibra de bambú, transpirable y termorreguladora.",
    rating: 5,
    stock: 12,
    discount: 20,
    brand: "Bamboo Dreams",
    size: "100x120cm",
    age: "0-24 meses",
    features: [
      "Fibra de bambú",
      "Transpirable",
      "Termorreguladora",
      "Diseño elegante"
    ]
  },
  {
    id: "9",
    name: "Toallitas Húmedas Premium x80",
    price: 18000,
    image: productWipes,
    category: "Cuidado Personal",
    categoryId: "cuidado",
    description: "Toallitas húmedas con loción humectante, sin alcohol ni fragancias fuertes.",
    rating: 5,
    stock: 50,
    brand: "Soft Care",
    size: "Pack x80",
    age: "0-24 meses",
    features: [
      "Con loción",
      "Sin alcohol",
      "Textura suave",
      "PH balanceado"
    ]
  },
  {
    id: "10",
    name: "Mordedor Refrigerante",
    price: 22000,
    image: productTeether,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Mordedor con gel refrigerante que alivia las molestias de la dentición.",
    rating: 5,
    stock: 25,
    brand: "Teething Relief",
    age: "3-12 meses",
    features: [
      "Gel refrigerante",
      "Múltiples texturas",
      "Fácil agarre",
      "Libre de BPA"
    ]
  },
  {
    id: "11",
    name: "Pañales Nocturnos Extra Absorción",
    price: 58000,
    image: productDiapers3,
    category: "Pañales",
    categoryId: "panales",
    description: "Pañales especiales para la noche con extra absorción que garantizan 12 horas de sequedad.",
    rating: 5,
    stock: 20,
    isNew: true,
    brand: "Night Comfort",
    size: "Talla 3 (6-10kg)",
    age: "3-9 meses",
    features: [
      "12h de protección",
      "Extra absorción",
      "Suavidad nocturna",
      "Ajuste seguro"
    ]
  },
  {
    id: "12",
    name: "Set de Pijamas Térmicas",
    price: 75000,
    originalPrice: 95000,
    image: productPajamas,
    category: "Ropa y Textiles",
    categoryId: "ropa",
    description: "Set de 2 pijamas térmicas para mantener al bebé abrigado toda la noche.",
    rating: 5,
    stock: 8,
    discount: 21,
    brand: "Warm Nights",
    size: "Talla 6-12M",
    age: "6-12 meses",
    features: [
      "Tela térmica",
      "Pies integrados",
      "Cierre completo",
      "Ultra suave"
    ]
  },
  {
    id: "13",
    name: "Silla de Comer Baby Premium",
    price: 189000,
    originalPrice: 220000,
    image: productHighchair,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Silla de comer con diseño ergonómico, bandeja extraíble y altura ajustable. Perfecta para la hora de las comidas.",
    rating: 5,
    stock: 6,
    discount: 14,
    brand: "Baby Care",
    age: "6-36 meses",
    features: [
      "Bandeja extraíble",
      "Altura ajustable",
      "Fácil de limpiar",
      "Base estable",
      "Colores vibrantes"
    ]
  },
  {
    id: "14",
    name: "Caminador Musical Interactivo",
    price: 165000,
    image: productWalker,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Caminador con juguetes interactivos, música y luces. Ayuda al desarrollo motor del bebé de forma segura y divertida.",
    rating: 5,
    stock: 4,
    isNew: true,
    brand: "Fun Steps",
    age: "6-18 meses",
    features: [
      "Juguetes interactivos",
      "Música y luces",
      "Base antivuelco",
      "Altura regulable",
      "Estimula el desarrollo motor"
    ]
  },
  {
    id: "15",
    name: "Carro Eléctrico Montable Deportivo",
    price: 420000,
    originalPrice: 500000,
    image: productCar,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Carro montable eléctrico con diseño deportivo, control remoto para padres y luces LED. Diversión asegurada para los pequeños.",
    rating: 5,
    stock: 2,
    discount: 16,
    isNew: true,
    brand: "Sport Kids",
    age: "2-5 años",
    features: [
      "Motor eléctrico",
      "Control remoto parental",
      "Luces LED",
      "Diseño deportivo",
      "Batería recargable",
      "Velocidad ajustable"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return mockProducts.filter(product => product.categoryId === categoryId);
};

export const getFeaturedProducts = (limit: number = 8): Product[] => {
  return mockProducts.slice(0, limit);
};

export const getNewProducts = (): Product[] => {
  return mockProducts.filter(product => product.isNew);
};

export const getDiscountProducts = (): Product[] => {
  return mockProducts.filter(product => product.discount);
};
