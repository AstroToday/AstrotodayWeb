import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingProps {
  value: number;
}
const Ratings = (value: RatingProps) => {
  const roundedValue = Math.round(value.value * 2) / 2;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (roundedValue >= i + 1) {
        stars.push(<FaStar key={i} className="text-primary" />);
      } else if (roundedValue >= i + 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-primary" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-primary" />);
      }
    }
    return stars;
  };
  return <div className="flex items-center">{renderStars()}</div>;
};

export default Ratings;
