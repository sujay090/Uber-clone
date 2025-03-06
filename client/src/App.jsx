import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtected from "./pages/UserProtected";
import { UserLogOut } from "./pages/UserLogOut";
import CaptainProtectd from "./pages/CaptainProtectd";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainHome from "./pages/CaptainHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/start"
        element={
          <UserProtected>
            <Start />
          </UserProtected>
        }
      />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/sign-up" element={<UserSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-sign-up" element={<CaptainSignup />} />
      <Route
        path="user/logout"
        element={
          <UserProtected>
            <UserLogOut />
          </UserProtected>
        }
      />
      <Route
        path="captain/logout"
        element={
          <CaptainProtectd>
            <CaptainLogout />
          </CaptainProtectd>
        }
      />
      <Route
        path="captain-home"
        element={
          <CaptainProtectd>
            <CaptainHome />
          </CaptainProtectd>
        }
      />
    </Routes>
  );
}

export default App;
