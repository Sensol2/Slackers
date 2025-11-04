"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Slackers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/teachers"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Teachers
            </Link>
            <Link
              href="/chat"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Chat
            </Link>
            <Link
              href="/subscription"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Subscription
            </Link>

            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="bg-primary text-white px-6 py-2 rounded-2xl hover:bg-secondary transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-primary text-white px-6 py-2 rounded-2xl hover:bg-secondary transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/teachers"
              className="block text-text-secondary hover:text-primary transition-colors"
            >
              Teachers
            </Link>
            <Link
              href="/chat"
              className="block text-text-secondary hover:text-primary transition-colors"
            >
              Chat
            </Link>
            <Link
              href="/subscription"
              className="block text-text-secondary hover:text-primary transition-colors"
            >
              Subscription
            </Link>
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="block bg-primary text-white px-6 py-2 rounded-2xl hover:bg-secondary transition-colors text-center"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="block bg-primary text-white px-6 py-2 rounded-2xl hover:bg-secondary transition-colors text-center"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
