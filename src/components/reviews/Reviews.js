import { Review } from "./Review";
import { useState, useEffect } from "react";
import styles from "@/styles/reviews.module.scss";
import { useContext } from "react";
import { LoggedInContext } from "@/pages/_app";

export const Reviews = (props) => {
  const { handleShowLogInModal, isLoggedIn } = useContext(LoggedInContext);
  const [reviews, setReviews] = useState([]);
  const [once, setOnce] = useState(false);

  const handleLogin = () => {
    window.scrollTo(0, 0);
    handleShowLogInModal();
  };
  if (props.posted && once == true) {
    setOnce(false);
  }
  useEffect(() => {
    if (!once) {
      const movieId = window.location.pathname.split("/")[2];
      getData(movieId);
      props.setPosted(false);
      setOnce(true);
    }
    async function getData(movieId) {
      const res = await fetch("/api/movies/" + movieId + "/reviews");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const reviews = await res.json();
      setReviews(
        reviews.map(
          (review) =>
            (review = (
              <Review
                rating={review.rating}
                comment={review.comment}
                author={review.author}
                key={Math.random() * 34231213}
              />
            ))
        )
      );
    }
  });

  return reviews.length == 0 ? (
    isLoggedIn ? (
      <p className={styles.noReviews} key={Math.random() * 34231213}>
        Tyvärr så finns det inga recensioner att visa.
      </p>
    ) : (
      <p className={styles.noReviews} key={Math.random() * 34231213}>
        Tyvärr så finns det inga recensioner att visa. <br></br>
        <span onClick={handleLogin}>Logga in</span> och var den första som
        skriver
      </p>
    )
  ) : (
    <div className={styles.reviewsContainer}>{reviews}</div>
  );
};
