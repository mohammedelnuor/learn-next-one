"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-32">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SkyLine Real Estate</h2>
          <p className="text-sm leading-6">
            We provide the best real estate solutions for selling, buying, 
            and property valuation with ease and professionalism.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Real Estate Sales</a></li>
            <li><a href="#" className="hover:text-white transition">Real Estate Purchase</a></li>
            <li><a href="#" className="hover:text-white transition">Real Estate Valuation</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" title="Facebook" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition">
              <FaFacebookF />
            </a>
            <a href="#" title="Twitter" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition">
              <FaTwitter />
            </a>
            <a href="#" title="Instagram" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition">
              <FaInstagram />
            </a>
            <a href="#" title="LinkedIn" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mohammed Alnuor. All rights reserved.
      </div>
    </footer>
  );
}
