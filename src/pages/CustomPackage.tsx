
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Mock data for custom package items
const categories = [
  { id: "livingRoom", name: "Living Room" },
  { id: "bedroom", name: "Bedroom" },
  { id: "kitchen", name: "Kitchen" },
  { id: "electronics", name: "Electronics" },
  { id: "bathroom", name: "Bathroom" }
];

// Sample items for a category
const livingRoomItems = [
  {
    id: "sofa-budget",
    name: "3-Seater Sofa",
    tier: "popular",
    price: 599,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Comfortable and durable fabric sofa in neutral colors."
  },
  {
    id: "sofa-mid",
    name: "Sectional Sofa",
    tier: "medium",
    price: 1299,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "L-shaped sectional with extra comfort and modern design."
  },
  {
    id: "sofa-premium",
    name: "Designer Sectional",
    tier: "premium",
    price: 2499,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Premium fabric or leather sectional with superior comfort and style."
  },
  {
    id: "coffee-table-budget",
    name: "Coffee Table",
    tier: "popular",
    price: 129,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Practical coffee table with storage shelf."
  },
  {
    id: "coffee-table-mid",
    name: "Coffee Table Set",
    tier: "medium",
    price: 349,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Modern coffee table with matching side tables."
  },
  {
    id: "coffee-table-premium",
    name: "Designer Coffee Table",
    tier: "premium",
    price: 799,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Statement piece with premium materials and designer appeal."
  }
];

const tierColors = {
  popular: "border-blue-200 bg-blue-50",
  medium: "border-teal-200 bg-teal-50",
  premium: "border-orange-200 bg-orange-50"
};

const tierBadgeColors = {
  popular: "bg-blue-600 text-white",
  medium: "bg-teal text-white",
  premium: "bg-orange text-white"
};

const tierLabels = {
  popular: "Popular",
  medium: "Medium",
  premium: "Premium"
};

const CustomPackage: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedItems, setSelectedItems] = useState<Record<string, typeof livingRoomItems[0]>>({});
  
  // Calculate total price
  const totalPrice = Object.values(selectedItems).reduce((sum, item) => sum + item.price, 0);
  
  // Progress calculation
  const progress = ((step + 1) / (categories.length + 1)) * 100;

  const handleSelectItem = (item: typeof livingRoomItems[0]) => {
    setSelectedItems(prev => {
      // Check if we already have an item of this type (e.g., a sofa)
      const itemType = item.id.split('-').slice(0, -1).join('-'); // Get "sofa" from "sofa-budget"
      
      // Create a new object to avoid direct state mutation
      const newSelectedItems = { ...prev };
      
      // Remove any existing items of the same type
      Object.keys(newSelectedItems).forEach(key => {
        if (key.startsWith(itemType)) {
          delete newSelectedItems[key];
        }
      });
      
      // Add the new selected item
      newSelectedItems[item.id] = item;
      
      return newSelectedItems;
    });
  };

  const handleNext = () => {
    if (step < categories.length) {
      setStep(step + 1);
      if (step < categories.length - 1) {
        setSelectedCategory(categories[step + 1].id);
      }
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setSelectedCategory(categories[step - 1].id);
    }
  };

  const renderCategoryItems = () => {
    // In a real app, we'd fetch items based on the selected category
    // For this prototype, we'll just use livingRoomItems for all categories
    const items = livingRoomItems;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {items.map((item) => {
          const isSelected = selectedItems[item.id] !== undefined;
          
          return (
            <Card
              key={item.id}
              className={`cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? `ring-2 ring-teal shadow-md ${tierColors[item.tier as keyof typeof tierColors]}` 
                  : 'hover:shadow-md'
              }`}
              onClick={() => handleSelectItem(item)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${tierBadgeColors[item.tier as keyof typeof tierBadgeColors]}`}>
                    {tierLabels[item.tier as keyof typeof tierLabels]}
                  </span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${item.price}</span>
                  {isSelected && (
                    <div className="bg-teal text-white rounded-full p-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Your Custom Package</CardTitle>
            <CardDescription>Review your selections before checkout</CardDescription>
          </CardHeader>
          <CardContent>
            {Object.keys(selectedItems).length === 0 ? (
              <p className="text-gray-500 text-center py-4">No items selected yet.</p>
            ) : (
              <>
                {categories.map((category) => (
                  <div key={category.id} className="mb-6">
                    <h3 className="font-medium text-lg mb-3">{category.name}</h3>
                    <div className="space-y-3">
                      {Object.values(selectedItems)
                        .filter(item => {
                          // In a real app, this would filter by actual category
                          // For this prototype, we'll just show a few items in each category
                          if (category.id === "livingRoom") {
                            return item.id.includes("sofa") || item.id.includes("coffee");
                          }
                          return false;
                        })
                        .map(item => (
                          <div key={item.id} className="flex justify-between items-center py-2 border-b">
                            <div className="flex items-center">
                              <span className={`w-3 h-3 rounded-full mr-2 ${
                                item.tier === "popular" ? "bg-blue-600" :
                                item.tier === "medium" ? "bg-teal" : "bg-orange"
                              }`}></span>
                              <span>{item.name}</span>
                            </div>
                            <span className="font-medium">${item.price}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total Price:</span>
                    <span className="font-bold text-2xl">${totalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    or from ${Math.round(totalPrice / 24)}/month with financing
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-8 flex justify-between">
          <Button onClick={handleBack} variant="outline">
            Back to Selection
          </Button>
          <Button className="bg-teal hover:bg-teal-dark text-white">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Build Your Custom Package</h1>
          <p className="text-lg text-gray-600">
            Select individual items from each category to create your perfect home package.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-10">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Step {step + 1} of {categories.length + 1}</span>
              <span className="text-sm font-medium">{step < categories.length ? categories[step].name : "Summary"}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          {step < categories.length ? (
            <>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="grid grid-cols-5">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      onClick={() => setStep(categories.findIndex(c => c.id === category.id))}
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    {renderCategoryItems()}
                  </TabsContent>
                ))}
              </Tabs>
              
              <div className="mt-10 flex justify-between">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  disabled={step === 0}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-teal hover:bg-teal-dark text-white"
                >
                  {step === categories.length - 1 ? "Review Selection" : "Next Category"}
                </Button>
              </div>
            </>
          ) : (
            renderSummary()
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CustomPackage;
