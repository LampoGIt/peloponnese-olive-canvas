
const Footer = () => {
  return (
    <footer className="bg-olive-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
              Peloponnesian Gold
            </h3>
            <p className="text-olive-light leading-relaxed max-w-md">
              Four generations of olive oil excellence from the heart of Greece. 
              Crafting premium extra virgin olive oil with passion and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-olive-light">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#shop" className="hover:text-gold transition-colors">Shop</a></li>
              <li><a href="#recipes" className="hover:text-gold transition-colors">Recipes</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Information</h4>
            <ul className="space-y-2 text-olive-light">
              <li><a href="#health" className="hover:text-gold transition-colors">Health Benefits</a></li>
              <li><a href="#sustainability" className="hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Shipping</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-olive-medium/30 mt-8 pt-8 text-center text-olive-light">
          <p>&copy; 2024 Peloponnesian Gold. All rights reserved. | Made with ❤️ in Greece</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
