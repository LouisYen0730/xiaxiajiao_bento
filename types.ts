
export enum Page {
  Home = 'HOME',
  Dishes = 'DISHES',
  Menu = 'MENU',
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  isPopular?: boolean;
}