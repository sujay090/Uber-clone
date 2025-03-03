import userModel from "../models/User.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";
export async function registerUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { fullname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);
    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
    next();
  } catch (err) {
    console.log(err);
  }
}


export async function loginUser(req,res,next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({email}).select('+password')
    if(!user){
      return res.status(401).json({message:"Invalide email or password "})
    }

    const compareData = await user.comparePassword(password);
    if(!compareData){
      return res.status(401).json({message:'Invalid emial or password'})
    }
    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
    next();
  } catch (err) {
    console.log(err);
  }
}