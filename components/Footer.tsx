import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-primary mb-4">Slackers</h3>
            <p className="text-sm text-text-secondary">
              Connect, learn, and grow with language exchange partners.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-text-primary mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/teachers"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Find Teachers
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Chat Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/subscription"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h4 className="font-semibold text-text-primary mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h4 className="font-semibold text-text-primary mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-text-secondary">
            © 2025 Slackers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
