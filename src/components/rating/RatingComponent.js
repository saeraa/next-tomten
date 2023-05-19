import styles from "@/styles/reviews.module.scss";

const RatingComponent = (props) => {
  const clickHandler = (e) => {
    props.setRating(e.target.value);
  };

  const handleMouseLeave = () => {
    props.setHovering(false);
  };

  const handleMouseOver = (e) => {
    props.setHovering(true);
    props.setHoveringIndex(e.target.nextSibling.value);
  };

  return (
    <div>
      {props.active && (
        <label
          htmlFor={props.id}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className={styles.hatFilled}
        ></label>
      )}
      {!props.active && (
        <label
          htmlFor={props.id}
          className={styles.hatUnfilled}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        ></label>
      )}
      <input
        onClick={clickHandler}
        type="radio"
        name="rating"
        value={props.id}
        id={props.id}
      />
    </div>
  );
};

export default RatingComponent;
