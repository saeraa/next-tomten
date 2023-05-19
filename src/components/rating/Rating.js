import { useState } from "react";
import RatingComponent from "./RatingComponent";
import styles from "@/styles/reviews.module.scss";

const Rating = (props) => {
  const [hovering, setHovering] = useState(false);
  const [hoveringIndex, setHoveringIndex] = useState(0);

  let rating = [];
  for (let i = 1; i < 6; i++) {
    if (hovering) {
      if (i <= hoveringIndex) {
        rating.push(
          <RatingComponent
            id={i}
            setRating={props.setRating}
            setHovering={setHovering}
            setHoveringIndex={setHoveringIndex}
            active={true}
            key={i}
          />
        );
      } else {
        rating.push(
          <RatingComponent
            id={i}
            setRating={props.setRating}
            setHovering={setHovering}
            setHoveringIndex={setHoveringIndex}
            key={i}
          />
        );
      }
    } else {
      if (i <= props.rating) {
        rating.push(
          <RatingComponent
            id={i}
            active={true}
            setRating={props.setRating}
            setHovering={setHovering}
            setHoveringIndex={setHoveringIndex}
            key={i}
          />
        );
      } else {
        rating.push(
          <RatingComponent
            id={i}
            setRating={props.setRating}
            setHovering={setHovering}
            setHoveringIndex={setHoveringIndex}
            key={i}
          />
        );
      }
    }
  }

  return <div className={styles.postReviewRating}>{rating}</div>;
};

export default Rating;
