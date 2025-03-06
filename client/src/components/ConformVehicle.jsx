import React from "react";

const ConformVehicle = ({ setSelectvehiclePanel }) => {
  return (
    <div className="">
      <h2 className="mb-6 font-semibold text-2xl">Choose a Vehicle</h2>
      <h2
        onClick={() => {
            setSelectvehiclePanel(false);
        }}
        className="absolute text-3xl top-6 right-7 cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h2>
    </div>
  );
};

export default ConformVehicle;
