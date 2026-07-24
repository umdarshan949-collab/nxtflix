import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "nxtflix_watch_later";

const WatchLaterContext = createContext(null);

function readInitialList() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function WatchLaterProvider({ children }) {
  const [watchLater, setWatchLater] = useState(readInitialList);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(watchLater));
  }, [watchLater]);

  function isInWatchLater(id) {
    return watchLater.some((movie) => movie.id === id);
  }

  function toggleWatchLater(movie) {
    setWatchLater((prev) =>
      prev.some((item) => item.id === movie.id)
        ? prev.filter((item) => item.id !== movie.id)
        : [...prev, movie]
    );
  }

  return (
    <WatchLaterContext.Provider
      value={{ watchLater, isInWatchLater, toggleWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
}

export function useWatchLater() {
  const ctx = useContext(WatchLaterContext);
  if (!ctx) {
    throw new Error("useWatchLater must be used within a WatchLaterProvider");
  }
  return ctx;
}
