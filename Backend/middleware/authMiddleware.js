const jwt = require("jsonwebtoken");




const verifytoken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const JWT_SECRET = '123$#@%&00'
    const decoded = jwt.verify(token, JWT_SECRET);

   
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized", error: error.message });
  }
}

module.exports = verifytoken;



