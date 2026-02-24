import { useState } from 'react';
import { useGetMenuItems, useUpdateMenuItem } from '../hooks/useQueries';
import MenuItemCard from '../components/MenuItemCard';
import { Lock, Unlock } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

export default function Menu() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const { data: menuItems, isLoading } = useGetMenuItems();
  const { identity } = useInternetIdentity();

  const mainDishes = ['Chicken Biryani', 'Beef Curry', 'Fried Rice', 'Chicken Burger'];
  const fastFood = ['Pizza', 'French Fries', 'Sandwich'];
  const drinks = ['Cold Drinks', 'Fresh Juice', 'Water'];

  const getItemsByCategory = (category: string[]) => {
    return menuItems?.filter((item) => category.includes(item.name)) || [];
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Loading menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">📋 Menu</h1>
          <p className="text-xl text-muted-foreground">
            Fresh, delicious food at great prices
          </p>
        </div>

        {/* Admin Toggle */}
        {identity && (
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsAdminMode(!isAdminMode)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {isAdminMode ? (
                <>
                  <Unlock size={20} />
                  <span>Admin Mode: ON</span>
                </>
              ) : (
                <>
                  <Lock size={20} />
                  <span>Enable Admin Mode</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Main Dishes */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/assets/generated/main-dishes-icon.dim_128x128.png"
              alt="Main Dishes"
              className="w-16 h-16 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-foreground">🍛 Main Dishes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getItemsByCategory(mainDishes).map((item) => (
              <MenuItemCard key={item.name} item={item} isAdminMode={isAdminMode} />
            ))}
          </div>
        </section>

        {/* Fast Food */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/assets/generated/fast-food-icon.dim_128x128.png"
              alt="Fast Food"
              className="w-16 h-16 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-foreground">🍕 Fast Food</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getItemsByCategory(fastFood).map((item) => (
              <MenuItemCard key={item.name} item={item} isAdminMode={isAdminMode} />
            ))}
          </div>
        </section>

        {/* Drinks */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/assets/generated/drinks-icon.dim_128x128.png"
              alt="Drinks"
              className="w-16 h-16 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-foreground">🥤 Drinks</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getItemsByCategory(drinks).map((item) => (
              <MenuItemCard key={item.name} item={item} isAdminMode={isAdminMode} />
            ))}
          </div>
        </section>

        {isAdminMode && (
          <div className="text-center text-sm text-muted-foreground mt-8">
            <p>Prices can be edited in admin mode</p>
          </div>
        )}
      </div>
    </div>
  );
}
