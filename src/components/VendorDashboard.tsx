import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Star, 
  MessageCircle, 
  Truck, 
  Bell, 
  TrendingDown,
  Package,
  Filter,
  MapPin
} from "lucide-react";
import vendorImage from "@/assets/vendor-scene.jpg";

const VendorDashboard = () => {
  const suppliers = [
    {
      id: 1,
      name: "Fresh Valley Suppliers",
      rating: 4.8,
      location: "2.3 km away",
      specialty: "Vegetables & Fruits",
      priceRange: "₹₹",
      trustScore: 95,
      deliveryTime: "30-45 min",
      products: [
        { name: "Onions", price: "₹25/kg", discount: "10% off" },
        { name: "Tomatoes", price: "₹30/kg", discount: null },
        { name: "Potatoes", price: "₹20/kg", discount: "15% off" }
      ]
    },
    {
      id: 2,
      name: "Spice Kingdom",
      rating: 4.9,
      location: "1.8 km away",
      specialty: "Spices & Masala",
      priceRange: "₹₹₹",
      trustScore: 98,
      deliveryTime: "20-30 min",
      products: [
        { name: "Garam Masala", price: "₹120/100g", discount: null },
        { name: "Turmeric", price: "₹80/100g", discount: "5% off" },
        { name: "Red Chili", price: "₹150/100g", discount: null }
      ]
    }
  ];

  const recommendations = [
    "Bulk deal: 5kg onions + 3kg tomatoes for ₹140",
    "Price alert: Potatoes dropped by ₹5/kg",
    "New supplier: Premium Oil Co. near you"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${vendorImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome back, Ravi! 👋
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Find the best suppliers for your Dosa Cart
          </p>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="secondary" className="flex flex-col p-4 h-auto">
              <Search className="h-6 w-6 mb-2" />
              <span className="text-sm">Find Suppliers</span>
            </Button>
            <Button variant="secondary" className="flex flex-col p-4 h-auto">
              <MessageCircle className="h-6 w-6 mb-2" />
              <span className="text-sm">Messages</span>
            </Button>
            <Button variant="secondary" className="flex flex-col p-4 h-auto">
              <Truck className="h-6 w-6 mb-2" />
              <span className="text-sm">Track Orders</span>
            </Button>
            <Button variant="secondary" className="flex flex-col p-4 h-auto">
              <Bell className="h-6 w-6 mb-2" />
              <span className="text-sm">Alerts</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Smart Recommendations */}
        <Card className="mb-8 p-6 bg-gradient-card backdrop-blur-sm border-0 shadow-card">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingDown className="mr-2 h-5 w-5 text-primary" />
            Smart Recommendations
          </h2>
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                <span className="text-sm">{rec}</span>
                <Button size="sm" variant="outline">View</Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Search & Filters */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search suppliers or products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Suppliers List */}
        <div className="grid gap-6">
          {suppliers.map((supplier) => (
            <Card key={supplier.id} className="p-6 shadow-card hover:shadow-floating transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{supplier.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {supplier.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    {supplier.rating}
                  </Badge>
                  <Badge variant={supplier.trustScore > 95 ? "default" : "secondary"}>
                    Trust: {supplier.trustScore}%
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {supplier.products.map((product, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{product.name}</span>
                      <span className="text-primary font-semibold">{product.price}</span>
                    </div>
                    {product.discount && (
                      <Badge variant="destructive" className="mt-1 text-xs">
                        {product.discount}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600 mb-3 sm:mb-0">
                  <span className="mr-4">Specialty: {supplier.specialty}</span>
                  <span>Delivery: {supplier.deliveryTime}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                  <Button variant="vendor" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;