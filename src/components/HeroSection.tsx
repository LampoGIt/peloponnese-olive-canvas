
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/112395df-1e71-4a53-8b25-a84faf4a636b.png')`
      }}>
        <div className="absolute inset-0 bg-black/40 mx-0 my-0 px-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
          Pure Peloponnesian
          <span className="block text-gold">Liquid Gold</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          From ancient olive groves in the heart of Greece, discover the authentic taste 
          of premium extra virgin olive oil, crafted with generations of tradition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Shop Our Collection
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-olive-dark px-8 py-6 text-lg font-medium transition-all duration-300">
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
