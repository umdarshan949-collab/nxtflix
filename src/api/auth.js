/**
 * Dummy authentication.
 * Allows any non-empty email and password.
 */

export async function signIn(email, password) {
  // Check if email or password is empty
  if (!email.trim() || !password.trim()) {
    throw new Error("Please enter both email and password.");
  }

  // Simulate API delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return a dummy JWT token
  return "dummy-jwt-token";
}