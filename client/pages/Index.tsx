import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, BookOpen, TrendingUp } from "lucide-react";
import BookCard from "@/components/BookCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const featuredBooks = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    rating: 4.8,
    price: 12.99,
  },
  {
    id: "2",
    title: "Project Hail Mary",
    author: "Andy Weir",
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
    rating: 4.9,
    price: 14.99,
  },
  {
    id: "3",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    image:
      "https://images.unsplash.com/photo-1495446815901-4d71bcdd2085?w=400&h=600&fit=crop",
    rating: 4.6,
    price: 13.99,
  },
  {
    id: "4",
    title: "Educated",
    author: "Tara Westover",
    image:
      "https://images.unsplash.com/photo-1491841573634-28fb1df4b294?w=400&h=600&fit=crop",
    rating: 4.7,
    price: 15.99,
  },
  {
    id: "5",
    title: "The Seven Husbands",
    author: "Taylor Jenkins Reid",
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
    rating: 4.5,
    price: 13.49,
  },
  {
    id: "6",
    title: "Atomic Habits",
    author: "James Clear",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    rating: 4.8,
    price: 16.99,
  },
];

const recommendedBooks = [
  {
    id: "7",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    image:
      "https://images.unsplash.com/photo-1495446815901-4d71bcdd2085?w=400&h=600&fit=crop",
    rating: 4.4,
  },
  {
    id: "8",
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    image:
      "https://images.unsplash.com/photo-1491841573634-28fb1df4b294?w=400&h=600&fit=crop",
    rating: 4.7,
  },
  {
    id: "9",
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    rating: 4.8,
  },
  {
    id: "10",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
    rating: 4.6,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  Welcome to BookHub
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Discover Your Next{" "}
                <span className="text-primary">Favorite Book</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Buy, sell, and read books from your digital library. Explore
                thousands of titles, build your wishlist, and connect with
                fellow book lovers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/read-books"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Reading
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/wishlist"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors"
                >
                  View Wishlist
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <p className="text-sm text-muted-foreground">Books Available</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <p className="text-sm text-muted-foreground">Active Readers</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm h-96">
                {/* Book Stack Illustration */}
                <div className="absolute inset-0 space-y-4">
                  <div className="absolute top-0 left-0 w-48 h-64 bg-primary/20 rounded-xl transform -rotate-12" />
                  <div className="absolute top-8 left-16 w-48 h-64 bg-accent rounded-xl transform rotate-6 shadow-lg" />
                  <div className="absolute top-16 left-8 w-48 h-64 bg-primary rounded-xl shadow-2xl flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-primary-foreground opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Books
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Handpicked bestsellers and trending titles that our community
              loves
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/read-books"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Books
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recommended for You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Based on your reading habits and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose BookHub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Read Online
              </h3>
              <p className="text-muted-foreground">
                Access thousands of books instantly with our digital library.
                Read anytime, anywhere.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Buy & Sell
              </h3>
              <p className="text-muted-foreground">
                Discover new books to buy or sell your collection. Fair pricing
                and secure transactions.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Community
              </h3>
              <p className="text-muted-foreground">
                Connect with fellow book lovers, share reviews, and get
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Next Great Read?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of readers discovering, sharing, and enjoying books
            on BookHub.
          </p>
          <Link
            to="/read-books"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-primary-foreground transition-colors"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
