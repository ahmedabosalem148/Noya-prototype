
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-teal-light/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Transform Your <span className="text-teal">Home</span> From Empty to Perfect
            </h1>
            <p className="text-lg text-gray-600">
              Complete home setup solutions for newlyweds, new homeowners, and renovators. 
              Get everything you need in one place - furniture, electronics, and professional services.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-teal hover:bg-teal-dark text-white px-6 py-6 rounded-md text-lg">
                <Link to="/packages">Explore Packages</Link>
              </Button>
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/10 px-6 py-6 rounded-md text-lg">
                <Link to="/custom">Build Custom Package</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Modern furnished home interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-medium">Fully furnished in 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
