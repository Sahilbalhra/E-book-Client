import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const StarDrawing = (
  <path
    d="M2.287,47.815l23.096,19.578L18.2,96.831c-1.411,5.491,4.648,9.998,9.575,6.901L53.55,87.813l25.774,15.916
		c4.79,2.955,10.844-1.408,9.576-6.902l-7.184-29.435l23.099-19.579c4.363-3.661,2.111-10.844-3.662-11.267l-30.282-2.255
		L59.464,6.266c-2.112-5.211-9.577-5.211-11.832,0L36.225,34.292L5.944,36.547C0.174,37.113-2.081,44.154,2.287,47.815z"
  />
);

const customStyles = {
  itemShapes: StarDrawing,
  activeFillColor: "#d78d60",
  inactiveFillColor: "#e3b28e",
};

interface IStarRatingProps {
  maxWidth?: number;
  value?: number;
  readOnly?: boolean;
  onChange?: (rating: number) => void;
}

const StarRating: React.FC<IStarRatingProps> = ({
  maxWidth = 120,
  value = 0,
  readOnly = false,
  onChange,
}) => {
  return (
    <Rating
      value={value}
      onChange={onChange}
      style={{ maxWidth: maxWidth }}
      itemStyles={customStyles}
      readOnly={readOnly}
    />
  );
};

export default StarRating;
