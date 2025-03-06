import React from "react";

function LoacationSearchPanel({setPanelOpen,setVehiclePanel}) {
  const locations = [
    {
      id: "1",
      icon: "",
      location: "Anilsmrithit 234,block",
    },
    {
      id: "1",
      icon: "",
      location: "Anilsmrithit 234,block",
    },
    {
      id: "1",
      icon: "",
      location: "Anilsmrithit 234,block",
    },
    {
      id: "1",
      icon: "",
      location: "Anilsmrithit 234,block",
    },
    {
      id: "1",
      icon: "",
      location: "Anilsmrithit 234,block",
    },
  ];
  return (
    <div className="">
      {locations.map((locationData, i) => (
        <div onClick={()=>{
          setVehiclePanel(true)
          setPanelOpen(false)
        }} key={i} className="flex items-center gap-4 my-2 border-2 active:border-gray-700 border-white rounded-xl px-4 py-2">
          <h5 className="bg-[#eee] rounded-full w-10 h-10 flex items-center justify-center">
            {" "}
            <i className="ri-map-pin-line text-lg"></i>
          </h5>
          <h4 className="font-medium">{locationData.location}</h4>
        </div>
      ))}
    </div>
  );
}

export default LoacationSearchPanel;
