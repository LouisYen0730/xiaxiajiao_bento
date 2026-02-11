
import React from 'react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group relative border border-gray-100">
      {dish.isPopular && (
        <div className="absolute top-0 right-0">
          <div className="w-24 h-24 overflow-hidden">
             <div className="absolute top-6 -right-5 transform rotate-45 bg-brand-primary text-white text-sm font-bold text-center py-1 w-32">
                人氣推薦
            </div>
          </div>
        </div>
      )}
      <div className="overflow-hidden">
        <img 
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
          src={dish.imageUrl} 
          alt={dish.name} 
        />
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-bold text-brand-dark mb-2">{dish.name}</h3>
        <p className="text-warm-gray text-xl leading-relaxed">{dish.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
