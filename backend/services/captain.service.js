import captainModel from "../models/Captain.model.js";

export const createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fileds are required ");
  }

  const captain = captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle:{
        color,
        plate,
        capacity,
        vehicleType
    }
  });

  return captain;
};
