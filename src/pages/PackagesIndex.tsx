
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const packages = [
  {
    id: "popular",
    title: "Popular Package",
    description: "Perfect for budget-conscious homeowners",
    price: "$4,999",
    monthly: "$208/mo",
    features: [
      "Living Room: Sofa, Coffee Table, TV Stand, 2 Side Tables, Rug",
      "Bedroom: Queen Bed Frame, Mattress, 2 Nightstands, Dresser",
      "Kitchen: Basic Appliance Set (Fridge, Stove, Microwave)",
      "Electronics: 32\" TV, Basic Sound System",
      "Free Delivery and Basic Setup"
    ],
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: "medium",
    title: "Medium Package",
    description: "Great quality for comfortable living",
    price: "$8,999",
    monthly: "$375/mo",
    features: [
      "Living Room: Sectional Sofa, Coffee Table, TV Console, 2 Side Tables, Area Rug, Accent Chair",
      "Bedroom: Queen Bed Frame, Premium Mattress, 2 Nightstands, Dresser, Bedding Set",
      "Kitchen: Full Appliance Suite (Side-by-side Fridge, Stove, Microwave, Dishwasher)",
      "Electronics: 50\" Smart TV, Soundbar System",
      "Free Delivery, Setup, and 1-year Warranty"
    ],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    color: "bg-teal-50",
    borderColor: "border-teal-200",
    buttonColor: "bg-teal hover:bg-teal-dark",
    featured: true,
  },
  {
    id: "premium",
    title: "Premium Package",
    description: "Luxury furnishings for discerning tastes",
    price: "$14,999",
    monthly: "$625/mo",
    features: [
      "Living Room: Designer Sectional, Coffee Table, Media Console, Side Tables, Premium Rug, 2 Accent Chairs, Decorative Items",
      "Bedroom: King Bed Frame, Luxury Mattress, 2 Designer Nightstands, Large Dresser, Premium Bedding Set",
      "Kitchen: Premium Appliance Package (French Door Fridge, Double Oven, Gas Cooktop, Dishwasher, Wine Cooler)",
      "Electronics: 65\" OLED TV, Premium Sound System, Smart Home Hub",
      "Free Delivery, White Glove Setup, 3-year Warranty, Interior Design Consultation"
    ],
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    color: "bg-orange-50",
    borderColor: "border-orange-200",
    buttonColor: "bg-orange hover:bg-orange-dark",
  }
];

const PackagesIndex: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Setup Packages</h1>
            <p className="text-lg text-gray-600">
              Choose the perfect package to transform your empty space into a fully furnished home.
              Our packages include everything you need to get started.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all">All Packages</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="mt-6">
              <div className="max-w-md mx-auto">
                <PackageCard pkg={packages[0]} expanded />
              </div>
            </TabsContent>
            
            <TabsContent value="medium" className="mt-6">
              <div className="max-w-md mx-auto">
                <PackageCard pkg={packages[1]} expanded />
              </div>
            </TabsContent>
            
            <TabsContent value="premium" className="mt-6">
              <div className="max-w-md mx-auto">
                <PackageCard pkg={packages[2]} expanded />
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Looking for something more personalized? Build your own custom package.
            </p>
            <Button asChild className="bg-teal hover:bg-teal-dark text-white px-8">
              <Link to="/custom">Build Custom Package</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface PackageCardProps {
  pkg: typeof packages[0];
  expanded?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, expanded = false }) => {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
        pkg.featured ? 'ring-2 ring-teal' : ''
      }`}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader className={`${pkg.color}`}>
        {pkg.featured && (
          <span className="bg-orange text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full inline-block mb-2">
            Most Popular
          </span>
        )}
        <CardTitle>{pkg.title}</CardTitle>
        <CardDescription>{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
          <span className="ml-2 text-gray-500">or {pkg.monthly}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex">
              <svg className="w-5 h-5 text-teal mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button asChild className={`w-full ${pkg.buttonColor} text-white`}>
          <Link to={`/packages/${pkg.id}`}>Select Package</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link to={`/packages/${pkg.id}/customize`}>Customize</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackagesIndex;
