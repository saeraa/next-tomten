import Link from "next/link";

const showtimesListItem = ({ showtime }) => {
  const { id, time, movieName } = showtime;
  return (
    <>
      <li>
        <Link href={`/booking/${id}`}>
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
