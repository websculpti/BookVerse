import { Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export default function Wishlist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <PagePlaceholder
          icon={Heart}
          title="Your Wishlist"
          description="Add books to your wishlist and never lose track of the titles you want to read. Get notified when books go on sale."
        />
      </main>
      <Footer />
    </div>
  );
}
