import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Store } from "lucide-react";

interface HeaderProps {
  onNavigate: (view: 'home' | 'vendor' | 'supplier') => void;
  currentView: string;
}

const Header = ({ onNavigate, currentView }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-hero p-2 rounded-lg mr-3">
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Food Fair Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button
              variant={currentView === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
            >
              Home
            </Button>
            <Button
              variant={currentView === 'vendor' ? 'vendor' : 'ghost'}
              onClick={() => onNavigate('vendor')}
              className="flex items-center"
            >
              <Users className="mr-2 h-4 w-4" />
              For Vendors
            </Button>
            <Button
              variant={currentView === 'supplier' ? 'supplier' : 'ghost'}
              onClick={() => onNavigate('supplier')}
              className="flex items-center"
            >
              <Store className="mr-2 h-4 w-4" />
              For Suppliers
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
          <div className="md:hidden py-4 border-t border-gray-200">
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;