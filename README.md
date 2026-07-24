# NXTFLIX

A movie streaming discovery app — browse, filter, and save movies to a Watch
Later list. Built with React 19, React Router 7, and Vite 7.

## Features

- Secure sign in against a live auth API, session kept in a `jwt_token` cookie
- Protected routes for Home, Movie Details, and Watch Later
- Trending Now and Fresh Releases carousels, auto-scrolling in opposite
  directions and pausing on hover/focus
- Genre filter chips over a responsive movie grid
- Movie details page with backdrop, poster, and a Watch Later toggle
- Watch Later list persisted to `localStorage`
- Custom 404 page for unmatched routes and unknown movie ids

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

### Build

```bash
npm run build
```

Output is written to `build/`.

## Test credentials

| Field    | Value             |
| -------- | ----------------- |
| Email    | admin@example.com |
| Password | admin123          |

## Tech stack

- React 19
- React Router DOM 7
- Vite 7
- js-cookie (session storage)
- Plain CSS (per-component `index.css` + global tokens in `src/index.css`)

## Project structure

```
src/
  api/auth.js                 sign-in API call
  context/WatchLaterContext   Watch Later state, backed by localStorage
  components/
    Header/                   sticky nav, Watch Later badge, logout
    MovieCard/                poster card used in grids
    MovieCarousel/            auto-scrolling carousel
    GenreFilterBar/           genre chip filter
    ProtectedRoute/           jwt_token cookie guard
  data/movies.js               static catalog of 50 movies + GENRES
  pages/
    SignIn/                   /login
    Home/                     /
    MovieDetails/             /movies/:id
    WatchLater/               /watch-later
    NotFound/                 /not-found and catch-all
```
