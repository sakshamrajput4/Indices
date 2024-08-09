// src/components/ReviewList.js
import React, { useState, useEffect } from "react";
import ReviewHighlighter from "./ReviewHighlighter";
import reviewsData from "../data/reviewsData.json";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i key={i} className={`fa-star ${i <= rating ? "fas" : "far"}`}></i>
      );
    }
    return <span className="stars">{stars}</span>;
  };

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={index} className="user-data">
          <i
            className="fas fa-user"
            id="user"
            style={{ marginRight: "10px" }}
          ></i>
          <div className="review-item">
            <div className="heading">
              <p className="reviewer-name">
                {review.reviewer_name}
                <span className="wrote-at"> wrote at </span>
                {review.source.name}
              </p>
              <div className="Font-Item">
                <i className="fas fa-user-plus icon"></i>
                <i className="fa-regular fa-bookmark icon" ></i>
                <i className="fa-solid fa-ellipsis icon"></i>
              </div>
            </div>
            <div className="starAndDate">
              <span className="stars">
                {renderStars(review.rating_review_score)}
              </span>
              <p className="date">{review.date}</p>
            </div>
            <ReviewHighlighter
              content={review.content}
              analytics={review.analytics}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
