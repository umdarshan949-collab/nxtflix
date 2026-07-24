import { Navigate, useNavigate, useParams } from "react-router-dom";
import movies from "../../data/movies.js";
import { useWatchLater } from "../../context/WatchLaterContext.jsx";
import "./index.css";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isInWatchLater, toggleWatchLater } = useWatchLater();

  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return <Navigate to="/not-found" replace />;
  }

  const saved = isInWatchLater(movie.id);

  return (
    <main className="details">
      <div
        className="details__backdrop"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="details__backdrop-fade" />
      </div>

      <div className="container details__content">
        <button
          type="button"
          className="details__back"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </button>

        <div className="details__panel">
          <img
            src={movie.poster}
            alt={movie.title}
            className="details__poster"
          />

          <div className="details__info">
            <h1 className="details__title">{movie.title}</h1>

            <div className="details__meta">
              <span className="details__genre-tag">{movie.genre}</span>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
              <span className="details__rating">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L2 9.2l7.1-.6z"
                  />
                </svg>
                {movie.rating}
              </span>
            </div>

            <p className="details__overview">{movie.overview}</p>

            <button
              type="button"
              className={`details__watch-later${
                saved ? " details__watch-later--active" : ""
              }`}
              onClick={() => toggleWatchLater(movie)}
            >
              {saved ? "✓ Added to Watch Later" : "+ Watch Later"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
