import { TrendingUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export default function SoldBooks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <PagePlaceholder
          icon={TrendingUp}
          title="Books You've Sold"
          description="Keep track of all the books you've sold on BookHub. Monitor your sales history and earnings."
        />
      </main>
      <Footer />
    </div>
  );
}
