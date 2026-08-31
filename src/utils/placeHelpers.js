import { attractions } from '../data/attractions';
import { hotels } from '../data/hotels';
import { foodPlaces } from '../data/food';
import { religiousPlaces } from '../data/religious';
import { entertainment } from '../data/entertainment';

export const getPlaceByCategoryAndId = (categoryPath, id) => {
  const numericId = parseInt(id, 10);
  
  switch(categoryPath) {
    case 'attractions':
      return attractions.find(p => p.id === numericId);
    case 'hotels':
      return hotels.find(p => p.id === numericId);
    case 'food':
      return foodPlaces.find(p => p.id === numericId);
    case 'religious':
      return religiousPlaces.find(p => p.id === numericId);
    case 'entertainment':
      return entertainment.find(p => p.id === numericId);
    default:
      // Try to find it everywhere if category is missing or wrong
      return [
        ...attractions, 
        ...hotels, 
        ...foodPlaces, 
        ...religiousPlaces, 
        ...entertainment
      ].find(p => p.id === numericId);
  }
};
