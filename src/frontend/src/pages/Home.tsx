import { Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src="/assets/generated/hero-banner.dim_1200x400.png"
            alt="Restaurant hero banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Welcome to Our Restaurant 🍽️
                </h1>
                <p className="text-xl md:text-2xl text-foreground/90 font-medium">
                  We serve fresh, tasty, and affordable food every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              Our restaurant is a perfect place for family, friends, and food lovers.
              We use fresh ingredients and cook with care to give you the best taste.
            </p>
          </div>

          {/* Service Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Dine in or take away
              </h3>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Friendly service
              </h3>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Clean and comfortable environment
              </h3>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary/5 border-2 border-primary/20 rounded-2xl p-8">
            <p className="text-2xl font-bold text-primary">
              Visit us today and enjoy delicious food!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
