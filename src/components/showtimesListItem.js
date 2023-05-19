import Link from "next/link";

const showtimesListItem = ({ showtime, movies }) => {
  const { id, time, movieName } = showtime;
  const movie = movies.find((movie) => movie.title === movieName);
  const { image, length } = movie;
  return (
    <>
      <li>
        <Link
          href={{
            pathname: "/booking",
            query: {
              showtimeId: showtime["_id"],
              showtimeSalong: showtime.salong,
              showtimeDate: showtime.time,
              title: movieName,
              poster: image,
              length: length
            }
          }}
          as="/booking"
        >
          {new Date(time).toLocaleTimeString("sv-SE", {
            hour: "numeric",
            minute: "numeric"
          }) +
            " - " +
            movieName}
        </Link>
      </li>
    </>
  );
};

export default showtimesListItem;
