// services/auth.service.js - Authentication business logic
import { auth } from "@/auth";

export class AuthService {
  // Get current session
  static async getCurrentSession() {
    try {
      const session = await auth();
      return session;
    } catch (error) {
      console.error("Get session error:", error);
      return null;
    }
  }

  // Get custom token from session
  static async getCustomToken() {
    try {
      const session = await this.getCurrentSession();
      return session?.customToken || null;
    } catch (error) {
      console.error("Get token error:", error);
      return null;
    }
  }

  // Check if user is authenticated
  static async isAuthenticated() {
    const token = await this.getCustomToken();
    return token !== null;
  }

  // Validate token and return user info
  static async validateToken() {
    const token = await this.getCustomToken();

    if (!token) {
      return { valid: false, user: null };
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/validate`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        return { valid: true, user: userData };
      } else {
        return { valid: false, user: null };
      }
    } catch (error) {
      console.error("Token validation error:", error);
      return { valid: false, user: null };
    }
  }

  // Get user permissions/access level
  static async getUserAccessLevel() {
    const token = await this.getCustomToken();

    if (!token) {
      return "guest";
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/permissions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data.accessLevel || "user";
      }
      return "user";
    } catch (error) {
      console.error("Get access level error:", error);
      return "user";
    }
  }

  // Require authentication (throws error if not authenticated)
  static async requireAuth() {
    const token = await this.getCustomToken();

    if (!token) {
      throw new Error("Authentication required");
    }

    return token;
  }

  // Login with Google (business logic)
  static async loginWithGoogle(userInfo, googleAccessToken) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userInfo.email,
            name: userInfo.name,
            googleId: userInfo.id,
            googleAccessToken: googleAccessToken,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        return {
          success: true,
          token: data.token,
          userId: data.userId,
          user: data.user,
        };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          error: errorData.message || "Login failed",
        };
      }
    } catch (error) {
      console.error("Google login error:", error);
      return {
        success: false,
        error: "Network error during login",
      };
    }
  }
}
