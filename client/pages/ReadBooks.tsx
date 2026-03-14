import { BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export default function ReadBooks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <PagePlaceholder
          icon={BookOpen}
          title="Books You're Reading"
          description="Track and manage all the books you're currently reading. Keep your reading list organized and see your progress."
        />
      </main>
      <Footer />
    </div>
  );
}
