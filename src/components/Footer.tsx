import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-uganda-green text-primary-foreground relative overflow-hidden">
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-2xl font-bold">Poultry Cages Uganda</h3>
              {/* Uganda Flag */}
              <div className="flex rounded overflow-hidden border-2 border-primary-foreground">
                <div className="w-2 h-6 bg-uganda-red"></div>
                <div className="w-2 h-6 bg-uganda-yellow"></div>
                <div className="w-2 h-6 bg-uganda-green"></div>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-3 text-sm leading-relaxed">
              Uganda's leading provider of poultry equipment for both layers and broilers.
            </p>
            <p className="text-xl font-bold italic text-accent">
              "Poultry is Our Wisest Pursuit"
            </p>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 text-accent">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+256 758 422 007</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+256 706 922 476</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@poultrycagesuganda.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Kasangati, Kampala</span>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4 text-accent">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-primary-foreground/10 hover:bg-accent p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 hover:bg-accent p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 hover:bg-accent p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block hover:text-accent transition-colors">Our Services</a>
              <a href="#gallery" className="block hover:text-accent transition-colors">Gallery</a>
              <a href="#contact" className="block hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Poultry Cages Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;