
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-teal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Get started today and turn your empty house into a fully furnished home in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-teal hover:bg-gray-100 px-8 py-6 text-lg">
              <Link to="/packages">Explore Packages</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/consultation">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
