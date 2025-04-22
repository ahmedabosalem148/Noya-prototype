
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Consultation: React.FC = () => {
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [countdown, setCountdown] = useState(45);
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    propertyType: "",
    size: "",
    budget: "",
    location: "",
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsWaiting(true);
      
      // Start countdown
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            // Simulate connection with designer
            toast({
              title: "Designer Connected!",
              description: "Our interior designer Alexandra is ready to assist you.",
              duration: 5000
            });
            setFormStep(2);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      setFormStep(1);
    }, 1500);
  };
  
  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-1" 
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone"
                className="mt-1"
                required
              />
            </div>
          </div>
          
          <div>
            <Label>Property Type</Label>
            <RadioGroup 
              value={formData.propertyType} 
              onValueChange={(value) => handleRadioChange("propertyType", value)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="apartment" id="apartment" />
                <Label htmlFor="apartment">Apartment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="house" id="house" />
                <Label htmlFor="house">House</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="studio" id="studio" />
                <Label htmlFor="studio">Studio</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="size">Apartment Size (sqft)</Label>
            <Input
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="e.g. 1000"
              className="mt-1"
              required
            />
          </div>
          
          <div>
            <Label>Budget Range</Label>
            <RadioGroup 
              value={formData.budget} 
              onValueChange={(value) => handleRadioChange("budget", value)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5000-10000" id="budget1" />
                <Label htmlFor="budget1">$5,000 - $10,000</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="10000-20000" id="budget2" />
                <Label htmlFor="budget2">$10,000 - $20,000</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="20000+" id="budget3" />
                <Label htmlFor="budget3">$20,000+</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State"
              className="mt-1"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="message">Additional Details</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project and specific requirements"
              className="mt-1 h-32"
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-teal hover:bg-teal-dark text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request Interior Designer Visit"}
        </Button>
      </form>
    );
  };
  
  const renderWaitingScreen = () => {
    return (
      <div className="text-center py-12">
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 rounded-full border-4 border-teal border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-semibold text-teal">
              {countdown}
            </span>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4">Connecting You With An Interior Designer</h3>
        <p className="text-gray-600 mb-8">
          We're finding the best available designer in your area. 
          Please wait while we connect you...
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <span className="w-2 h-2 bg-teal rounded-full animate-pulse"></span>
          <span>Designer is being notified</span>
        </div>
      </div>
    );
  };
  
  const renderChatScreen = () => {
    return (
      <div className="h-[500px] flex flex-col">
        <div className="border-b pb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-teal mr-4">
              <span className="text-xl font-semibold">A</span>
            </div>
            <div>
              <h3 className="font-semibold">Alexandra Peterson</h3>
              <p className="text-sm text-gray-500">Interior Design Specialist</p>
            </div>
            <div className="ml-auto flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-500">Online</span>
            </div>
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal mr-2 flex-shrink-0">
              <span className="text-sm font-semibold">A</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p>Hi there! I'm Alexandra, your interior design specialist. I've reviewed your consultation request for your {formData.propertyType || 'property'}.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal mr-2 flex-shrink-0">
              <span className="text-sm font-semibold">A</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p>Based on your budget range of {formData.budget || '$10,000-$20,000'} and property size, I think we can create something really beautiful for you. When would be a good time for an in-person visit?</p>
            </div>
          </div>
          
          <div className="flex items-start justify-end">
            <div className="bg-teal text-white rounded-lg p-3 max-w-[80%]">
              <p>Hi Alexandra! Thanks for reaching out so quickly. I'm flexible for the next couple of weeks. What days do you have available?</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal mr-2 flex-shrink-0">
              <span className="text-sm font-semibold">A</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] animate-pulse-slow">
              <p>I have openings this Thursday at 10am or Friday at 2pm. Would either of those work for you?</p>
            </div>
          </div>
        </div>
        
        <div className="border-t p-4">
          <div className="flex items-center">
            <Input placeholder="Type your message..." className="flex-grow" />
            <Button className="ml-2 bg-teal hover:bg-teal-dark text-white">
              Send
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Interior Consultation</h1>
            <p className="text-lg text-gray-600">
              Request a personalized interior consultation for your home, whether it's unfinished or needs a complete redesign.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {formStep === 0 && "Request Consultation"}
                {formStep === 1 && "Connecting..."}
                {formStep === 2 && "Chat with Your Designer"}
              </CardTitle>
              <CardDescription>
                {formStep === 0 && "Fill out the form below to request a visit from an interior designer"}
                {formStep === 1 && "Please wait while we connect you with an available designer"}
                {formStep === 2 && "Discuss your project details and schedule a visit"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formStep === 0 && renderForm()}
              {formStep === 1 && renderWaitingScreen()}
              {formStep === 2 && renderChatScreen()}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Consultation;
