import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Droplets, Recycle, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import feedingImage from "@/assets/feeding-system.jpg";
import drinkingImage from "@/assets/drinking-system.jpg";
import cagesImage from "@/assets/battery-cages.jpg";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "automatic-feeding-systems",
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Automatic Feeding Systems",
      description: "State-of-the-art automated feeding systems for layers and broilers that ensure consistent nutrition delivery.",
      image: feedingImage,
      features: ["Timed feeding schedules", "Feed waste reduction", "Labor cost savings", "Nutritional consistency"]
    },
    {
      id: "automatic-water-systems",
      icon: <Droplets className="h-8 w-8 text-primary" />,
      title: "Automatic Water Systems",
      description: "Clean, reliable water delivery systems with nipple drinkers and pressure regulation.",
      image: drinkingImage,
      features: ["Nipple drinker systems", "Pressure regulation", "Clean water delivery", "Leak prevention"]
    },
    {
      id: "manure-removal-systems",
      icon: <Recycle className="h-8 w-8 text-uganda-red" />,
      title: "Manure Removal Systems",
      description: "Efficient automated manure removal systems that maintain hygiene and reduce manual labor.",
      image: cagesImage,
      features: ["Automated collection", "Hygiene maintenance", "Odor control", "Easy disposal"]
    },
    {
      id: "farm-management-services",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Farm Management Services",
      description: "Complete farm management for absentee owners — from construction to full production. We run your farm while you're away.",
      image: feedingImage,
      features: ["End-to-end farm setup", "Daily operations", "Regular reporting", "Production optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete poultry solutions for layers and broilers - from cage installation to automatic systems. Everything you need for a modern poultry operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" onClick={() => navigate(`/products/${service.id}`)}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8" onClick={() => navigate("/products")}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;