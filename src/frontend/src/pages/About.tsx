import { Heart, Star, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">ℹ️ About Us</h1>
        </div>

        {/* Main Description */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 text-center">
          <p className="text-xl text-foreground leading-relaxed">
            We are a local restaurant serving our community with love and care.
          </p>
        </div>

        {/* Goals Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Goal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Fresh and quality food
              </h3>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Good taste at a fair price
              </h3>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Friendly customer service
              </h3>
            </div>
          </div>
        </div>

        {/* Closing Messages */}
        <div className="space-y-6">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold text-primary">
              We believe good food brings people together.
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl text-foreground font-medium">
              Thank you for choosing our restaurant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
