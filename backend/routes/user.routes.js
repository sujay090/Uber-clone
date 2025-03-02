import express from "express";
import { body } from "express-validator";
import { registerUser } from "../controllers/user.controller.js";
const router = express.Router();
router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("email").isEmail().withMessage("invalid Email"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("password must be at least 3 characters long"),
  ],
  registerUser
);
export default router;
