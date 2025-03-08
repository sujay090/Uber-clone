import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePoUpPanel, setRidePoUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ridePopUpRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);
  useGSAP(
    function () {
      if (ridePoUpPanel) {
        gsap.to(ridePopUpRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePoUpPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel]
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
          to={"/start"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-arrow-left-circle-line text-lg font-bold"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className=""
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6 ">
        <CaptainDetail />
      </div>
      <div
        ref={ridePopUpRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full pt-12"
      >
        <RidePopUp setRidePoUpPanel={setRidePoUpPanel}  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full h-screen pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePoUpPanel={setRidePoUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
