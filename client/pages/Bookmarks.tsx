import { Bookmark } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export default function Bookmarks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <PagePlaceholder
          icon={Bookmark}
          title="Your Bookmarks"
          description="Save important passages and pages from books you're reading. Access all your bookmarks in one convenient place."
        />
      </main>
      <Footer />
    </div>
  );
}
