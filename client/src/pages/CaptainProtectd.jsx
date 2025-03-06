import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainProtectd = ({ children }) => {
  const captainToken = localStorage.getItem("captainToken");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    if (!captainToken) {
      navigate("/captain-login");
    }

    axios
    .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
      headers: {
        Authorization: `Bearer ${captainToken}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        setCaptain(res.data.captain);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("captainToken")
      navigate("/captain-login");
    });
  }, [captainToken, navigate]);



  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectd;
