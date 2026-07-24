import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useWatchLater } from "../../context/WatchLaterContext.jsx";
import "./index.css";

export default function Header() {
  const { watchLater } = useWatchLater();
  const navigate = useNavigate();

  function handleLogout() {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  }

  return (
    <div className="header-wrap">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand">
            NXTFLIX
          </Link>

          <nav className="site-header__nav">
            <Link to="/" className="site-header__link">
              Home
            </Link>
            <Link to="/watch-later" className="site-header__link">
              Watch Later
              {watchLater.length > 0 && (
                <span className="site-header__badge">
                  {watchLater.length}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="site-header__logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
      <div className="sprocket-rule" aria-hidden="true" />
    </div>
  );
}
