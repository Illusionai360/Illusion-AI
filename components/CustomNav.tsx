"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { LoginDialog } from "./Login";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/#about" },
  { name: "Products", link: "/#products" },
  { name: "Services", link: "/#services" },
];

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[85%] lg:w-[80%] 
        animate-border p-[2px] transition-all duration-300 
        ${isOpen ? "rounded-2xl" : "rounded-[80px]"}`}
      >
        <div
          className={`backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden 
          ${isOpen ? "rounded-2xl" : "rounded-[80px]"} 
          ${isScrolled ? "bg-black/80 scale-[0.98]" : "bg-black/60 scale-100"}`}
        >
          {/* Top Bar */}
          <div
            className={`px-4 md:px-6 flex items-center justify-between ${isScrolled ? "py-2" : "py-4"
              }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src={"/illusionlogo.png"}
                alt="Logo"
                width={44}
                height={44}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-purple-400 animate-gradient-x">
                Illusion
              </span>{" "}
              <span className="text-purple-400">AI</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-white/80 text-sm md:text-base lg:text-lg hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a href="#contact">
                <button
                  className="px-5 py-2 text-sm md:text-base bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-md hover:scale-105 hover:shadow-purple-500/30 transition-all"
                >
                  Contact Us
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black hover:scale-110 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[350px]" : "max-h-0"
              }`}
          >
            <div className="flex flex-col items-center py-6 gap-6 bg-black/60 backdrop-blur-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 text-base hover:text-white hover:scale-105 transition-transform"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setLoginOpen(true);
                }}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      <LoginDialog open={loginOpen} setOpen={setLoginOpen} />
    </>
  );
}
