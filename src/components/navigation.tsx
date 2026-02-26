import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import floatLogo from "../assets/float-into-wellness-logo.jpg";

// Update BOOKING_URL when Calendly or booking link is confirmed
const BOOKING_URL = "https://calendly.com/PLACEHOLDER_FLOAT_INTO_WELLNESS";

const scrollToSection = (sectionId: string, closeMobile?: () => void) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    closeMobile?.();
  }
};

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", sectionId: "about" },
    { label: "Services", sectionId: "services" },
    { label: "Contact", sectionId: "contact" },
  ];

  return (
    <header>
      <nav className="bg-white shadow-lg sticky top-0 z-50" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">

            {/* Brand */}
            <div className="flex items-center space-x-3">
              <img
                src={floatLogo}
                alt="Float Into Wellness"
                className="h-12 w-12 object-cover rounded-full"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold" style={{ color: "#0EA5E9" }}>
                Float Into Wellness
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8" role="menubar">
              {navLinks.map(({ label, sectionId }) => (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className="text-gray-700 hover:text-sky-500 transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                  role="menuitem"
                >
                  {label}
                </button>
              ))}
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="text-white font-semibold"
                style={{ backgroundColor: "#0EA5E9" }}
                aria-label="Book a wellness session at Float Into Wellness"
                data-testid="button-book-now"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen
                ? <X size={24} aria-hidden="true" />
                : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden pb-4">
              <div className="flex flex-col space-y-3" role="menu">
                {navLinks.map(({ label, sectionId }) => (
                  <button
                    key={sectionId}
                    onClick={() => scrollToSection(sectionId, () => setIsMobileMenuOpen(false))}
                    className="text-gray-700 hover:text-sky-500 transition-colors font-medium py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                    role="menuitem"
                  >
                    {label}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    window.open(BOOKING_URL, "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white font-semibold mt-2"
                  style={{ backgroundColor: "#0EA5E9" }}
                  aria-label="Book a wellness session"
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
