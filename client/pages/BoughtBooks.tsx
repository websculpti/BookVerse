import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export default function BoughtBooks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <PagePlaceholder
          icon={ShoppingCart}
          title="Books You've Bought"
          description="View your collection of purchased books. Manage your library, leave reviews, and discover your reading history."
        />
      </main>
      <Footer />
    </div>
  );
}
