import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation"; // 1. IMPORT YOUR NAVIGATION
import HtmlLangSync from "./components/HtmlLangSync";
import LanguageSelector from "./components/LanguageSelector";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CareerPage from "./pages/career";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import TermsConditions from "./pages/legal/TermsConditions";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Beautician from "./pages/Beautician";
import Salon from "./pages/Salon";
import Client from "./pages/Client";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <HtmlLangSync />
        <ScrollToTop />
        
        {/* 2. PLACE NAVIGATION HERE so it shows on every page */}
        <Navigation /> 

        <LanguageSelector />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/beauticians" element={<Beautician />} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/Client" element={<Client />} />
          
          {/* CATCH-ALL ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;