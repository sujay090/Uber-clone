import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat h-screen w-full pt-5 bg-[url('C:\Users\sagar\OneDrive\Desktop\Uber-clone\client\public\uber.jpg')] flex justify-between flex-col ">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-2xl font-bold">Get Started With Uber </h2>
          <Link  to={"/login"} className="w-full inline-block text-center bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
