import React from "react";

const CaptainDetail = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3 ">
          <img
            className="h-10 w-10 rounded-full object-cover "
            src="https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg"
            alt="people image "
          />
          <h2 className="text-lg font-medium ">Sujay pradahan </h2>
        </div>
        <div>
          <h4 className="text-xl font-semibold ">$123.49</h4>
          <p className="text-sm  text-gray-600">Earnd</p>
        </div>
      </div>
      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-4 items-start">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium ">10.2</h5>
          <p className="text-sm text-gray-600 ">Hours online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium ">10.2</h5>
          <p className="text-sm text-gray-600 ">Hours online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium ">10.2</h5>
          <p className="text-sm text-gray-600 ">Hours online</p>
        </div>
      </div>
    </>
  );
};

export default CaptainDetail;
