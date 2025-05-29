
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest recipes and product updates.",
      });
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div className="bg-gradient-olive rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <Mail className="w-8 h-8 text-gold mr-3" />
              <h3 className="text-2xl font-playfair font-bold">
                Join Our Olive Oil Family
              </h3>
            </div>
            
            <p className="text-olive-light mb-6 text-lg">
              Get exclusive recipes, harvest updates, and special offers delivered to your inbox. 
              Plus, receive a 10% discount on your first order!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-white font-medium"
              >
                Subscribe Now
              </Button>
            </form>
          </div>

          {/* Contact & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-olive-dark mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4 text-olive-medium">
                <div>
                  <h4 className="font-semibold text-olive-dark">Visit Our Grove</h4>
                  <p>Kalamata, Peloponnesos<br />Greece 24100</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-olive-dark">Contact Us</h4>
                  <p>info@peloponnesiangold.com<br />+30 27210 12345</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-olive-dark">Farm Tours</h4>
                  <p>Available by appointment<br />Experience our harvest process</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-playfair font-semibold text-olive-dark mb-4">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="border-olive-medium text-olive-dark hover:bg-olive-dark hover:text-white"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
