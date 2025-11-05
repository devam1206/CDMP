// utils/auth.js
const jwt = require("jsonwebtoken");

// Do not fall back to an in-repo secret. Require JWT_SECRET from environment.
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.warn("WARNING: JWT_SECRET is not set. Protected routes will fail until you set it in CDMP-backend/.env or environment variables.");
}

function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader)
      return res.status(401).json({ message: "Authorization header missing" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token missing" });

    // Verify and decode
    if (!JWT_SECRET) {
      console.error("JWT verification attempted but JWT_SECRET is not set");
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach decoded user info to req
    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}

module.exports = authenticateToken;
