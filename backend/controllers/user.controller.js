import BlacklistedToken from "../models/BlacklistToken.model.js";
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
    const isUserExist = await userModel.findOne({email})
    if(isUserExist){
        return res.status(400).json({message:"User already exist "})
    }
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
    res.cookie('token',token,{
      httpOnly:true,
      secure:process.env.NODE_ENV === 'production',
      maxAge:360000
    })
    res.status(201).json({ token, user });
    next();
  } catch (err) {
    console.log(err);
  }
}

export async function getUserProfile(req,res,next) {
  res.status(200).json(req.user)
}

export async function logoutUser (req,res,next){
  res.clearCookie("token")
  const token = req.cookies.token || req.headers.authorization.split(' ')[1]
  await BlacklistedToken.create({token})
  res.status(200).json({message:"Logged out "})
} 