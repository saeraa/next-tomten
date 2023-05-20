import Head from "next/head";
import styles from "@/styles/index.module.scss";
import { getMovies, getShowtimesForIndexPage } from "@/utils/dbFunctions";
import dbConnect from "@/utils/dbConnect";
import Carousel from "@/components/carousel/carousel";
import ShowtimesList from "@/components/showtimesList";
import Link from "next/link";

export async function getServerSideProps(context) {
  await dbConnect();
  const movies = await getMovies();
  const showtimes = await getShowtimesForIndexPage();

  // randomizing the movies shown in the carousel
  const threeNumbers = new Set();
  while (threeNumbers.size < 3) {
    threeNumbers.add(Math.floor(Math.random() * movies.length));
  }
  const carouselArray = [];
  threeNumbers.forEach((number) => carouselArray.push(movies[number]));

  return {
    props: {
      carouselMovies: JSON.parse(JSON.stringify(carouselArray)),
      showtimes: JSON.parse(JSON.stringify(showtimes)),
      movies: JSON.parse(JSON.stringify(movies))
    }
  };
}

export default function Home({ movies, showtimes, carouselMovies }) {
  return (
    <>
      <Head>
        <title>Tomtens Biograf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Carousel movies={carouselMovies} />

        <section className={styles["current-movies"]}>
          <h2 className={styles["current-movies-header"]}>På bion just nu</h2>
          <ul className={styles["current-movies-list"]}>
            {movies.map((movie) => {
              return (
                <Link
                  href={`movies/${movie._id}`}
                  key={movie._id + movie.title}
                >
                  <li className={styles["current-movies-card"]}>
                    <img
                      src={movie.image}
                      alt={`${movie.title} Poster`}
                      className={styles["current-movies-card-image"]}
                    />
                    <h3 className={styles["current-movies-card-title"]}>
                      {movie.title}
                    </h3>
                  </li>
                </Link>
              );
            })}
          </ul>
        </section>

        <ShowtimesList showtimes={showtimes} movies={movies} />
      </main>
    </>
  );
}
