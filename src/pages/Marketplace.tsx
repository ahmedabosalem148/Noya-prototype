
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

// Mock data for contractors
const contractors = [
  {
    id: 1,
    name: "John Carpenter",
    profession: "Carpenter",
    rating: 4.9,
    reviews: 124,
    price: 45,
    distance: 2.5,
    availability: "Available Today",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Plumber",
    profession: "Plumber",
    rating: 4.7,
    reviews: 98,
    price: 55,
    distance: 3.8,
    availability: "Available Tomorrow",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Mike Electric",
    profession: "Electrician",
    rating: 4.8,
    reviews: 156,
    price: 60,
    distance: 1.2,
    availability: "Available Today",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    id: 4,
    name: "Lisa Painter",
    profession: "Painter",
    rating: 4.6,
    reviews: 87,
    price: 40,
    distance: 5.3,
    availability: "Available in 2 days",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  }
];

// Mock data for material suppliers
const materialRequests = [
  {
    id: 1,
    title: "Kitchen Countertop",
    material: "Granite",
    quantity: "30 sq ft",
    deadline: "Nov 30, 2025",
    description: "Black or dark gray granite countertop for kitchen remodel."
  },
  {
    id: 2,
    title: "Hardwood Flooring",
    material: "Oak",
    quantity: "500 sq ft",
    deadline: "Dec 15, 2025",
    description: "Medium tone oak hardwood flooring for living room and hallway."
  },
  {
    id: 3,
    title: "Bathroom Tiles",
    material: "Ceramic",
    quantity: "100 sq ft",
    deadline: "Jan 5, 2026",
    description: "White subway tiles for bathroom walls."
  }
];

const supplierOffers = [
  {
    requestId: 1,
    suppliers: [
      { id: 101, name: "Stone Masters", price: 1800, rating: 4.8, delivery: "3-5 days" },
      { id: 102, name: "Granite World", price: 1650, rating: 4.6, delivery: "7-10 days", bestPrice: true },
      { id: 103, name: "Premium Surfaces", price: 2200, rating: 4.9, delivery: "2-3 days" }
    ]
  },
  {
    requestId: 2,
    suppliers: [
      { id: 201, name: "Flooring Depot", price: 3500, rating: 4.7, delivery: "5-7 days", bestPrice: true },
      { id: 202, name: "Hardwood Experts", price: 3800, rating: 4.9, delivery: "3-5 days" },
      { id: 203, name: "Floor Warehouse", price: 3650, rating: 4.5, delivery: "7-10 days" }
    ]
  },
  {
    requestId: 3,
    suppliers: [
      { id: 301, name: "Tile Shop", price: 450, rating: 4.6, delivery: "3-5 days" },
      { id: 302, name: "Ceramic World", price: 420, rating: 4.7, delivery: "4-7 days", bestPrice: true },
      { id: 303, name: "Bath & Tile", price: 480, rating: 4.8, delivery: "2-3 days" }
    ]
  }
];

