import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Electric blue border */}
      <div className=" p-0.5 rounded-lg">
        <div className=" rounded-lg h-full w-full">
          <div className="px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
              {/* Logo Section */}
              <div className="lg:col-span-1">
                <h2 className="text-white text-2xl font-bold">nightbyte</h2>
              </div>

              {/* Contact Section */}
              <div className="lg:col-span-1">
                <h3 className="text-white text-sm font-semibold mb-4 tracking-wider">
                  CONTACT US
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">(+213) 773 14 17 61</p>
                  <p className="text-gray-300 text-sm">contact@nightbyte.space</p>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="lg:col-span-1">
                <h3 className="text-white text-sm font-semibold mb-4 tracking-wider">
                  FOLLOW US
                </h3>
                <div className="flex space-x-3">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/nightbyte.su/"
                      target="_blank"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/nightbyte/"
                      target="_blank"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-4 gap-x-8">
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Services
                  </Link>
                  <Link
                    href="#pourquoi-nous"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Why Us
                  </Link>
                  <Link
                    href="#equipe"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-xs">
                © 2025 Nightbyte. All rights are reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
