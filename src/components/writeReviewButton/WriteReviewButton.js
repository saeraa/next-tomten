import { useContext, useState, useRef, useEffect } from "react";
import { LoggedInContext } from "@/pages/_app";
import styles from "@/styles/reviews.module.scss";
import Rating from "../rating/Rating";
import { getCookie } from "cookies-next";

const WriteReviewButton = (props) => {
  const [active, setActive] = useState(false);
  const [rating, setRating] = useState(0);
  const [alreadyPosted, setPosted] = useState(false);
  const [once, setOnce] = useState(false);
  const {
    isLoggedIn,
    username,
    setDisplayPopup,
    setPopupMessage,
    setPopupTitle
  } = useContext(LoggedInContext);
  const commentRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn && !once) {
      const movieId = window.location.pathname.split("/")[2];
      getData(movieId, username);
      setOnce(true);
    }
    async function getData(movieId, username) {
      const res = await fetch("/api/reviews/" + movieId + "/" + username);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const hasWritten = await res.json();
      if (hasWritten.length == 0) {
        return;
      } else {
        setPosted(true);
      }
    }
  });

  const clickHandler = () => {
    setActive(true);
  };

  const closeReviewPopup = (e) => {
    if (
      e.target.className.includes("reviews_reviewPopupContainer") ||
      e.target.id.includes("closeIcon")
    ) {
      setRating(0);
      setActive(false);
    }
  };

  const postReview = async () => {
    setActive(false);
    setRating(0);
    const review = {
      author: username,
      rating: rating,
      comment: commentRef.current.value,
      movieId: window.location.pathname.split("/")[2]
    };
    const resp = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        Cookie: getCookie("session"),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(review)
    });
    if (resp.status == 201) {
      setPosted(true);
      props.setPosted(true);
      setDisplayPopup(true);
      setPopupTitle("Din recension är nu inskickad, " + username + "!");
      setPopupMessage(
        "Tack för att du tog dig tid och skrev en recension. Det hjälper våra besökare, samt gör tomten glad!"
      );
    }
  };

  return isLoggedIn ? (
    alreadyPosted ? (
      <p className={styles.loginFirst}>
        Du har redan skrivit recension för denna film.
      </p>
    ) : (
      <div className={styles.review}>
        {!active && (
          <button className={styles.writeReviewButton} onClick={clickHandler}>
            Skriv recension
          </button>
        )}
        {active && (
          <div
            className={styles.reviewPopupContainer}
            onClick={closeReviewPopup}
          >
            <div className={styles.reviewPopup}>
              <i
                className="fa fa-times-circle"
                id={styles.closeIcon}
                onClick={closeReviewPopup}
              ></i>
              <h2>
                Du skriver en recension för <br></br>
                <span>{props.title}</span>
              </h2>
              <div className={styles.ratingContainer}>
                <label>Betyg:</label>
                <Rating rating={rating} setRating={setRating} />
              </div>
              <label htmlFor="comment" id={styles.commentLabel}>
                Skriv en kommentar: (Valfritt)
              </label>
              <textarea ref={commentRef} id="comment" rows="5"></textarea>
              <button onClick={postReview}>Skicka din recension</button>
            </div>
          </div>
        )}
      </div>
    )
  ) : (
    <p className={styles.loginFirst}>
      För att skriva en recension behöver du <span>logga in</span> först!
    </p>
  );
};

export default WriteReviewButton;
