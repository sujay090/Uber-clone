import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen ">
      <Link to={"/start"} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="ri-home-5-line text-lg font-bold"></i>
      </Link>
      <div className="h-1/2">
        <img
          className=""
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 mt-10 ">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <img
              className="w-18 h-full rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKhVPNez4mrS5zHh3H9f6yYXOXtpvu6lyA&s"
              alt="driver image "
            />
            <div className="text-right">
              <h2 className="text-lg font-medium ">sujay</h2>
              <h4 className="text-lg font-semibold -mt-1 -mb-1">
                MP04 AB 1234
              </h4>
              <p className="text-sm text-gray-600">BMW</p>
            </div>
          </div>
          <div className="flex justify-between items-center flex-col gap-2">
            <div className="w-full">
              <div className="flex items-center gap-4 border-b-2 border-gray-300 p-2 ">
                <div className="w-8 h-4 bg-black"></div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-gray-900">
                    Third Wave Coffee
                  </h2>
                  <p className=" font-medium text-gray-600">
                    17th Cross Rd, PWD Quaters,1st Sector, HSR
                    Layout,Bengalurur, Karnataka{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 ">
                <i className="ri-bank-card-2-fill text-2xl"></i>
                <div className="flex flex-col ">
                  <h2 className="text-lg font-bold text-gray-900">$193.20</h2>
                  <p className=" font-medium text-gray-600">Cash Cash </p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full my-4 bg-green-500 text-white font-semibold p-2 rounded">
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
