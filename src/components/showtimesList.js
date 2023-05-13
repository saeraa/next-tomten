import ShowtimesListDay from "./showtimesListDay";
import styles from "@/styles/asideShowTimes.module.scss";

const showtimesList = ({ showtimes }) => {
  return (
    <>
      <aside className={styles["showtime"]}>
        <h2>VISNINGSTIDER</h2>
        <div>
          {showtimes.map((showtime) => (
            <ShowtimesListDay
              showtime={showtime}
              key={showtime["_id"] + " " + Math.random()}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default showtimesList;
