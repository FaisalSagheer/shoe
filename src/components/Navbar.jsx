"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Footprints, ShoppingCart } from "lucide-react";
import { navItems } from "@/constant";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "shop", "designer", "video", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  return (
    <nav className="font-sans font-medium text-2xl fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-2">
            <Footprints className="h-12 w-12 text-white" />
            <span className="text-2xl font-bold text-white font-sans">
              Axism
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 list-none">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-2xl font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-white border-b-2 border-white"
                      : "text-[#efe8e8] hover:text-[#F7F7F7]"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </div>
          </div>
          <div className="text-white lg:flex relative hidden">
            <ShoppingCart className="w-8 h-8" />
            <span className="absolute -top-4 left-6">0</span>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pb-18 space-y-1 h-screen flex flex-col justify-center items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block px-3 py-8 text-2xl font-medium text-slate-600 hover:text-slate-900 w-full text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="text-white lg:flex relative hidden">
            <ShoppingCart className="w-8 h-8" />
            <span className="absolute -top-4 left-6">0</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
