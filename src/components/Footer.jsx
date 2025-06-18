"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 px-6 md:px-16 lg:px-24 xl:px-32 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Logo + Tagline */}
        <div>
          <img
            className="h-9 mb-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoDark.svg"
            alt="Logo"
          />
          <p className="text-sm leading-relaxed">
            Navigating the future with intelligent content, one AI insight at a time.
          </p>
          <div className="flex gap-4 mt-5">
            <Link href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Github size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between md:col-span-2">
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/" className="hover:text-white">Tutorials</Link></li>
              <li><Link href="/blogs" className="hover:text-white">Blog</Link></li>
              <li><Link href="/" className="hover:text-white">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/" className="hover:text-white">Careers</Link></li>
              <li><Link href="/" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
