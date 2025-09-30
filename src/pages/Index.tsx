import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Waitlist from "@/components/Waitlist";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
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