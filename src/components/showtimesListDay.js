import ShowtimesListItem from "./showtimesListItem";

const showtimesListDay = ({ showtime, movies }) => {
  const date = new Date(showtime.date).toLocaleDateString("sv-SE", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
  return showtime.showtimes.length > 0 ? (
    <>
      <h3>{date.toUpperCase()}</h3>
      <ul>
        {showtime.showtimes.map((time) => (
          <ShowtimesListItem
            showtime={time}
            key={Math.random() * 345325123}
            movies={movies}
          />
        ))}
      </ul>
    </>
  ) : null;
};

export default showtimesListDay;
