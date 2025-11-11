"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import GooeyNav from "../GooeyNav";
import useNavigate from "@/hooks/useNavigate";

const items = [
  { label: "Accueil", href: "#" },
  {
    label: "Nos Services",
    href: "#expertise",
  },
  { label: "Pourquoi Nous", href: "#pourquoi-nous" },
  { label: "Équipe", href: "#equipe" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (href: string) => {
    if (href.startsWith("#") && href !== "#") {
      // Scroll to section if on home page
      if (window.location.pathname === "/") {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/${href}`);
      }
    } else if (href === "#") {
      navigate("/");
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="h-20 px-4 md:px-16 flex justify-between items-center bg-[#4171F92B] rounded-full">
        <button className="cursor-pointer" onClick={handleLogoClick}>
          <Image
            src="/assets/nightbyte-logo.svg"
            width={140}
            height={60}
            alt="Nightbyte"
            className="w-24 h-auto md:w-[140px]"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-16">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Desktop Contact Button */}
        <Button
          onClick={handleContactClick}
          className="hidden md:flex border border-white text-white rounded-full w-30 cursor-pointer py-5"
          style={{
            background:
              "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)",
          }}
        >
          Contactez-nous
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-all duration-500 ${
            isMobileMenuOpen
              ? "bg-opacity-60 backdrop-blur-md scale-100"
              : "bg-opacity-0 backdrop-blur-none scale-105"
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Slide-out Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-slate-900 shadow-2xl border-l border-slate-700 transform transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? "translate-x-0 scale-100"
              : "translate-x-full scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Mobile Menu Header */}
            <div
              className={`flex justify-between items-center mb-8 transform transition-all duration-400 ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100 translate-y-0"
                  : "translate-x-12 opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
            >
              <Image
                src="/assets/nightbyte-logo.svg"
                width={120}
                unoptimized={true}
                height={50}
                alt="Nightbyte"
              />
              <button
                onClick={toggleMobileMenu}
                className="w-8 h-8 flex items-center justify-center hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close mobile menu"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-4 mb-8">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMobileNavClick(item.href)}
                  className={`block w-full text-left text-white hover:text-blue-400 transition-all duration-400 py-3 px-4 rounded-lg hover:bg-slate-800 transform ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100 translate-y-0 scale-100"
                      : "translate-x-12 opacity-0 translate-y-4 scale-95"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${(index + 3) * 120}ms`
                      : "0ms",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Contact Button */}
            <Button
              onClick={() => {
                handleContactClick();
                setIsMobileMenuOpen(false);
              }}
              className={`w-full border border-white text-white rounded-full cursor-pointer py-5 transform transition-all duration-400 ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100 translate-y-0 scale-100"
                  : "translate-x-12 opacity-0 translate-y-6 scale-95"
              }`}
              style={{
                background:
                  "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)",
                transitionDelay: isMobileMenuOpen
                  ? `${(items.length + 3) * 120}ms`
                  : "0ms",
              }}
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
