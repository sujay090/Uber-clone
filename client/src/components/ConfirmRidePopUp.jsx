import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmRidePopUp = ({ setConfirmRidePopUpPanel, setRidePoUpPanel }) => {
  const [otp, setOtp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  return (
    <div>
      <h2
        onClick={() => {
          setRidePoUpPanel(false);
        }}
        className="absolute text-3xl top-6 right-7 cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h2>
      <h2 className="mb-6 font-semibold text-2xl">
        Confirm this Ride to Start
      </h2>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-xl ">
        <div className="flex items-center gap-3">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg"
            alt="ride-pop-up-image"
          />
          <h2 className="text-lg font-medium">sujay pradahn</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex justify-between items-center flex-col gap-2">
        <div className="w-full mt-8 space-y-2">
          <div className="flex items-center gap-4 border-b-2 border-gray-300 p-2 ">
            <i className="ri-map-pin-fill text-2xl "></i>
            <div className="flex flex-col ">
              <h2 className="text-2xl font-bold text-gray-900">562/11-A</h2>
              <p className=" font-medium text-gray-600">
                Kaikondrahalli,Bengaluru,karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b-2 border-gray-300 p-2 ">
            <div className="w-8 h-4 bg-black"></div>
            <div className="flex flex-col ">
              <h2 className="text-2xl font-bold text-gray-900">
                Third Wave Coffee
              </h2>
              <p className=" font-medium text-gray-600">
                17th Cross Rd, PWD Quaters,1st Sector, HSR Layout,Bengalurur,
                Karnataka{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 ">
            <i className="ri-bank-card-2-fill text-2xl"></i>
            <div className="flex flex-col ">
              <h2 className="text-2xl font-bold text-gray-900">$193.20</h2>
              <p className=" font-medium text-gray-600">Cash Cash </p>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              type="number"
              placeholder="Enter OTP"
              className="bg-[#eee] px-8 font-mono py-3 text-base rounded-lg mt-3 w-full outline-none"
            />
            <button
              onClick={() => {
                navigate("/captain-riding");
              }}
              className="w-full bg-green-400 mt-4 text-white font-semibold p-2 rounded-lg"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                setConfirmRidePopUpPanel(false);
                setRidePoUpPanel(false);
              }}
              className="w-full bg-red-500 mt-2 text-white font-semibold p-2 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
