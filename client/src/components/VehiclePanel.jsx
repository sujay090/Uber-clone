import React from "react";
import car from "../assets/car.jpg";
import auto from "../assets/auto.jpg";
const VehiclePanel = ({setVehiclePanel,setSelectvehiclePanel}) => {
  return (
    <div>
      <h2 className="mb-6 font-semibold text-2xl">Choose a Vehicle</h2>
      <h2
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="absolute text-3xl top-6 right-7 cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h2>
      <div onClick={()=>{
        setSelectvehiclePanel(true)
        setVehiclePanel(false)
      }} className="flex justify-between border-4 active:border-gray-600 border-white px-3 py-4 rounded-2xl w-full">
        <div className="flex items-center w-full">
          <img className="h-15" src={car} alt="car image" />
          <div className="w-full">
            <h4 className="font-medium text-lg">
              {" "}
              UberGo{" "}
              <span>
                <i className="ri-user-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-base ">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable,compact rides
            </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">$193.20</h2>
      </div>
      <div onClick={()=>{
        setSelectvehiclePanel(true)
        setVehiclePanel(false)
      }} className="flex justify-between border-4 active:border-gray-600 border-white px-3 py-4 rounded-2xl w-full">
        <div className="flex items-center w-full">
          <img
            className="h-15"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
            alt="car image"
          />
          <div className="w-full">
            <h4 className="font-medium text-lg">
              {" "}
              Moto{" "}
              <span>
                <i className="ri-user-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-base ">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable,moto rides
            </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">$65.70</h2>
      </div>
      <div onClick={()=>{
        setSelectvehiclePanel(true)
        setVehiclePanel(false)
      }} className="flex justify-between border-4 active:border-gray-600 border-white px-3 py-4 rounded-2xl w-full">
        <div className="flex items-center w-full gap-1">
          <img className="h-16" src={auto} alt="car image" />
          <div className="w-full ">
            <h4 className="font-medium text-lg">
              {" "}
              UberGo{" "}
              <span>
                <i className="ri-user-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-base ">2 mins away</h5>
          </div>
        </div>
        <h2 className="text-xl font-semibold">$90.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
