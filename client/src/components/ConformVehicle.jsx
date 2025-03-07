import React from "react";

const ConformVehicle = ({ setSelectvehiclePanel,setlookingForDriverPanel }) => {
  return (
    <div>
      <h2 className="mb-6 font-semibold text-2xl">Confirm your Ride</h2>
      <h2
        onClick={() => {
          setSelectvehiclePanel(false);
        }}
        className="absolute text-3xl top-6 right-7 cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h2>
      <div className="flex justify-between items-center flex-col gap-2">
        <img
          className=""
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        {/* <div className="w-full h-[2px] bg-gray-300 absolute bottom-34"></div> */}
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
              <h2 className="text-2xl font-bold text-gray-900">Third Wave Coffee</h2>
              <p className=" font-medium text-gray-600">
                17th Cross Rd, PWD Quaters,1st Sector, HSR Layout,Bengalurur, Karnataka{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 ">
          <i className="ri-bank-card-2-fill text-2xl"></i>
            <div className="flex flex-col ">
              <h2 className="text-2xl font-bold text-gray-900">$193.20</h2>
              <p className=" font-medium text-gray-600">
                Cash Cash{" "}
              </p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
            setlookingForDriverPanel(true)
            setSelectvehiclePanel(false)
        }} className="w-full bg-green-400 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConformVehicle;
