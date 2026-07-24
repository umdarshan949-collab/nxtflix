import { Link } from "react-router-dom";
import { useWatchLater } from "../../context/WatchLaterContext.jsx";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import "./index.css";

export default function WatchLater() {
  const { watchLater } = useWatchLater();

  return (
    <main className="container watch-later">
      <h1 className="watch-later__title">Watch Later</h1>

      {watchLater.length === 0 ? (
        <div className="empty-state">
          <h3>Your Watch Later list is empty.</h3>
          <Link to="/">Browse Movies</Link>
        </div>
      ) : (
        <div className="movie-grid">
          {watchLater.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </main>
  );
}
