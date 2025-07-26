import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Store, Star, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ingredients.jpg";

interface HeroProps {
  onNavigate: (view: 'vendor' | 'supplier') => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Connecting Street Food
            <span className="text-secondary-light"> Vendors</span> & 
            <span className="text-primary-light"> Suppliers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Build trust, compare prices, and grow your food business with our transparent marketplace
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="vendor"
              size="xl"
              onClick={() => onNavigate('vendor')}
              className="w-full sm:w-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              I'm a Vendor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="supplier"
              size="xl"
              onClick={() => onNavigate('supplier')}
              className="w-full sm:w-auto"
            >
              <Store className="mr-2 h-5 w-5" />
              I'm a Supplier
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-white/80">Trust Score</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-primary-light" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">30%</div>
              <div className="text-white/80">Cost Savings</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-secondary-light" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">1000+</div>
              <div className="text-white/80">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;