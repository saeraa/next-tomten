import styles from "@/styles/reviews.module.scss";

export const Review = (props) => {
  let ratingToReturn = [];
  for (let i = 0; i < 5; i++) {
    if (props.rating > i) {
      ratingToReturn.push(<label key={i} className={styles.hatFilled}></label>);
    } else {
      ratingToReturn.push(
        <label key={i} className={styles.hatUnfilled}></label>
      );
    }
  }

  return (
    <div className={styles.displayReview}>
      <label>Användare: </label>
      <span className={styles.author}> {props.author}</span>
      <div className={styles.rating}>
        <label className={styles.ratingLabel}> Betyg:</label>
        <div className={styles.ratingHats}>{ratingToReturn}</div>
      </div>
      <p>{props.comment}</p>
    </div>
  );
};
