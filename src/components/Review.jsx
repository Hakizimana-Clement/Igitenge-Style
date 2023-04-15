import React, { useEffect, useState } from "react";
// template
import ReviewDetails from "./ReviewDetails";
const Review = () => {
  /////////////////////////// FETCH DATA FROM BACKEND /////////////////////////////////////
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("/api/reviews");
      const json = await response.json();

      if (response.ok) {
        setReviews(json);
      }
    };

    fetchReviews();
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {reviews &&
        reviews.map((review) => (
          <ReviewDetails key={review._id} review={review} />
        ))}
    </>
  );
};

export default Review;
