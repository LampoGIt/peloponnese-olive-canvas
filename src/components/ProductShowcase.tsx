
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Premium Extra Virgin",
      description: "Our flagship olive oil with robust flavor and notes of fresh herbs",
      price: "€28.00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      acidity: "< 0.3%",
      harvest: "Early harvest"
    },
    {
      id: 2,
      name: "Organic Harvest",
      description: "Certified organic olive oil with delicate, fruity flavor profile",
      price: "€35.00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      acidity: "< 0.2%",
      harvest: "Organic certified"
    },
    {
      id: 3,
      name: "Limited Edition",
      description: "Single-estate olive oil from our oldest grove, aged 400+ years",
      price: "€45.00",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      acidity: "< 0.1%",
      harvest: "Single estate"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-olive-dark mb-6">
            Our Premium Collection
          </h2>
          <p className="text-xl text-olive-medium max-w-3xl mx-auto">
            Each bottle represents generations of expertise, harvested from our family groves 
            in the pristine landscapes of Peloponnesos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-500 border-olive-light/30 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-olive-dark mb-3">
                  {product.name}
                </h3>
                <p className="text-olive-medium mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm text-olive-medium">
                  <span>Acidity: {product.acidity}</span>
                  <span>{product.harvest}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-playfair font-bold text-earth-brown">
                    {product.price}
                  </span>
                  <Button className="bg-olive-dark hover:bg-olive-dark/90 text-white">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
