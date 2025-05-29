
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Recipes = () => {
  const recipes = [
    {
      title: "Mediterranean Bruschetta",
      description: "Classic toasted bread with fresh tomatoes, basil, and our premium olive oil",
      image: "/lovable-uploads/11961c3a-f662-44f6-8ffc-86b6cafc3c86.png",
      time: "15 min",
      difficulty: "Easy"
    },
    {
      title: "Greek Village Salad",
      description: "Traditional horiatiki with fresh vegetables and olive oil dressing",
      image: "/lovable-uploads/df824700-1d1b-4863-a0f8-3c09f5f0ff57.png",
      time: "10 min",
      difficulty: "Easy"
    },
    {
      title: "Olive Oil Lemon Cake",
      description: "Moist, tender cake featuring olive oil for incredible flavor and texture",
      image: "/lovable-uploads/256d5d55-ab02-4bb3-afa0-4d055f811f50.png",
      time: "45 min",
      difficulty: "Medium"
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-olive-dark mb-6">
            Recipes & Inspiration
          </h2>
          <p className="text-xl text-olive-medium max-w-3xl mx-auto">
            Discover the authentic flavors of the Mediterranean with recipes that showcase 
            the versatility and richness of premium olive oil.
          </p>
        </div>

        {/* Main Olive Grove Hero Image */}
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/lovable-uploads/66194b35-b267-4393-88b5-23f7572a2ba0.png"
            alt="Peloponnesian olive groves at sunset"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-2">
              From Our Ancient Groves
            </h3>
            <p className="text-lg opacity-90">
              Where tradition meets culinary excellence
            </p>
          </div>
        </div>

        {/* Secondary Grove Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/1fa5e8db-12bf-4e5c-9f1a-067f07641f4d.png"
              alt="Aerial view of olive groves"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-playfair font-semibold">Sustainable Farming</h4>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/7ac640a3-e64a-42ef-a66b-9d191ea098fd.png"
              alt="Vast olive grove landscape"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-playfair font-semibold">Heritage & Tradition</h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-olive-light/30 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-olive-dark mb-3">
                  {recipe.title}
                </h3>
                <p className="text-olive-medium mb-4 leading-relaxed">
                  {recipe.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-olive-medium mb-4">
                  <span>⏱️ {recipe.time}</span>
                  <span>📊 {recipe.difficulty}</span>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-olive-medium text-olive-dark hover:bg-olive-dark hover:text-white"
                >
                  View Recipe
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-olive-dark hover:bg-olive-dark/90 text-white px-8">
            More Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
