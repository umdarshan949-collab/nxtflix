const SIGN_IN_URL = "https://serverless-api-teal.vercel.app/api/auth/signin";

/**
 * Signs a user in against the live auth API.
 * Resolves with the JWT token string on success.
 * Throws an Error with a user-facing message on failure.
 */
export async function signIn(email, password) {
  const response = await fetch(SIGN_IN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  let body = {};
  try {
    body = await response.json();
  } catch {
    // response had no JSON body — fall through to generic error below
  }

  if (!response.ok) {
    throw new Error(body.message || body.error || "Unable to sign in.");
  }

  const token =
    body.jwt_token ||
    body.token ||
    body.jwtToken ||
    body?.data?.token ||
    body?.data?.jwt_token ||
    body?.data?.jwtToken;

  if (!token) {
    throw new Error("Sign in succeeded but no token was returned.");
  }

  return token;
}
