import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import Link from "next/link";
import styles from "../../styles/carousel.module.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = ({ movies }) => {
  const moviesEl = movies
    .map((movie, index) => {
      return (
        <Slide
          className={styles["carousel-item"]}
          index={index}
          key={movie.title + index}
        >
          <div className={styles["carousel-item-text-container"]}>
            <h3 className={styles["carousel-item-header"]}>{movie.title}</h3>
            <Link href={`/movies/${movie._id}`}>
              <span className={styles["carousel-item-button"]}>Biljetter</span>
            </Link>
          </div>
          <img
            className={styles["carousel-item-image"]}
            src={movie.image}
            alt={movie.title + " Poster"}
          />
        </Slide>
      );
    })
    .slice(0, 3);

  return (
    <CarouselProvider
      className={styles["carousel"]}
      naturalSlideWidth={800}
      naturalSlideHeight={400}
      totalSlides={3}
      infinite={true}
      touchEnabled={true}
      dragEnabled={true}
    >
      <Slider>{moviesEl}</Slider>
      <ButtonBack className={styles["carousel-arrow-prev"]}></ButtonBack>
      <ButtonNext className={styles["carousel-arrow-next"]}></ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
