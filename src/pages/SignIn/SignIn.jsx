import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { signIn } from "../../api/auth.js";
import "./index.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (Cookies.get("jwt_token")) {
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const token = await signIn(email, password);
      Cookies.set("jwt_token", token, { expires: 7 });
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signin">
      <div className="signin__brand">
        <div className="signin__brand-inner">
          <span className="signin__logo">NXTFLIX</span>
          <p className="signin__tagline">
            Unlimited movies, shows and more. Watch anywhere. Cancel anytime.
          </p>
          <div className="sprocket-rule" aria-hidden="true" />
        </div>
      </div>

      <div className="signin__form-panel">
        <form className="signin__form" onSubmit={handleSubmit} noValidate>
          <h1 className="signin__title">Sign In</h1>

          {error && <div className="signin__error">{error}</div>}

          <label className="signin__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="signin__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <label className="signin__label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="signin__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="signin__submit"
            disabled={loading}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
