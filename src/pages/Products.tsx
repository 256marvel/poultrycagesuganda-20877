import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Products = () => {
  const navigate = useNavigate();
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Products & Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete poultry solutions for layers and broilers — from cage installation to farm management. Everything you need for a modern, profitable poultry operation in Uganda.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {categories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                {category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === category).map(product => (
                  <Card
                    key={product.id}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-foreground mb-2">{product.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.shortDescription}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.features.slice(0, 3).map((f, i) => (
                          <Badge key={i} variant="secondary" className="text-xs font-normal">{f}</Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
