import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-teal">Noya</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/packages" className="text-gray-600 hover:text-teal transition-colors">
            Packages
          </Link>
          <Link to="/custom" className="text-gray-600 hover:text-teal transition-colors">
            Custom Build
          </Link>
          <Link to="/consultation" className="text-gray-600 hover:text-teal transition-colors">
            Consultation
          </Link>
          <Link to="/marketplace" className="text-gray-600 hover:text-teal transition-colors">
            Marketplace
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button className="bg-teal hover:bg-teal-dark text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
