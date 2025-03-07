import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LoacationSearchPanel from "../components/LoacationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConformVehicle from "../components/ConformVehicle";
import LokingFroDriver from "../components/LokingFroDriver";
import WaitingDriver from "../components/WaitingDriver";
const Start = () => {
  const [place, setPlace] = useState({
    location: "",
    destination: "",
  });
  const [panelOpen, setPanelOpen] = useState(false);
  const[vehiclePanel,setVehiclePanel] = useState(false)
  const[selectvehiclePanel,setSelectvehiclePanel] = useState(false)
  const[lookingForDriverPanel,setlookingForDriverPanel] = useState(false)
  const[watingForDriverPanel,setwatingForDriverPanel] = useState(false)
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const ridePanelRef = useRef(null);
  const lookingForDriverPanelRef = useRef(null);
  const watingForDriverPanelRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  useGSAP(
    function () {
      if (panelOpen === true) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 20,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
          padding: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
            transform:'translateY(0)'
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
            transform:'translateY(100%)'
        });
      }
    },
    [vehiclePanel]
  );

  
  useGSAP(
    function () {
      if (selectvehiclePanel) {
        gsap.to(ridePanelRef.current, {
            transform:'translateY(0)'
        });
      } else {
        gsap.to(ridePanelRef.current, {
            transform:'translateY(100%)'
        });
      }
    },
    [selectvehiclePanel]
  );
  useGSAP(
    function () {
      if (lookingForDriverPanel) {
        gsap.to(lookingForDriverPanelRef.current, {
            transform:'translateY(0)'
        });
      } else {
        gsap.to(lookingForDriverPanelRef.current, {
            transform:'translateY(100%)'
        });
      }
    },
    [lookingForDriverPanel]
  );

  useGSAP(
    function () {
      if (watingForDriverPanel) {
        gsap.to(watingForDriverPanelRef.current, {
            transform:'translateY(0)'
        });
      } else {
        gsap.to(watingForDriverPanelRef.current, {
            transform:'translateY(100%)'
        });
      }
    },
    [watingForDriverPanel]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-4 top-4"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber logo"
      />
      <div className="h-screen w-screen ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="home image"
        />
      </div>
      <div className="flex flex-col justify-end absolute top-0 h-screen w-full">
        <div className="h-[30%] p-5 bg-white relative">
          {panelOpen && (
            <h5
              onClick={() => {
                setPanelOpen(false);
              }}
              className="absolute top-3 right-4 text-4xl cursor-pointer"
            >
              <i className="ri-arrow-down-s-line"></i>
            </h5>
          )}
          <h4 className="text-2xl font-semibold ">Find a trip </h4>
          <form onSubmit={handleSubmit}>
            <div className="line absolute h-16 w-1 top-[45%] left-10  bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              name="location"
              value={place.location}
              onChange={handleChange}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5 outline-none"
              type="text"
              placeholder="Add to pick-up Location "
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              name="destination"
              value={place.destination}
              onChange={handleChange}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg mt-3 w-full outline-none"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LoacationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef}  className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full space-y-3 pt-12">
       <VehiclePanel setSelectvehiclePanel={setSelectvehiclePanel}  setVehiclePanel={setVehiclePanel}  />
      </div>
      <div ref={ridePanelRef}  className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full space-y-3 pt-12">
       <ConformVehicle setSelectvehiclePanel={setSelectvehiclePanel} setlookingForDriverPanel={setlookingForDriverPanel} />
      </div>
      <div ref={lookingForDriverPanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full space-y-3 pt-12">
       <LokingFroDriver setlookingForDriverPanel={setlookingForDriverPanel} />
      </div>
      <div ref={watingForDriverPanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full pt-12">
       <WaitingDriver watingForDriverPanel={watingForDriverPanel} />
      </div>
    </div>
  );
};

export default Start;
