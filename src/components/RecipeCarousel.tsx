import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const recipes = [
  {
    id: 1,
    title: "Homemade Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    chef: "Maria Garcia"
  },
  {
    id: 2,
    title: "Fresh Sushi Rolls",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    chef: "John Smith"
  },
  {
    id: 3,
    title: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    chef: "Emma Wilson"
  }
];

export function RecipeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % recipes.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + recipes.length) % recipes.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div id="featured" className="relative w-full overflow-hidden bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Recipes</h2>
        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {recipes.map((recipe) => (
              <div key={recipe.id} className="w-full flex-shrink-0">
                <div className="max-w-3xl mx-auto">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{recipe.title}</h3>
                      <p className="mt-2 text-gray-600">By {recipe.chef}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}