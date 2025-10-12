import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Quality Assurance",
      description: "Every installation meets international poultry farming standards"
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Professional Excellence",
      description: "Certified technicians with years of poultry equipment experience"
    },
    {
      icon: <Users className="h-6 w-6 text-uganda-red" />,
      title: "Client Partnership",
      description: "Long-term relationships built on trust and reliable service"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Innovation Focus",
      description: "Latest technology in automated poultry farming systems"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leading Poultry Equipment Provider in Uganda
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Poultry Cages Uganda has been at the forefront of modern poultry farming technology, 
                providing comprehensive solutions for battery cage systems, automatic feeding, and drinking systems throughout Uganda.
              </p>
              <p>
                Our expertise spans complete poultry farm setup for both <span className="font-bold text-primary">layers and broilers</span>, from initial consultation to final installation. 
                We specialize in cage systems, automatic equipment, and all related poultry farming infrastructure.
              </p>
              <p className="text-primary font-semibold italic">
                "Poultry is Our Wisest Pursuit" - This motto drives our commitment to helping farmers achieve maximum productivity and profitability.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Farms Equipped</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Cages Installed</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="flex items-start space-x-4 p-6">
                  {value.icon}
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;