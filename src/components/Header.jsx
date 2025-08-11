import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "values", label: "Core Values" },
    { id: "background", label: "Background" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-gray-800/50"
          : "bg-[#0A0A0A]/80 backdrop-blur-md"
      }`}
    >
      {/* Decorative top border */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
          isScrolled ? "bg-gray-800" : "bg-gray-800/50"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl lg:text-3xl font-semibold transition-all duration-300 ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              <span>My portfolio</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  isScrolled
                    ? "text-gray-400 hover:text-white hover:bg-[#111111]"
                    : "text-gray-400 hover:text-white hover:bg-[#111111]"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isScrolled ? "bg-[#111111]" : "bg-[#111111]"
                  }`}
                ></div>

                {/* Animated underline */}
                <div
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-[1px] group-hover:w-3/4 transition-all duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-gray-700"
                  }`}
                ></div>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-gray-400 hover:text-white hover:bg-[#111111]"
                : "text-gray-400 hover:text-white hover:bg-[#111111]"
            }`}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mt-4 rounded-lg border transition-all duration-300 ${
              isScrolled
                ? "bg-[#111111] border-gray-800/50"
                : "bg-[#111111] border-gray-800/50"
            }`}
          >
            <div className="p-4 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-400 hover:text-white hover:bg-[#0A0A0A]"
                      : "text-gray-400 hover:text-white hover:bg-[#0A0A0A]"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay for blur effect */}
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/20"></div>
      </div>
    </header>
  );
};

export default Header;
