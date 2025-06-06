"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Button } from "./ui/button";
import { User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useClerk } from "@clerk/nextjs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const {openSignIn} = useClerk()

  // Navigation links data
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/blog', name: 'Blog' },
    { path: '/contact', name: 'Contact' }
  ];

  // Function to check if link is active
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className="h-[55px] sticky top-0 w-full px-6 md:px-16 lg:px-24 xl:px-28 flex items-center content-center justify-between z-50 bg-gray-900 text-white shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      {/* Logo */}
      <Link href="/">
        <img
          className="h-9"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="dummyLogoColored"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link 
              href={link.path} 
              className={`transition ${isActive(link.path) ? 'text-blue-400 font-medium' : 'hover:text-blue-400'}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Account Button */}
      <Button
        onClick={openSignIn}
        variant="outline"
        className="hidden cursor-pointer md:flex items-center gap-2 bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors"
      >
        <User className="h-5 w-5" />
        Account
      </Button>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X size={30} color="#fff" />
        ) : (
          <Menu size={30} color="#fff" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[55px] left-0 w-full bg-gray-900 p-6 md:hidden text-white border-t border-gray-700">
          <ul className="flex flex-col space-y-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  className={`transition ${isActive(link.path) ? 'text-blue-400 font-medium' : 'hover:text-blue-400'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors"
          >
            <User className="h-5 w-5" />
            Account
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;