import { useRouter } from "next/router";
import styles from "@/styles/movie.module.scss";

export async function getServerSideProps(context) {
  return {
    props: {
      showdate: "2023-56-2",
      showtime: "15:40",
      salon: "B",
      length: 120,
      title: "an exciting movie",
      details: "a movie",
      genre: "action",
      director: "someone",
      actors: "brad pitt",
      country: "sudan",
      year: "2015",
      ageLimit: "2",
      imageURL:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
    }
  };
}

const Movie = ({
  title,
  details,
  genre,
  director,
  actors,
  country,
  year,
  ageLimit,
  imageURL,
  showdate,
  showtime,
  salon,
  length
}) => {
  const router = useRouter();
  const { movieId } = router.query;
  return (
    <>
      <section className={styles["movie-details"]}>
        <div>
          <h1 className={styles["movie-title"]}>{movieId}</h1>
          <p className={styles["movie-description"]}>{details}</p>
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
          <ul className={styles["movie-showtimes-list"]}>
            <li>
              {showdate}
              <br /> {showtime}{" "}
              <span>
                {salon}
                <br /> {length}
              </span>
              <button className={styles["movie-tickets"]}>movie-tickets</button>
            </li>
          </ul>
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
