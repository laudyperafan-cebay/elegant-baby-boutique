import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import categoryDiapers from "@/assets/category-diapers.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";
import categoryCare from "@/assets/category-care.jpg";
import categoryClothing from "@/assets/category-clothing.jpg";

const categories = [
  {
    id: "panales",
    name: "Pañales",
    description: "Suavidad y protección",
    image: categoryDiapers,
    color: "baby-pink",
  },
  {
    id: "accesorios",
    name: "Accesorios",
    description: "Todo lo que necesitas",
    image: categoryAccessories,
    color: "baby-lavender",
  },
  {
    id: "cuidado",
    name: "Cuidado Personal",
    description: "Cuidado delicado",
    image: categoryCare,
    color: "baby-blue",
  },
  {
    id: "ropa",
    name: "Ropa y Textiles",
    description: "Comodidad y estilo",
    image: categoryClothing,
    color: "cream",
  },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
          Explora Nuestras Categorías
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Encuentra todo lo que tu bebé necesita organizado por categorías
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            to={`/catalogo?categoria=${category.id}`}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="overflow-hidden border-2 border-border hover:border-primary transition-smooth shadow-soft hover:shadow-elegant group-hover:scale-105 duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-display text-xl mb-1">{category.name}</h3>
                    <p className="text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
