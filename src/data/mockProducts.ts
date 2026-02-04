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

// Product images - generated professional images
import productDiaper from "@/assets/product-diaper-pack.jpg";
import productFormula from "@/assets/product-formula.jpg";
import productToys from "@/assets/product-toys.jpg";
import productStroller from "@/assets/product-stroller.jpg";
import productBottles from "@/assets/product-bottles.jpg";
import productHygiene from "@/assets/product-hygiene.jpg";
import productWipes from "@/assets/product-wipes-new.jpg";
import productBlanket from "@/assets/product-blanket-new.jpg";
import productTeethers from "@/assets/product-teethers.jpg";
import productMobile from "@/assets/product-mobile.jpg";
import productOnesie from "@/assets/product-onesie.jpg";
import productCream from "@/assets/product-cream.jpg";
import productBathtub from "@/assets/product-bathtub.jpg";
import productHighchair from "@/assets/product-highchair.png";
import productWalker from "@/assets/product-walker.png";
import productCar from "@/assets/product-car.png";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Pañales Premium Recién Nacido",
    price: 45000,
    originalPrice: 55000,
    image: productDiaper,
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
    name: "Leche de Fórmula Premium Etapa 1",
    price: 85000,
    originalPrice: 95000,
    image: productFormula,
    category: "Alimentación",
    categoryId: "alimentacion",
    description: "Leche de fórmula enriquecida con DHA y vitaminas esenciales para el desarrollo óptimo de tu bebé.",
    rating: 5,
    stock: 15,
    isNew: true,
    discount: 11,
    brand: "Premium Baby",
    size: "900g",
    age: "0-6 meses",
    features: [
      "Enriquecida con DHA",
      "Vitaminas esenciales",
      "Fácil digestión",
      "Desarrollo cerebral"
    ]
  },
  {
    id: "3",
    name: "Set de Juguetes Sensoriales",
    price: 68000,
    originalPrice: 85000,
    image: productToys,
    category: "Juguetería",
    categoryId: "jugueteria",
    description: "Set completo de peluches y sonajeros para estimular los sentidos de tu bebé desde los primeros meses.",
    rating: 5,
    stock: 20,
    discount: 20,
    brand: "Fun Baby",
    age: "0-12 meses",
    features: [
      "Colores estimulantes",
      "Texturas variadas",
      "Materiales seguros",
      "Libre de BPA"
    ]
  },
  {
    id: "4",
    name: "Coche de Paseo Premium",
    price: 450000,
    originalPrice: 520000,
    image: productStroller,
    category: "Paseadores",
    categoryId: "paseadores",
    description: "Coche de paseo elegante y funcional con sistema plegable, suspensión y múltiples posiciones de reclinado.",
    rating: 5,
    stock: 8,
    discount: 13,
    brand: "Baby Comfort",
    age: "0-36 meses",
    features: [
      "Sistema plegable",
      "Suspensión suave",
      "Múltiples posiciones",
      "Capota expandible",
      "Canasta amplia"
    ]
  },
  {
    id: "5",
    name: "Set Biberones y Chupos Anti-Cólicos",
    price: 75000,
    image: productBottles,
    category: "Teteros y Chupos",
    categoryId: "teteros",
    description: "Set completo de 3 biberones con tetinas anti-cólicos y 3 chupos ortodónticos para el bienestar de tu bebé.",
    rating: 5,
    stock: 30,
    isNew: true,
    brand: "FlowEasy",
    age: "0-12 meses",
    features: [
      "Sistema anti-cólicos",
      "Tetina anatómica",
      "Libre de BPA",
      "Fácil limpieza"
    ]
  },
  {
    id: "6",
    name: "Kit de Higiene y Cuidado Personal",
    price: 95000,
    originalPrice: 115000,
    image: productHygiene,
    category: "Cuidado Personal",
    categoryId: "cuidado",
    description: "Kit completo con shampoo, loción, crema y gel de baño con ingredientes naturales para el cuidado diario.",
    rating: 5,
    stock: 25,
    discount: 17,
    brand: "Pure Baby",
    age: "0-24 meses",
    features: [
      "Ingredientes naturales",
      "Sin lágrimas",
      "Dermatológicamente probado",
      "Aromas suaves"
    ]
  },
  {
    id: "7",
    name: "Toallitas Húmedas Sensitive x80",
    price: 18000,
    image: productWipes,
    category: "Cuidado Personal",
    categoryId: "cuidado",
    description: "Toallitas húmedas para piel sensible con loción humectante, sin alcohol ni fragancias fuertes.",
    rating: 5,
    stock: 50,
    brand: "Soft Care",
    size: "Pack x80",
    age: "0-24 meses",
    features: [
      "Piel sensible",
      "Sin alcohol",
      "Con loción",
      "PH balanceado"
    ]
  },
  {
    id: "8",
    name: "Manta Suave de Fleece Premium",
    price: 48000,
    originalPrice: 60000,
    image: productBlanket,
    category: "Ropa y Textiles",
    categoryId: "ropa",
    description: "Manta ultra suave de fleece premium, perfecta para mantener a tu bebé abrigado y cómodo.",
    rating: 5,
    stock: 12,
    discount: 20,
    brand: "Cozy Dreams",
    size: "100x120cm",
    age: "0-24 meses",
    features: [
      "Fleece premium",
      "Ultra suave",
      "Lavable a máquina",
      "Hipoalergénica"
    ]
  },
  {
    id: "9",
    name: "Set de Mordedores Refrigerantes",
    price: 35000,
    image: productTeethers,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Set de mordedores coloridos con diferentes texturas para aliviar las molestias de la dentición.",
    rating: 5,
    stock: 25,
    isNew: true,
    brand: "Teething Relief",
    age: "3-12 meses",
    features: [
      "Múltiples texturas",
      "Se puede refrigerar",
      "Fácil agarre",
      "Libre de BPA"
    ]
  },
  {
    id: "10",
    name: "Móvil Musical para Cuna",
    price: 89000,
    originalPrice: 110000,
    image: productMobile,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Móvil musical con melodías suaves y figuras en colores pastel para estimular y relajar a tu bebé.",
    rating: 5,
    stock: 10,
    discount: 19,
    brand: "Dream Baby",
    age: "0-12 meses",
    features: [
      "Melodías relajantes",
      "Rotación automática",
      "Colores suaves",
      "Fácil instalación"
    ]
  },
  {
    id: "11",
    name: "Body de Algodón Orgánico",
    price: 28000,
    image: productOnesie,
    category: "Ropa y Textiles",
    categoryId: "ropa",
    description: "Body de algodón orgánico 100% certificado, suave y cómodo para la piel delicada de tu bebé.",
    rating: 5,
    stock: 35,
    brand: "Organic Baby",
    size: "Talla 0-3M",
    age: "0-3 meses",
    features: [
      "Algodón orgánico",
      "Certificado GOTS",
      "Botones de presión",
      "Suave al tacto"
    ]
  },
  {
    id: "12",
    name: "Crema Protectora Antipañalitis",
    price: 32000,
    originalPrice: 40000,
    image: productCream,
    category: "Cuidado Personal",
    categoryId: "cuidado",
    description: "Crema con óxido de zinc que previene y alivia las rozaduras del pañal de forma efectiva.",
    rating: 5,
    stock: 40,
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
    id: "13",
    name: "Bañera Ergonómica con Accesorios",
    price: 125000,
    originalPrice: 150000,
    image: productBathtub,
    category: "Accesorios",
    categoryId: "accesorios",
    description: "Bañera ergonómica con soporte antideslizante y accesorios para un baño seguro y divertido.",
    rating: 5,
    stock: 8,
    discount: 17,
    isNew: true,
    brand: "Bath Baby",
    age: "0-24 meses",
    features: [
      "Diseño ergonómico",
      "Base antideslizante",
      "Con accesorios",
      "Fácil de limpiar"
    ]
  },
  {
    id: "14",
    name: "Silla de Comer Baby Premium",
    price: 189000,
    originalPrice: 220000,
    image: productHighchair,
    category: "Montables",
    categoryId: "montables",
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
    id: "15",
    name: "Caminador Musical Interactivo",
    price: 165000,
    image: productWalker,
    category: "Montables",
    categoryId: "montables",
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
    id: "16",
    name: "Carro Eléctrico Montable Deportivo",
    price: 420000,
    originalPrice: 500000,
    image: productCar,
    category: "Montables",
    categoryId: "montables",
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
