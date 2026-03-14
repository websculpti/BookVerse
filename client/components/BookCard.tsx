import { Star, Heart, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  price?: number;
  isWishlisted?: boolean;
  isBookmarked?: boolean;
}

export default function BookCard({
  title,
  author,
  image,
  rating,
  price,
  isWishlisted = false,
  isBookmarked = false,
}: BookCardProps) {
  return (
    <div className="group h-full">
      <div className="relative overflow-hidden rounded-xl bg-muted aspect-[3/4] mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className={cn(
              "p-3 rounded-full transition-colors",
              isWishlisted
                ? "bg-primary text-primary-foreground"
                : "bg-white/90 hover:bg-white text-foreground"
            )}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={cn("w-5 h-5", isWishlisted && "fill-current")} />
          </button>
          <button
            className={cn(
              "p-3 rounded-full transition-colors",
              isBookmarked
                ? "bg-primary text-primary-foreground"
                : "bg-white/90 hover:bg-white text-foreground"
            )}
            title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark
              className={cn("w-5 h-5", isBookmarked && "fill-current")}
            />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-semibold text-foreground">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Book Info */}
      <div>
        <h3 className="font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{author}</p>

        {price !== undefined && (
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              ${price.toFixed(2)}
            </span>
            <button className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
