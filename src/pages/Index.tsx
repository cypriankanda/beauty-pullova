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

  const commonComponents = (
    <>
      <Statistics />
      <ServiceCategories />
      <HowItWorks />
      <AppDownload />
    </>
  );

  const renderContent = (country: string) => {
    if (country === "Kenya") {
      return (
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <Hero
            headline="Pullova Kenya 🇰🇪"
            subtext="Premium beauty & grooming delivered to your door. Book hairstyling, makeup, nails, skin, massage and barber services in minutes — our app automatically matches you to a nearby certified beautician or barber. No lines, no stress. Available anytime, same-day included."
          />
          <Waitlist region="Kenya" />
          {commonComponents}
          <Services region="Kenya" />
          <Footer />
        </div>
      );
    }

    if (country === "United States") {
      return (
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <Hero
            headline="Pullova USA"
            subtext="Premium beauty & grooming delivered to your door. Book hairstyling, makeup, nails, skin, massage and barber services in minutes — our app automatically matches you to a nearby certified beautician or barber. No lines, no stress. Available 7 AM – 10 PM, same-day included."
          />
          <Waitlist region="USA" />
          {commonComponents}
          <Services region="USA" />
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Hero
          headline="Pullova 🌍"
          subtext="We're coming soon to your region. Stay tuned for home-delivered beauty experiences!"
        />
        <Waitlist />
        {commonComponents}
        <Services />
        <Footer />
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading personalized experience...
      </div>
    );
  }

  return renderContent(country);
};

export default Index;
