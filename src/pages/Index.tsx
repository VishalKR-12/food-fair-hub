import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VendorDashboard from "@/components/VendorDashboard";
import SupplierDashboard from "@/components/SupplierDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'vendor' | 'supplier'>('home');

  const handleNavigate = (view: 'home' | 'vendor' | 'supplier') => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'vendor':
        return <VendorDashboard />;
      case 'supplier':
        return <SupplierDashboard />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} currentView={currentView} />
      {renderContent()}
    </div>
  );
};

export default Index;
