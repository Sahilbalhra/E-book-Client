type Review = {
  user_id: {
    _id: string;
    name: string;
    email: string;
  };
  book_id: string;
  title: string;
  rating: string;
  comment: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export default Review;
