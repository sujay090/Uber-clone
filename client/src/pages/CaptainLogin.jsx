import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValue({
      email: "",
      password: "",
    });
  };
  const handelChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div className="">
        <img
          className="w-16 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg mb-2 ">What's your Email </h3>
          <input
            name="email"
            onChange={handelChange}
            value={formValue.email}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@expample.com"
          />
          <h3 className="text-xl mb-2">Enter Password </h3>
          <input
            name="password"
            onChange={handelChange}
            value={formValue.password}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="Password "
          />
          <button className="bg-[#111] text-[#fff] font-semibold mb-2 rounded px-4 py-2 w-full text-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to={"/captain-sign-up"} className="text-blue-500">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/Login"}
          className="bg-[#d5622d] inline-block text-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
