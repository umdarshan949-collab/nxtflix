import { GENRES } from "../../data/movies.js";
import "./index.css";

export default function GenreFilterBar({ activeGenre, onSelectGenre }) {
  return (
    <div className="genre-bar" role="tablist" aria-label="Filter by genre">
      {GENRES.map((genre) => {
        const isActive = genre === activeGenre;
        return (
          <button
            key={genre}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`genre-chip${isActive ? " genre-chip--active" : ""}`}
            onClick={() => onSelectGenre(genre)}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}
