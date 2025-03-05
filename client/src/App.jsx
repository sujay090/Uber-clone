import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/sign-up" element={<UserSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-sign-up" element={<CaptainSignup />} />
    </Routes>
  );
}

export default App;
