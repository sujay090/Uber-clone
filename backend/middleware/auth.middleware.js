import BlacklistedToken from "../models/BlacklistToken.model.js";
import captainModel from "../models/Captain.model.js";
import userModel from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized " });
  }

  const isBlaklisted = await BlacklistedToken.findOne({ token });
  if (isBlaklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export async function authCaptain(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const isBlaklisted = await BlacklistedToken.findOne({ token });
    if (isBlaklisted) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    next()
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
}
