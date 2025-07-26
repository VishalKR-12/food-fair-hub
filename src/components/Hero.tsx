import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Store, Star, TrendingUp, Shield, Clock, Zap, Heart } from "lucide-react";
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="glass glass-dark rounded-lg p-6 border border-white/20 hover-scale">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-400 animate-float" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-white/80">Trust Score</div>
            </div>
            
            <div className="glass glass-dark rounded-lg p-6 border border-white/20 hover-scale">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-primary-light animate-float" style={{ animationDelay: '1s' }} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">30%</div>
              <div className="text-white/80">Cost Savings</div>
            </div>
            
            <div className="glass glass-dark rounded-lg p-6 border border-white/20 hover-scale">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-secondary-light animate-float" style={{ animationDelay: '2s' }} />
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

const FeaturesSection = ({ onNavigate }: HeroProps) => {
  const features = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Verified suppliers and vendors with transparent ratings and reviews",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Live price tracking, instant notifications, and delivery updates",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Smart Recommendations",
      description: "AI-powered suggestions for bulk deals and price optimization",
      color: "text-yellow-500"
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Reduce food waste by donating near-expiry items to local charities",
      color: "text-red-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Food Fair Hub?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering street food vendors with technology, trust, and community support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 glass glass-dark border-0 shadow-card hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`mb-4 ${feature.color}`}>
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass glass-dark rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of vendors and suppliers building stronger food communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="vendor"
                size="lg"
                onClick={() => onNavigate('vendor')}
                className="hover-scale"
              >
                <Users className="mr-2 h-5 w-5" />
                Start as Vendor
              </Button>
              <Button
                variant="supplier"
                size="lg"
                onClick={() => onNavigate('supplier')}
                className="hover-scale"
              >
                <Store className="mr-2 h-5 w-5" />
                Start as Supplier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedHero = ({ onNavigate }: HeroProps) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <FeaturesSection onNavigate={onNavigate} />
    </>
  );
};

export default EnhancedHero;