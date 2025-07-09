import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Check } from "lucide-react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Simplify task management and team collaboration." },
  ];
}

const Homepage = () => {
  return (
    
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="TaskHub Logo" className="w-12 h-12" />
              <span className="text-xl font-bold">TaskHub</span>
            </div>
            <nav className="flex items-center gap-4">
              <Link to="/sign-in" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                Login
              </Link>
              <Button variant="outline" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <Link to="/sign-up" >
                Sign Up
              </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <div className="flex mt-20 flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto gap-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Get more done with <span className="text-blue-600">TaskHub</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The modern task management platform that helps teams organize, track, and complete work efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/sign-up">
              <Button className="bg-blue-600 text-white px-6 py-2 text-lg">Try for Free</Button>
            </Link>
            <Link to="/sign-in">
              <Button variant="outline" className="px-6 py-2 text-lg border-gray-300">Login</Button>
            </Link>
          </div>
          <div className="mt-4 text-sm text-gray-500 flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span>Free plan available</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span>Cancel anytime</span>
          </div>
        </div>

        </div>

        {/* Optional dashboard image */}
        <div className="w-full md:w-1/2">
          <img src="/dashboard.png" alt="Dashboard Preview" className="rounded-xl shadow-xl" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-sm text-center text-gray-600 mt-auto">
        <div className="container mx-auto">
          © 2025 TaskHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
