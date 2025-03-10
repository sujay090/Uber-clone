import express from "express";
import { body } from "express-validator";
import { captainProfile, loginCaptain, logoutCaptain, registerCaptain } from "../controllers/captaion.controller.js";
import { authCaptain } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register", [
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("email").isEmail().withMessage("invalid Email"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("password must be at least 3 characters long"),
  body('vehicle.color').isLength({min:3}).withMessage("color must be at least 3 characters long"),
  body('vehicle.plate').isLength({min:3}).withMessage("plate must be at least 3 characters long"),
  body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be at least 1 "),
  body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid vehicle type ")
],registerCaptain);

router.post("/login",[
    body("email").isEmail().withMessage("invalid Email"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("password must be at least 3 characters long"),
],loginCaptain)


router.get("/profile",authCaptain,captainProfile)
router.get("/logout",authCaptain,logoutCaptain)


export default router;
