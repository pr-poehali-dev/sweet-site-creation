
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Photo from "./pages/Photo";
import Calendar from "./pages/Calendar";
import Gallery from "./pages/Gallery";
import Stars from "./pages/Stars";
import Letters from "./pages/Letters";
import Gift from "./pages/Gift";
import Counter from "./pages/Counter";
import Comfort from "./pages/Comfort";
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
          <Route path="/photo" element={<Photo />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/comfort" element={<Comfort />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;