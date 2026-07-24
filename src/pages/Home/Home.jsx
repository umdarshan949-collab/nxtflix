import { useMemo, useState } from "react";
import movies from "../../data/movies.js";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel.jsx";
import GenreFilterBar from "../../components/GenreFilterBar/GenreFilterBar.jsx";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import "./index.css";

export default function Home() {
  const [activeGenre, setActiveGenre] = useState("All");

  const trendingNow = useMemo(
    () =>
      [...movies]
        .sort((a, b) => Number(b.rating) - Number(a.rating))
        .slice(0, 16),
    []
  );

  const freshReleases = useMemo(
    () => movies.filter((movie) => movie.year >= 2015).slice(0, 16),
    []
  );

  const filteredMovies = useMemo(
    () =>
      activeGenre === "All"
        ? movies
        : movies.filter((movie) => movie.genre === activeGenre),
    [activeGenre]
  );

  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Discover your next favourite</h1>
          <p className="hero__subtitle">
            Browse {movies.length} titles across eight genres, and keep track
            of what you want to watch with your own Watch Later list.
          </p>
        </div>
      </section>

      <div className="sprocket-rule" aria-hidden="true" />

      <MovieCarousel
        title="Trending Now"
        movies={trendingNow}
        direction="left"
      />
      <MovieCarousel
        title="Fresh Releases"
        movies={freshReleases}
        direction="right"
      />

      <section className="container home__catalog">
        <h2 className="home__catalog-title">Browse the catalog</h2>
        <GenreFilterBar
          activeGenre={activeGenre}
          onSelectGenre={setActiveGenre}
        />

        {filteredMovies.length === 0 ? (
          <div className="empty-state">
            <h3>No movies found for this genre.</h3>
          </div>
        ) : (
          <div className="movie-grid">
            {filteredMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
