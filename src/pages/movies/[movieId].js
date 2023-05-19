import styles from "@/styles/movie.module.scss";
import { getMovie, getShowtimesForMovie } from "@/utils/dbFunctions";
import dbConnect from "@/utils/dbConnect";
import WriteReviewButton from "@/components/writeReviewButton/WriteReviewButton";
import { Reviews } from "@/components/reviews/Reviews";
import { useState } from "react";
import Link from "next/link";

export async function getServerSideProps(context) {
  await dbConnect();

  const { movieId } = context.query;
  const movie = (await getMovie(movieId)) ?? null;

  if (!movie) {
    return {
      notFound: true
    };
  }

  const showtimes = await getShowtimesForMovie(movieId);

  return {
    props: {
      showtimes: JSON.parse(JSON.stringify(showtimes)).sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      ),
      length: movie.length,
      title: movie.title,
      description: movie.description,
      genre: movie.genre.join(", "),
      director: movie.director.join(", "),
      actors: movie.actors.join(", "),
      country: movie.country,
      year: new Date(movie.release).getFullYear(),
      ageLimit: movie.age,
      imageURL: movie.image
    }
  };
}

const Movie = ({
  title,
  description,
  genre,
  director,
  actors,
  country,
  year,
  ageLimit,
  imageURL,
  showtimes,
  length
}) => {
  const [posted, setPosted] = useState(false);
  const showtimesList = showtimes
    .map((showtime) => {
      const date = new Date(showtime.date);
      return (
        <li key={Math.random() * 34231213}>
          {date
            .toLocaleDateString("sv-SE", {
              weekday: "short",
              day: "numeric",
              month: "short"
            })
            .toUpperCase()}
          <br />{" "}
          {date.toLocaleTimeString("sv-SE", {
            hour: "numeric",
            minute: "numeric"
          })}{" "}
          <span>
            {showtime.salong}
            <br /> {length} min
          </span>
          <Link
            href={{
              pathname: "/booking",
              query: {
                showtimeId: showtime["_id"],
                showtimeSalong: showtime.salong,
                showtimeDate: showtime.date,
                title: title,
                poster: imageURL,
                length: length
              }
            }}
            as="/booking"
          >
            <button className={styles["movie-tickets"]}>Biljetter</button>
          </Link>
        </li>
      );
    })
    .slice(0, 10);

  return (
    <>
      <section className={styles["movie-details"]}>
        <div>
          <h1 className={styles["movie-title"]}>{title}</h1>
          <p className={styles["movie-description"]}>{description}</p>
          <hr />
          <p className={styles["movie-genres"]}>{genre}</p>
          <p className={styles["movie-info"]}>
            <strong>Regi: </strong>{" "}
            <span className={styles["movie-director"]}>{director}</span>
            <strong>Skådespelare: </strong>
            <span className={styles["movie-actors"]}>{actors}</span>{" "}
            <strong>Land: </strong>
            <span className={styles["movie-country"]}>
              {country} ({year})
            </span>
            <strong>Åldersgräns: </strong>{" "}
            <span className={styles["movie-age"]}>{ageLimit}</span>
          </p>
        </div>
        <div className={styles["first-row"]}>
          <img src={imageURL} alt={title} className={styles["movie-poster"]} />
          <WriteReviewButton setPosted={setPosted} title={title} />
        </div>
        <div className={styles["movie-showtimes"]}>
          <hr />
          <h2>Visningstider</h2>
          <ul className={styles["movie-showtimes-list"]}>{showtimesList}</ul>
        </div>
        <div className="movie-details-reviews">
          <h2>Recensioner</h2>
          <Reviews setPosted={setPosted} posted={posted} />
        </div>
      </section>
    </>
  );
};

export default Movie;
