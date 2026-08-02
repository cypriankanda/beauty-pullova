import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
// import Services from "@/components/Services";
import Waitlist from "@/components/Waitlist";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";
import { useGeoCountry } from "@/hooks/useGeoCountry";
import SEO from "@/components/Seo"

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
          < SEO
            title="Pullova Kenya - On-Demand Beauty & Grooming Services"
            description="Experience the best in beauty and grooming with Pullova Kenya. Book trusted professionals for on-demand services at home, work, or anywhere you are. Verified professionals, same-day availability, and a safe & secure experience."
            canonical="https://pullova.com/kenya"
          />
          <Navigation />
          <Hero
            headline="Pullova Kenya 🇰🇪"
            subtext="Beauty and grooming, delivered on your terms.
            Book trusted professionals for on-demand services at home, work, or anywhere you are on your schedule.
            Verified professionals • Same-day availability • Safe & secure"
          />
          <Waitlist region="Kenya" />
          {commonComponents}
          {/* <Services region="Kenya" /> */}
          <Footer />
        </div>
      );
    }

    if (country === "United States") {
      return (
        <div className="min-h-screen flex flex-col">
          < SEO
            title="Pullova USA - On-Demand Beauty & Grooming Services"
            description="Experience the best in beauty and grooming with Pullova USA. Book trusted professionals for on-demand services at home, work, or anywhere you are. Verified professionals, same-day availability, and a safe & secure experience."
            canonical="https://pullova.com/usa"
          />
          <Navigation />
          <Hero
            headline="Pullova USA"
            subtext="Beauty and grooming, delivered on your terms.
            Book trusted professionals for on-demand services at home, work, or anywhere you are on your schedule.
            Verified professionals • Same-day availability • Safe & secure"
          />
          <Waitlist region="USA" />
          {commonComponents}
          {/* <Services region="USA" /> */}
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen flex flex-col">
        < SEO
            title="Pullova - On-Demand Beauty & Grooming Services"
            description="Experience the best in beauty and grooming with Pullova Kenya. Book trusted professionals for on-demand services at home, work, or anywhere you are. Verified professionals, same-day availability, and a safe & secure experience."
            canonical="https://pullova.com"
          />
        <Navigation />
        <Hero
          headline="Pullova 🌍"
          subtext="We're coming soon to your region. Stay tuned for home-delivered beauty experiences!"
        />
        <Waitlist />
        {commonComponents}
        {/* <Services /> */}
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
