import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Battery Cage System Installation",
      description: "Complete automated poultry cage system with feeding and drinking lines",
      image: "/lovable-uploads/e14f5978-16ad-4104-8f30-4eb0f109e3e7.png",
      category: "Cage Systems"
    },
    {
      id: 2,
      title: "Modern Layer Farm Setup",
      description: "State-of-the-art egg collection system with automated feeding",
      image: "/lovable-uploads/4b7321c0-b4f4-4e57-801e-7ec85d3d00b9.png",
      category: "Layer Systems"
    },
    {
      id: 3,
      title: "Layer Chickens in Battery Cages",
      description: "Healthy layer chickens producing quality eggs in our premium cage systems",
      image: "/lovable-uploads/1a8b9dd7-35a9-4b6f-be12-b51780ab8345.png",
      category: "Live Production"
    },
    {
      id: 4,
      title: "Automatic Drinking System",
      description: "Professional installation of automatic water supply systems",
      image: "/lovable-uploads/11a76f8d-3237-402d-a191-ff6f4a09d3a9.png",
      category: "Water Systems"
    },
    {
      id: 5,
      title: "Cage Installation in Progress",
      description: "Professional team installing multi-tier cage systems",
      image: "/lovable-uploads/3d12d93a-f377-4796-93ea-25f893685dcb.png",
      category: "Installation"
    },
    {
      id: 6,
      title: "Automated Feeding System",
      description: "Efficient automatic feeding system with water lines",
      image: "/lovable-uploads/12bfd802-f447-4059-b335-5730bf4b4b53.png",
      category: "Feeding Systems"
    },
    {
      id: 7,
      title: "Complete Farm Setup",
      description: "Fully equipped poultry farm with all automated systems",
      image: "/lovable-uploads/b2cd8058-f9de-4fb1-8aa1-98d973a9aa24.png",
      category: "Complete Systems"
    },
    {
      id: 8,
      title: "Layer Farm in Operation",
      description: "Active layer farm showing our complete system in operation",
      image: "/lovable-uploads/d8e0f957-6a1b-4376-be1a-88866f3678ca.png",
      category: "Operational Systems"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Project Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our professional installations and successful projects across Uganda. 
            From small-scale farms to large commercial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-semibold text-sm line-clamp-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to start your own poultry project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get Your Quote
            </a>
            <a
              href="tel:+256758422007"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Call Now: +256 758 422 007
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;