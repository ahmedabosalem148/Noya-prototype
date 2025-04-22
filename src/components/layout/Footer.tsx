import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-teal">Noya</span>
            </div>
            <p className="text-gray-600 text-sm">
              Transform your empty space into a fully furnished home with our complete packages and services.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4 text-gray-800">Packages</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/packages/popular" className="text-gray-600 hover:text-teal">Popular Package</Link></li>
              <li><Link to="/packages/medium" className="text-gray-600 hover:text-teal">Medium Package</Link></li>
              <li><Link to="/packages/premium" className="text-gray-600 hover:text-teal">Premium Package</Link></li>
              <li><Link to="/custom" className="text-gray-600 hover:text-teal">Custom Package</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4 text-gray-800">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/consultation" className="text-gray-600 hover:text-teal">Interior Consultation</Link></li>
              <li><Link to="/marketplace/contractors" className="text-gray-600 hover:text-teal">Contractor Marketplace</Link></li>
              <li><Link to="/marketplace/suppliers" className="text-gray-600 hover:text-teal">Supplier Marketplace</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-teal">Customer Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4 text-gray-800">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-teal">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-teal">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-teal">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-teal">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 Noya. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428.247-.669.642-1.276 1.153-1.772a4.91 4.91 0 011.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.666.642-1.276 1.153-1.772a4.91 4.91 0 011.772-1.153c.637-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
