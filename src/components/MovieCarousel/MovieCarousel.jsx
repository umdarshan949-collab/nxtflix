import { Link } from "react-router-dom";
import "./index.css";

/**
 * Horizontally auto-scrolling carousel.
 * direction="left"  -> track drifts leftward
 * direction="right" -> track drifts rightward
 * The movie list is duplicated once so the loop reads as endless.
 */
export default function MovieCarousel({ title, movies, direction = "left" }) {
  const loopedMovies = [...movies, ...movies];

  return (
    <section className="carousel">
      <div className="container">
        <h2 className="carousel__title">{title}</h2>
      </div>
      <div className="carousel__viewport">
        <div className={`carousel__track carousel__track--${direction}`}>
          {loopedMovies.map((movie, index) => (
            <Link
              to={`/movies/${movie.id}`}
              className="carousel__item"
              key={`${movie.id}-${index}`}
              tabIndex={index < movies.length ? 0 : -1}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="carousel__poster"
                loading="lazy"
              />
              <div className="carousel__caption">
                <p className="carousel__caption-title">{movie.title}</p>
                <p className="carousel__caption-meta">
                  {movie.genre} · {movie.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