const Marketplace: React.FC = () => {
  const [selectedContractor, setSelectedContractor] = useState<number | null>(null);
  const [newRequest, setNewRequest] = useState({
    title: "",
    material: "",
    quantity: "",
    description: "",
    deadline: ""
  });
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  
  const handleSelectContractor = (id: number) => {
    setSelectedContractor(id);
    toast({
      title: "Contractor Selected",
      description: "Request sent! The contractor will contact you shortly.",
      duration: 5000
    });
  };
  
  const handleSupplierSelect = (supplierId: number, requestId: number) => {
    toast({
      title: "Supplier Selected",
      description: "You've accepted this supplier's offer. They will contact you shortly.",
      duration: 5000
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewRequest(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Material Request Submitted",
      description: "Your request has been sent to suppliers. Check back soon for offers.",
      duration: 5000
    });
    setShowForm(false);
    setNewRequest({
      title: "",
      material: "",
      quantity: "",
      description: "",
      deadline: ""
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Marketplace</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find skilled professionals and material suppliers for your home setup needs.
          </p>
        </div>
        
        <Tabs defaultValue="contractors" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="contractors">Contractors</TabsTrigger>
            <TabsTrigger value="materials">Material Suppliers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="contractors" className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Available Contractors</h2>
              <div className="flex gap-4">
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Sort By</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contractors.map((contractor) => (
                <Card key={contractor.id} className="overflow-hidden">
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={contractor.image}
                        alt={contractor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-2/3">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle className="text-lg">{contractor.name}</CardTitle>
                          <Badge variant="secondary">{contractor.availability}</Badge>
                        </div>
                        <CardDescription>{contractor.profession}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Rating</p>
                            <p className="font-medium flex items-center">
                              {contractor.rating}
                              <svg className="w-4 h-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-gray-500 ml-1">({contractor.reviews})</span>
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Price</p>
                            <p className="font-medium">${contractor.price}/hr</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Distance</p>
                            <p className="font-medium">{contractor.distance} miles</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full bg-teal hover:bg-teal-dark text-white"
                          onClick={() => handleSelectContractor(contractor.id)}
                          disabled={selectedContractor === contractor.id}
                        >
                          {selectedContractor === contractor.id ? "Request Sent" : "Request Service"}
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="materials" className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Material Requests</h2>
              <Button 
                className="bg-teal hover:bg-teal-dark text-white"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? "Cancel" : "New Request"}
              </Button>
            </div>
            
            {showForm && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>New Material Request</CardTitle>
                  <CardDescription>Submit details for material you need</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitRequest} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Request Title</Label>
                        <Input
                          id="title"
                          name="title"
                          value={newRequest.title}
                          onChange={handleInputChange}
                          placeholder="e.g. Kitchen Countertop"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="material">Material Type</Label>
                        <Input
                          id="material"
                          name="material"
                          value={newRequest.material}
                          onChange={handleInputChange}
                          placeholder="e.g. Granite, Wood, Ceramic"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="quantity">Quantity Needed</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          value={newRequest.quantity}
                          onChange={handleInputChange}
                          placeholder="e.g. 30 sq ft, 100 pieces"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="deadline">Needed By</Label>
                        <Input
                          id="deadline"
                          name="deadline"
                          value={newRequest.deadline}
                          onChange={handleInputChange}
                          placeholder="e.g. Dec 15, 2025"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        name="description"
                        value={newRequest.description}
                        onChange={handleInputChange}
                        placeholder="Provide details about the material you need"
                        required
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="bg-teal hover:bg-teal-dark text-white">
                        Submit Request
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
            
            <div className="space-y-8">
              {materialRequests.map((request) => {
                const supplierOffer = supplierOffers.find(offer => offer.requestId === request.id);
                
                return (
                  <Card key={request.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{request.title}</CardTitle>
                          <CardDescription>Material: {request.material} • Quantity: {request.quantity}</CardDescription>
                        </div>
                        <Badge variant="outline">{request.deadline}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{request.description}</p>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Supplier Offers</h4>
                        
                        {supplierOffer ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {supplierOffer.suppliers.map((supplier) => (
                              <Card key={supplier.id} className={supplier.bestPrice ? "border-2 border-teal" : ""}>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-lg">{supplier.name}</CardTitle>
                                  {supplier.bestPrice && (
                                    <Badge className="bg-teal text-white">Best Price</Badge>
                                  )}
                                </CardHeader>
                                <CardContent className="pb-2">
                                  <div className="space-y-2">
                                    <div>
                                      <p className="text-gray-500 text-sm">Price</p>
                                      <p className="font-semibold">${supplier.price}</p>
                                    </div>
                                    <div className="flex justify-between">
                                      <div>
                                        <p className="text-gray-500 text-sm">Rating</p>
                                        <p className="flex items-center">
                                          {supplier.rating}
                                          <svg className="w-4 h-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                          </svg>
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-gray-500 text-sm">Delivery</p>
                                        <p>{supplier.delivery}</p>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                                <CardFooter className="pt-0">
                                  <Button 
                                    className={`w-full ${supplier.bestPrice ? "bg-teal hover:bg-teal-dark" : ""} text-white`}
                                    onClick={() => handleSupplierSelect(supplier.id, request.id)}
                                  >
                                    Accept Offer
                                  </Button>
                                </CardFooter>
                              </Card>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-center py-4">
                            Awaiting supplier offers...
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Marketplace;
