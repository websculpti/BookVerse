import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ReadBooks from "./pages/ReadBooks";
import Bookmarks from "./pages/Bookmarks";
import Wishlist from "./pages/Wishlist";
import BoughtBooks from "./pages/BoughtBooks";
import SoldBooks from "./pages/SoldBooks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/read-books" element={<ReadBooks />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bought-books" element={<BoughtBooks />} />
          <Route path="/sold-books" element={<SoldBooks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
