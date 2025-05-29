
import { Heart, Leaf } from 'lucide-react';

const HealthBenefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-gold" />,
      title: "Heart Health",
      description: "Rich in monounsaturated fats that support cardiovascular health and help reduce bad cholesterol levels."
    },
    {
      icon: <Leaf className="w-12 h-12 text-gold" />,
      title: "Antioxidant Power",
      description: "Packed with vitamin E and polyphenols that fight inflammation and protect cells from oxidative stress."
    },
    {
      icon: <Heart className="w-12 h-12 text-gold" />,
      title: "Brain Function",
      description: "Studies suggest olive oil consumption may support cognitive function and reduce age-related mental decline."
    },
    {
      icon: <Leaf className="w-12 h-12 text-gold" />,
      title: "Skin Health",
      description: "Natural moisturizing properties and vitamins help maintain healthy, radiant skin from the inside out."
    }
  ];

  return (
    <section id="health" className="py-20 bg-olive-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-olive-dark mb-6">
            Nature's Medicine
          </h2>
          <p className="text-xl text-olive-medium max-w-3xl mx-auto">
            Extra virgin olive oil isn't just delicious—it's a cornerstone of the Mediterranean diet, 
            scientifically proven to support long-term health and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-olive-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-playfair font-bold text-olive-dark mb-4">
              Mediterranean Diet Approved
            </h3>
            <p className="text-olive-medium text-lg max-w-4xl mx-auto">
              Our extra virgin olive oil is a key component of the Mediterranean diet, recognized by UNESCO 
              as an Intangible Cultural Heritage of Humanity and supported by decades of nutritional research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
