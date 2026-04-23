import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Overview } from "@/components/site/Overview";
import { Features } from "@/components/site/Features";
import { Specs } from "@/components/site/Specs";
import { Variants } from "@/components/site/Variants";
import { Company } from "@/components/site/Company";
import { Gallery } from "@/components/site/Gallery";
import { OrderCTA } from "@/components/site/OrderCTA";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Features />
        <Specs />
        <Variants />
        <Company />
        <Gallery />
        <OrderCTA />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
