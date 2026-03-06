import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Settings, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "./AuthModal";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products & Services", href: "#services" },
    { name: "Contact Us", href: "#contact" }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-muted border-b border-border z-50 shadow-sm sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-foreground rounded-full p-1.5">
                <img 
                  src="/lovable-uploads/138ee670-3712-4a23-b2f6-7203df0d22a7.png" 
                  alt="Poultry Cages Uganda Logo" 
                  className="h-10 w-10"
                />
              </div>
              <div className="text-2xl font-bold text-primary">
                Poultry<span className="text-accent-foreground">Cages</span> <span className="text-muted-foreground font-normal text-lg">Uganda</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-semibold"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-accent" 
                size="sm"
                onClick={scrollToContact}
              >
                Get Quote
              </Button>
              
              {user ? (
                <>
                  {isAdmin && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate('/admin/settings')}
                    className="border-primary/20 text-primary hover:bg-primary/10"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Admin
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => signOut()}
                    className="border-primary/20 text-foreground hover:bg-primary/10"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAuthModal(true)}
                  className="border-primary/20 text-foreground hover:bg-primary/10"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border bg-background">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-semibold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold w-fit" 
                  size="sm"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
                
                {user ? (
                  <>
                    {isAdmin && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigate('/admin/settings');
                          setIsMenuOpen(false);
                        }}
                        className="border-primary/20 text-foreground hover:bg-primary/10 w-fit"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Admin Settings
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        signOut();
                        setIsMenuOpen(false);
                      }}
                      className="border-primary/20 text-foreground hover:bg-primary/10 w-fit"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="border-primary/20 text-foreground hover:bg-primary/10 w-fit"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};

export default Navigation;
