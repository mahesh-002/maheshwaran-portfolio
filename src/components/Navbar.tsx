
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container-custom mx-auto">
        <div className="py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold heading-gradient">
            Maheshwaran M
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium ${
                location.pathname === "/"
                  ? "text-indigo-500"
                  : "text-foreground hover:text-indigo-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`text-sm font-medium ${
                location.pathname === "/projects"
                  ? "text-indigo-500"
                  : "text-foreground hover:text-indigo-500"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/certificates"
              className={`text-sm font-medium ${
                location.pathname === "/certificates"
                  ? "text-indigo-500"
                  : "text-foreground hover:text-indigo-500"
              }`}
            >
              Certificates
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="ml-2 p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t">
            <Link
              to="/"
              className={`block py-2 text-sm font-medium ${
                location.pathname === "/"
                  ? "text-indigo-500"
                  : "text-foreground hover:text-indigo-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`block py-2 text-sm font-medium ${
                location.pathname === "/projects"
                  ? "text-indigo-500"
                  : "text-foreground hover:text-indigo-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/certificates"
              className={`block py-2 text-sm font-medium ${
                location.pathname === "/certificates"
                  ? "text-indigo-500"
                  : "text-foreground hover:text-indigo-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Certificates
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
