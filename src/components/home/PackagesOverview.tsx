
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: "popular",
    title: "Popular Package",
    description: "Perfect for budget-conscious homeowners",
    price: "$4,999",
    monthly: "$208/mo",
    features: ["Living Room Set", "Bedroom Set", "Basic Kitchen Appliances", "32\" TV", "Standard Fridge"],
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
    features: ["Enhanced Living Room Set", "Complete Bedroom Set", "Full Kitchen Appliances", "50\" Smart TV", "Side-by-side Fridge"],
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
    features: ["Luxury Living Room Collection", "Designer Bedroom Suite", "Premium Kitchen Suite", "65\" OLED TV", "Smart French Door Fridge"],
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    color: "bg-orange-50",
    borderColor: "border-orange-200",
    buttonColor: "bg-orange hover:bg-orange-dark",
  }
];

const PackagesOverview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Choose Your Perfect Package</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our curated packages designed to meet different budgets and preferences,
            or customize your own.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.featured ? 'ring-2 ring-teal scale-105 md:scale-[1.02]' : ''
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
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button asChild className={`w-full ${pkg.buttonColor} text-white`}>
                  <Link to={`/packages/${pkg.id}`}>View Package</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/packages/${pkg.id}/customize`}>Customize</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/10 px-6 py-2 text-lg">
            <Link to="/packages">View All Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesOverview;
