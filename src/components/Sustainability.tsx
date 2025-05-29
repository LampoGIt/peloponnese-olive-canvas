
import { Leaf } from 'lucide-react';

const Sustainability = () => {
  const practices = [
    {
      title: "Organic Farming",
      description: "No pesticides or synthetic fertilizers—just natural, traditional methods passed down through generations."
    },
    {
      title: "Water Conservation", 
      description: "Efficient irrigation systems and rainwater harvesting minimize our environmental footprint."
    },
    {
      title: "Renewable Energy",
      description: "Solar panels power our pressing facility, making our production process carbon-neutral."
    },
    {
      title: "Eco Packaging",
      description: "Recyclable glass bottles and minimal packaging reduce waste and protect product quality."
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-olive-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Leaf className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Caring for Tomorrow
          </h2>
          <p className="text-xl text-olive-light max-w-3xl mx-auto">
            Sustainability isn't just a practice for us—it's a responsibility to preserve the land 
            that has nurtured our olive trees for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                {practice.title}
              </h3>
              <p className="text-olive-light leading-relaxed">
                {practice.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
            Carbon Neutral Production
          </h3>
          <p className="text-olive-light text-lg max-w-4xl mx-auto">
            Through renewable energy, efficient processes, and carbon offset programs, 
            we're proud to produce olive oil with a net-zero carbon footprint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
