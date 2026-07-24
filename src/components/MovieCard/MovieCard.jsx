import { Link } from "react-router-dom";
import "./index.css";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card">
      <div className="movie-card__poster-wrap">
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-card__poster"
          loading="lazy"
        />
        <span className="movie-card__rating">
          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L2 9.2l7.1-.6z"
            />
          </svg>
          {movie.rating}
        </span>
        <div className="movie-card__overlay">
          <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
            <circle
              cx="12"
              cy="12"
              r="11"
              fill="rgba(10,11,15,0.55)"
              stroke="var(--gold)"
              strokeWidth="1.2"
            />
            <path fill="var(--gold)" d="M10 8l7 4-7 4z" />
          </svg>
        </div>
      </div>
      <div className="movie-card__body">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__meta">
          {movie.genre} · {movie.year} · {movie.duration}
        </p>
      </div>
    </Link>
  );
}
