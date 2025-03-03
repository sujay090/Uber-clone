import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "must name must be least 3 chracters long ❌"],
      maxlength: 255,
    },
    lastname: {
      type: String,
      minlength: [3, "must name must be least 3 chracters long ❌"],
      maxlength: 255,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+|.|S+$/, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 charecters long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "plate must be at least 3 charecter "],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must at least 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },

  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function (){
    const token  = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword = async function (password) {
   return await bcrypt.hash(password,10)
}

const captainModel = mongoose.model('captain',captainSchema)

export default captainModel