import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit3, 
  MessageCircle, 
  MapPin, 
  TrendingUp,
  Package,
  Users,
  Clock,
  Star
} from "lucide-react";
import supplierImage from "@/assets/supplier-warehouse.jpg";

const SupplierDashboard = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Onions",
      price: "₹25/kg",
      stock: 500,
      unit: "kg",
      category: "Vegetables",
      orders: 24,
      status: "in-stock"
    },
    {
      id: 2,
      name: "Premium Tomatoes",
      price: "₹30/kg",
      stock: 200,
      unit: "kg",
      category: "Vegetables",
      orders: 18,
      status: "low-stock"
    },
    {
      id: 3,
      name: "Garam Masala",
      price: "₹120/100g",
      stock: 50,
      unit: "packets",
      category: "Spices",
      orders: 12,
      status: "in-stock"
    }
  ];

  const nearbyVendors = [
    {
      name: "Ravi's Dosa Cart",
      type: "South Indian",
      distance: "2.3 km",
      rating: 4.7,
      lastOrder: "2 days ago",
      frequency: "Weekly"
    },
    {
      name: "Mumbai Chaat Corner",
      type: "Street Snacks",
      distance: "1.8 km",
      rating: 4.5,
      lastOrder: "1 week ago",
      frequency: "Bi-weekly"
    }
  ];

  const todayStats = {
    totalOrders: 42,
    revenue: "₹8,450",
    newVendors: 3,
    avgRating: 4.8
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-secondary text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${supplierImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fresh Valley Suppliers Dashboard 📦
          </h1>
          <p className="text-lg text-secondary-foreground/90 mb-6">
            Manage your inventory and connect with local vendors
          </p>
          
          {/* Today's Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold">{todayStats.totalOrders}</div>
              <div className="text-sm text-secondary-foreground/80">Orders Today</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold">{todayStats.revenue}</div>
              <div className="text-sm text-secondary-foreground/80">Revenue</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold">{todayStats.newVendors}</div>
              <div className="text-sm text-secondary-foreground/80">New Vendors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold flex items-center">
                {todayStats.avgRating}
                <Star className="h-4 w-4 ml-1 text-yellow-400" />
              </div>
              <div className="text-sm text-secondary-foreground/80">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Button variant="supplier" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
          <Button variant="outline" className="flex items-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button variant="outline" className="flex items-center">
            <TrendingUp className="mr-2 h-4 w-4" />
            Analytics
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product Listings */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Product Listings</h2>
                <Button variant="supplier" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add New
                </Button>
              </div>
              
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-secondary">{product.price}</div>
                        <Badge 
                          variant={product.status === 'in-stock' ? 'default' : 'destructive'}
                          className="text-xs"
                        >
                          {product.status === 'in-stock' ? 'In Stock' : 'Low Stock'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                      <span>Stock: {product.stock} {product.unit}</span>
                      <span>{product.orders} orders this week</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit3 className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Nearby Vendors */}
          <div>
            <Card className="p-6 shadow-card">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-secondary" />
                Nearby Vendors
              </h2>
              
              <div className="space-y-4">
                {nearbyVendors.map((vendor, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{vendor.name}</h3>
                      <Badge variant="secondary" className="text-xs flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-500" />
                        {vendor.rating}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>{vendor.type}</span>
                        <span>{vendor.distance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last order: {vendor.lastOrder}</span>
                        <span>Orders: {vendor.frequency}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Chat
                      </Button>
                      <Button variant="supplier" size="sm" className="flex-1">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                <Users className="mr-2 h-4 w-4" />
                View All Vendors
              </Button>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 shadow-card mt-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-secondary" />
                Recent Activity
              </h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span>New order from Ravi's Dosa Cart</span>
                  <span className="text-green-600">₹450</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                  <span>Mumbai Chaat Corner rated you</span>
                  <div className="flex items-center text-yellow-600">
                    <Star className="h-3 w-3 mr-1" />
                    4.5
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                  <span>Low stock alert: Tomatoes</span>
                  <Badge variant="destructive" className="text-xs">Alert</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;