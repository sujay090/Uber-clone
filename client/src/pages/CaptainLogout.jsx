import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const navigate = useNavigate()
    const token  = localStorage.getItem("captainToken")
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((res)=>{
        if(res.status===200){
            localStorage.removeItem('captainToken')
            navigate("/captain-login")
        }
    })
  return (
    <></>
  )
}

export default CaptainLogout