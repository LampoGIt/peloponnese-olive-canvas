
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import OurStory from '@/components/OurStory';
import HealthBenefits from '@/components/HealthBenefits';
import Sustainability from '@/components/Sustainability';
import Recipes from '@/components/Recipes';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <OurStory />
      <HealthBenefits />
      <Sustainability />
      <Recipes />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
