import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/captain-home"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-arrow-left-circle-line text-lg font-bold"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div onClick={() => { setFinishRidePanel(true)}} className="h-1/5 p-4 bg-yellow-400 flex items-center justify-between relative">
        <h2
          className="absolute text-3xl w-[95%] text-center top-0 rotate-180 cursor-pointer"
        >
          <i className="ri-arrow-down-wide-line text-gray-100"></i>
        </h2>
        <h4 className="text-xl font-semibold ">4 KM awya</h4>
        <button className="bg-green-500 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride{" "}
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}  />
      </div>
    </div>
  );
};

export default CaptainRiding;
