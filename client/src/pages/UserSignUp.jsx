import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
const UserSignUp = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: formValue.firstName,
        lastname: formValue.lastName,
      },
      email: formValue.email,
      password: formValue.password,
    };

    const respose = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if (respose.status === 201) {
      const data = respose.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/start");
    }
    setFormValue({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  const handelChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber logo"
          />
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg mb-2 ">What's your First Name </h3>
            <input
              name="firstName"
              onChange={handelChange}
              value={formValue.firstName}
              className="bg-[#eeee] mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base"
              type="text"
              required
              placeholder="First Name"
            />
            <h3 className="text-lg mb-2 ">What's your Last Name </h3>
            <input
              name="lastName"
              onChange={handelChange}
              value={formValue.lastName}
              className="bg-[#eeee] mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base"
              type="text"
              required
              placeholder="Last Name"
            />
            <h3 className="text-lg mb-2 ">What's your Email </h3>
            <input
              name="email"
              onChange={handelChange}
              value={formValue.email}
              className="bg-[#eeee] mb-4 rounded px-4 py-2  w-full text-lg placeholder:text-base"
              type="email"
              required
              placeholder="email@expample.com"
            />
            <h3 className="text-xl mb-2">Enter Password </h3>
            <input
              name="password"
              onChange={handelChange}
              value={formValue.password}
              className="bg-[#eeee] mb-4 rounded px-4 py-2  w-full text-lg placeholder:text-base"
              type="password"
              required
              placeholder="Password "
            />
            <button className="bg-[#111] text-[#fff] font-semibold mb-2 rounded px-4 py-2 w-full text-lg">
              Sign Up
            </button>
          </form>
          <p className="text-center">
            Alredy here?{" "}
            <Link to={"/login"} className="text-blue-500">
              Go to Login Page
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
            officia expedita beatae odit tenetur,
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
