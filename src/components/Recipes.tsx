
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Recipes = () => {
  const recipes = [
    {
      title: "Mediterranean Bruschetta",
      description: "Classic toasted bread with fresh tomatoes, basil, and our premium olive oil",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      time: "15 min",
      difficulty: "Easy"
    },
    {
      title: "Greek Village Salad",
      description: "Traditional horiatiki with fresh vegetables and olive oil dressing",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      time: "10 min",
      difficulty: "Easy"
    },
    {
      title: "Olive Oil Lemon Cake",
      description: "Moist, tender cake featuring olive oil for incredible flavor and texture",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
