import React from "react";

const LokingFroDriver = ({ setlookingForDriverPanel }) => {
  return (
    <div>
      <h2
        className="absolute text-3xl top-6 right-7 cursor-pointer"
        onClick={() => {
          setlookingForDriverPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h2>
      <div className="flex items-center justify-between mt-10">
        <img
          className="w-18 h-full rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKhVPNez4mrS5zHh3H9f6yYXOXtpvu6lyA&s"
          alt="driver image "
        />
        <div className="text-right">
          <h2 className="text-lg font-medium ">sujay</h2>
          <h4 className="text-lg font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
          <p className="text-sm text-gray-600">BMW</p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col gap-2">
        <div className="w-full mt-8 space-y-2">
          <div className="flex items-center gap-4 border-b-2 border-gray-300 p-2 ">
            <i className="ri-map-pin-fill text-2xl "></i>
            <div className="flex flex-col ">
              <h2 className="text-2xl font-bold text-gray-900">562/11-A</h2>
              <p className=" font-medium text-gray-600">
                Kaikondrahalli,Bengaluru,karnataka{" "}
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
      </div>
    </div>
  );
};

export default LokingFroDriver;
