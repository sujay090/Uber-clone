import { validationResult } from "express-validator";
import captainModel from "../models/Captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import BlacklistedToken from "../models/BlacklistToken.model.js";

export async function registerCaptain(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { fullname, email, password, vehicle } = req.body;
    const isCaptainExist = await captainModel.findOne({ email });
    if (isCaptainExist) {
      return res.status(400).json({ message: "Captain already exist " });
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType, 
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
    next();
  } catch (err) {
    console.log(err);
  }
}

export async function loginCaptain(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(401).json({ message: "Invalid Email and password " });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid email or password" });
    }

    const token = captain.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, captain });
    next();
  } catch (err) {
    console.log(err);
  }
}

export async function captainProfile(req, res, next) {
  res.status(200).json(req.captain);
}

export async function logoutCaptain(req, res, next) {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await BlacklistedToken.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out " });
  next();
}
