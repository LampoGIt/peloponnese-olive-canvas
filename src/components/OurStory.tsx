
const OurStory = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-olive-dark mb-6">
              Four Generations of 
              <span className="block text-gold">Olive Oil Excellence</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Deep in the heart of Peloponnesos, where ancient olive trees have stood for centuries, 
                our family has been crafting exceptional olive oil since 1924. What began as a small 
                family farm has grown into a passionate pursuit of perfection.
              </p>
              
              <p>
                Our groves, nestled between rolling hills and the pristine Mediterranean coastline, 
                benefit from the unique microclimate that has made this region famous for producing 
                some of the world's finest olive oil.
              </p>
              
              <p>
                Every bottle tells the story of our dedication to traditional methods, sustainable 
                farming, and the unwavering belief that the best olive oil comes from olives 
                harvested at the perfect moment and pressed within hours of picking.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-gold mb-2">1924</h3>
                <p className="text-olive-medium">Family tradition started</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-gold mb-2">400+</h3>
                <p className="text-olive-medium">Ancient olive trees</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ancient olive grove in Peloponnesos"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-olive-dark/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
