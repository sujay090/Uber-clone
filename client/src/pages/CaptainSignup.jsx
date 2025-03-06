import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
const CaptainSignup = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    color: "",
    plate: "",
    capacity: "",
    vehicleType: "",
  });

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname: formValue.firstName,
        lastname: formValue.lastName,
      },
      email: formValue.email,
      password: formValue.password,
      vehicle: {
        color: formValue.color,
        plate: formValue.plate,
        capacity: formValue.capacity,
        vehicleType: formValue.vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      newCaptain
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain)
      localStorage.setItem("captainToken", data.token);
      navigate("/captain-home");
    }
    setFormValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    });
  };
  const handelChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-sm mb-2 ">What's your Full Name</h3>
          <div className="flex gap-2">
            <input
              name="firstName"
              onChange={handelChange}
              value={formValue.firstName}
              className="bg-[#eeee] mb-4 rounded px-2 py-2 w-full text-lg placeholder:text-base"
              type="text"
              required
              placeholder="First Name"
            />
            <input
              name="lastName"
              onChange={handelChange}
              value={formValue.lastName}
              className="bg-[#eeee] mb-4 rounded px-2 py-2 w-full text-lg placeholder:text-base"
              type="text"
              required
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-sm mb-2 ">What's your Email </h3>
          <input
            name="email"
            onChange={handelChange}
            value={formValue.email}
            className="bg-[#eeee] mb-4 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@expample.com"
          />
          <h3 className="text-sm mb-2">Enter Password </h3>
          <input
            name="password"
            onChange={handelChange}
            value={formValue.password}
            className="bg-[#eeee] mb-4 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="Password "
          />
          <div>
            <div className="flex gap-1">
              <input
                name="color"
                onChange={handelChange}
                value={formValue.color}
                className="bg-[#eeee] mb-4 rounded px-4 py-2  w-full text-lg placeholder:text-base"
                type="text"
                required
                placeholder="Vehicle color "
              />
              <input
                name="plate"
                onChange={handelChange}
                value={formValue.plate}
                className="bg-[#eeee] mb-4 rounded px-4 py-2  w-full text-lg placeholder:text-base"
                type="text"
                required
                placeholder="Vehicle Plate "
              />
            </div>
            <div className="flex gap-1">
              <input
                name="capacity"
                onChange={handelChange}
                value={formValue.capacity}
                className="bg-[#eeee] mb-4 w-1/2 rounded px-4 py-2  text-lg placeholder:text-base"
                type="number"
                required
                placeholder="Capacity"
              />
              <select
                className="bg-[#eeee] h-11 py-2 w-1/2 rounded"
                name="vehicleType"
                id=""
                value={formValue.vehicleType}
                onChange={handelChange}
              >
                <option value="" hidden>Select Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>
          <button className="bg-[#111] text-[#fff] font-semibold mb-2 rounded px-4 py-4 w-full text-sm">
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Alredy here?{" "}
          <Link to={"/captain-login"} className="text-blue-500">
            Go to Login Page
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel
          nulla, neque possimus necessitatibus qui similique voluptatum
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
