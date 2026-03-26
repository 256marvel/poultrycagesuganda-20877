import { useParams, useNavigate } from "react-router-dom";
import { getProductById, products } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/products")}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Products
          </Button>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {product.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.shortDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                  onClick={() => window.open("https://wa.me/256758422007?text=Hi, I'm interested in your " + product.title, "_blank")}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("tel:+256758422007")}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              About This Product
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
              {product.detailedDescription}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Key Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Technical Specifications
            </h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {product.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Why Choose Poultry Cages Uganda?
            </h2>
            <p className="text-lg opacity-90 mb-4 leading-relaxed">
              {product.whyChooseUs}
            </p>
            <p className="text-sm opacity-75 italic mb-8">{product.priceNote}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                onClick={() => window.open("https://wa.me/256758422007?text=Hi, I want a quote for " + product.title, "_blank")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get a Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => window.open("tel:+256758422007")}
              >
                <Phone className="h-5 w-5 mr-2" />
                +256 758 422 007
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Explore More Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherProducts.map((p) => (
              <Card
                key={p.id}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => navigate(`/products/${p.id}`)}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">{p.category}</Badge>
                  <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.shortDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => navigate("/products")}>
              View All Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
