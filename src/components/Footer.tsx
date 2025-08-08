import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-2xl font-bold">Poultry Cages Uganda</h3>
              {/* Uganda Flag Element */}
              <div className="flex">
                <div className="w-2 h-6 bg-uganda-red"></div>
                <div className="w-2 h-6 bg-uganda-yellow"></div>
                <div className="w-2 h-6 bg-uganda-green"></div>
              </div>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Uganda's leading provider of professional poultry equipment and automatic systems. 
              We install battery cages, feeding systems, and complete poultry solutions.
            </p>
            <p className="text-lg font-semibold italic text-accent">
              "Poultry is Our Wisest Pursuit"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-background/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-background/80 hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+256 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@poultrycagesuganda.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Kampala, Uganda</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-background/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Poultry Cages Uganda. All rights reserved. | Professional Poultry Equipment Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;