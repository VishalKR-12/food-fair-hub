import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Store, Moon, Sun } from "lucide-react";

interface HeaderProps {
  onNavigate: (view: 'home' | 'vendor' | 'supplier') => void;
  currentView: string;
}

const Header = ({ onNavigate, currentView }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="glass glass-dark sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-hero p-2 rounded-lg mr-3 animate-float">
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Food Fair Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button
              variant={currentView === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
              className="hover-scale"
            >
              Home
            </Button>
            <Button
              variant={currentView === 'vendor' ? 'vendor' : 'ghost'}
              onClick={() => onNavigate('vendor')}
              className="flex items-center hover-scale"
            >
              <Users className="mr-2 h-4 w-4" />
              For Vendors
            </Button>
            <Button
              variant={currentView === 'supplier' ? 'supplier' : 'ghost'}
              onClick={() => onNavigate('supplier')}
              className="flex items-center hover-scale"
            >
              <Store className="mr-2 h-4 w-4" />
              For Suppliers
            </Button>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover-scale"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 glass">
            <div className="flex flex-col space-y-2">
              <Button
                variant={currentView === 'home' ? 'default' : 'ghost'}
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start"
              >
                Home
              </Button>
              <Button
                variant={currentView === 'vendor' ? 'vendor' : 'ghost'}
                onClick={() => {
                  onNavigate('vendor');
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start"
              >
                <Users className="mr-2 h-4 w-4" />
                For Vendors
              </Button>
              <Button
                variant={currentView === 'supplier' ? 'supplier' : 'ghost'}
                onClick={() => {
                  onNavigate('supplier');
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start"
              >
                <Store className="mr-2 h-4 w-4" />
                For Suppliers
              </Button>
              
              <Button
                variant="ghost"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full justify-start"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;