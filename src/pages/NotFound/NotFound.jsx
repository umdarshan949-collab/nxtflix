import { Link } from "react-router-dom";
import "./index.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__sprocket" aria-hidden="true">
        <span className="sprocket-rule" />
        <span className="sprocket-rule" />
      </div>
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page Not Found</h1>
      <p className="not-found__text">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="not-found__link">
        Back to Home
      </Link>
    </main>
  );
}
