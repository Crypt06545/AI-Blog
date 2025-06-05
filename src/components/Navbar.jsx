"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ Import Lucide icons
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <li>
          <Link className="hover:text-gray-500/80 transition" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500/80 transition" href="#">
            Services
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500/80 transition" href="#">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500/80 transition" href="#">
            Pricing
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <Button
        type="button"
        className="mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Get started
      </Button>

      {/* Mobile Menu Button with Lucide Icons */}
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
        <div className="absolute top-[55px] left-0 w-full bg-gray-900 p-6 md:hidden text-white">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link href="/" className="text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm">
                Pricing
              </Link>
            </li>
          </ul>
          <Button
            type="button"
            className="mt-2 block md:hidden text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
