
import React, { useState, useEffect } from 'react';
import { Dish } from '../types';
import DishCard from '../components/DishCard';

const dishesData: Dish[] = [
  {
    id: 1,
    name: '香酥雞腿',
    description: '外皮金黃酥脆，內裡鮮嫩多汁。每一口都是無法抗拒的香氣與口感，是我們店裡屹立不搖的人氣王！',
    imageUrl: 'https://picsum.photos/seed/crispy-chicken/400/300',
    isPopular: true,
  },
  {
    id: 2,
    name: '魯雞腿',
    description: '遵循古法慢火細燉，將獨家滷汁的精華完全鎖入雞腿中。肉質軟嫩入味，入口即化，是記憶中最懷念的家鄉味。',
    imageUrl: 'https://picsum.photos/seed/braised-chicken/400/300',
  },
  {
    id: 3,
    name: '嗄嗄叫雞排',
    description: '比臉還大的招牌雞排，經過獨家秘方醃製，炸至外酥內軟。咬下去發出\'嗄嗄\'的酥脆聲響，滿足您對美味的所有想像！',
    imageUrl: 'https://picsum.photos/seed/chicken-chop/400/300',
  },
   {
    id: 4,
    name: '招牌滷排骨',
    description: '嚴選帶骨里肌排，先炸後滷，完美封存肉汁。口感紮實，鹹香下飯，是便當中的經典不敗款。',
    imageUrl: 'https://picsum.photos/seed/pork-chop/400/300',
  },
  {
    id: 5,
    name: '挪威鯖魚',
    description: '來自挪威的鮮美鯖魚，油脂豐富，肉質細嫩。簡單香煎即可帶出魚肉的自然甜味，營養又健康。',
    imageUrl: 'https://picsum.photos/seed/fish/400/300',
  },
   {
    id: 6,
    name: '特製三寶飯',
    description: '一次滿足您的所有願望！結合香酥雞腿、滷排骨與美味配菜，給您最豐盛的味蕾饗宴。',
    imageUrl: 'https://picsum.photos/seed/combo-bento/400/300',
  }
];

const Dishes: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

  return (
    <div className={`py-12 bg-gradient-to-b from-amber-100 via-amber-50 to-white transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark inline-block relative pb-2">
                我們的招牌菜色
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-brand-secondary rounded-full"></span>
            </h2>
          <p className="mt-4 text-lg text-warm-gray">每一份堅持，都為了給您最好的味道</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishesData.map((dish, index) => (
             <div 
                key={dish.id} 
                className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
                <DishCard dish={dish} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dishes;