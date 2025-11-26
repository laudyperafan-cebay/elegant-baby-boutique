import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  stock?: number;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating = 5,
  stock = 10,
  isNew = false,
  discount,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-2 border-border hover:border-primary transition-smooth shadow-soft hover:shadow-elegant h-full flex flex-col">
      <Link to={`/producto/${id}`}>
        <CardContent className="p-0">
          <div className="relative overflow-hidden bg-muted/30 h-64">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {isNew && (
                <Badge className="bg-accent text-accent-foreground shadow-soft">
                  Nuevo
                </Badge>
              )}
              {discount && (
                <Badge className="bg-primary text-primary-foreground shadow-soft">
                  -{discount}%
                </Badge>
              )}
            </div>
            {stock < 5 && stock > 0 && (
              <div className="absolute top-3 right-3">
                <Badge variant="destructive" className="shadow-soft">
                  Últimas {stock} unidades
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="flex flex-col gap-3 p-4 flex-1">
        <div className="w-full flex-1">
          <Link to={`/producto/${id}`}>
            <p className="text-sm text-muted-foreground mb-1">{category}</p>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-smooth line-clamp-2 mb-2">
              {name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "fill-soft-gold text-soft-gold"
                    : "text-muted stroke-muted"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">({rating}.0)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-primary">
              ${price.toLocaleString("es-CO")}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toLocaleString("es-CO")}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full rounded-full shadow-soft hover:shadow-medium transition-smooth group/btn"
          disabled={stock === 0}
        >
          {stock === 0 ? (
            "Agotado"
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-smooth" />
              Agregar al Carrito
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
