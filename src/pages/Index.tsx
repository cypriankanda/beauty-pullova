import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Waitlist from "@/components/Waitlist";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";
import { useGeoCountry } from "@/hooks/useGeoCountry";

const Index = () => {
  const { country, loading } = useGeoCountry();

  // Optional: temporary override for testing region content manually
  // const country = "United States"; // or "Kenya" or "Other"

  // Show loading screen while detecting location
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading personalized experience...
      </div>
    );
  }

  // 🇰🇪 --- Kenya Content ---
  if (country === "Kenya") {
    return (
      <div className="min-h-screen">
        <Navigation />
        <Hero
          headline="Pullova Kenya 🇰🇪"
          subtext="Book certified beauty professionals across Nairobi and Kenya — from glam to grooming, we come to you."
        />
        <Statistics />
        <Waitlist region="Kenya" />
        <ServiceCategories />
        <HowItWorks />
        <Services region="Kenya" />
        <AppDownload />
        <Footer />
      </div>
    );
  }

  // 🇺🇸 --- USA Content ---
  if (country === "United States") {
    return (
      <div className="min-h-screen">
        <Navigation />
        <Hero
          headline="Pullova USA"
          subtext="Find top-rated beauty experts near you — salon-quality results, right at your doorstep."
        />
        <Statistics />
        <Waitlist region="USA" />
        <ServiceCategories />
        <HowItWorks />
        <Services region="USA" />
        <AppDownload />
        <Footer />
      </div>
    );
  }

  // 🌍 --- Default Fallback (Other Countries) ---
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero
        headline="Pullova 🌍"
        subtext="We’re coming soon to your region. Stay tuned for home-delivered beauty experiences!"
      />
      <Statistics />
      <Waitlist />
      <ServiceCategories />
      <HowItWorks />
      <Services />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
