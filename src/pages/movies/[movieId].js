import styles from "@/styles/movie.module.scss";
import { getMovie, getShowtimesForMovie } from "@/utils/dbFunctions";
import dbConnect from "@/utils/dbConnect";
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
  const showtimesList = showtimes.map((showtime) => {
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
  });

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
        <img src={imageURL} alt={title} className={styles["movie-poster"]} />
        <div className={styles["movie-showtimes"]}>
          <hr />
          <h2>Visningstider</h2>
          <ul className={styles["movie-showtimes-list"]}>{showtimesList}</ul>
        </div>

        {/* <div className="add-review">
          <button className="add-review-button">Skriv en recension</button>
          <div className="add-review-content">
            <form>
              <div className="add-review-logged-out">
                <button type="button" id="login" className="add-review-login">
                  Logga in
                </button>
                <label for="username">Användarnamn:</label>{" "}
                <input type="text" id="username" autocomplete="username" />
                <br />
                <label for="password">Lösenord:</label>{" "}
                <input
                  type="password"
                  id="password"
                  autocomplete="current-password"
                />
              </div>
              <div className="add-review-logged-in hide">Du är inloggad!</div>

              <hr />
              <label for="name">Namn:</label>
              <input type="text" id="name" name="name" />
              <br />

              <label for="rating">Betyg:</label>
              <input type="number" id="rating" name="rating" />
              <br />

              <label for="comment">Skriv en kommentar: (Valfritt)</label>
              <br />
              <textarea id="comment" cols="25" rows="4"></textarea>
              <p className="add-review-not-logged-warning hide">
                Du måste logga in först!
              </p>
            </form>
            <button className="submit-review">Skicka recension</button>
          </div>
        </div>

        <div id="rating-container-element">
          <p className="movie-rating"></p>
          <ul className="movie-rating-hats"></ul>
        </div>
      </section>
      <section className="movie-details-reviews">
        <h2>Recensioner</h2>
        <ul id="reviewList"></ul>
        <button type="button" id="buttonPrev"></button>
        <button type="button" id="buttonNext"></button>*/}
      </section>
    </>
  );
};

export default Movie;
