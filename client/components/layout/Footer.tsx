import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">BookHub</span>
            </div>
            <p className="text-sm opacity-75">
              Your gateway to discovering, sharing, and enjoying books.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Browse</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="/" className="hover:opacity-100 transition-opacity">
                  Read Books
                </a>
              </li>
              <li>
                <a
                  href="/wishlist"
                  className="hover:opacity-100 transition-opacity"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  href="/bookmarks"
                  className="hover:opacity-100 transition-opacity"
                >
                  Bookmarks
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">My Library</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a
                  href="/bought-books"
                  className="hover:opacity-100 transition-opacity"
                >
                  Bought Books
                </a>
              </li>
              <li>
                <a
                  href="/sold-books"
                  className="hover:opacity-100 transition-opacity"
                >
                  Sold Books
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground border-opacity-20 pt-8">
          <p className="text-center text-sm opacity-60">
            © 2024 BookHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
