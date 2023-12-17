import { cardData, cardDataType } from '@/Types/Home';

const addCardType = (cards: cardData[], type: cardDataType['type']) => {
  return cards.map((card) => ({
    type,
    ...card,
  }));
};
export default addCardType;
