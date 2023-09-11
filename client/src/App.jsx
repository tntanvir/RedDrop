import DonerFrom from "./Component/DonerFrom";

import Footers from "./Component/Footers";
import Home from "./Component/Home"
import LogIn from "./Component/LogIn";
import { StickyNavbar } from "./Component/StickyNavbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserDeshBord from "./Component/UserDeshBord";
import PrivetRoute from "./Component/PrivetRoute";
import { useState } from "react";
import { createContext } from "react";

export const contextApi = createContext()
const App = () => {
  const [userLogin, setUserLogin] = useState(false)
  return (
    <contextApi.Provider value={[userLogin, setUserLogin]}>
      <Router>
        <StickyNavbar></StickyNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/userDeshBord"
            element={
              <PrivetRoute childern={<UserDeshBord />} />
            }
          />
          <Route
            path="/donerfrom"
            element={
              <PrivetRoute childern={<DonerFrom />} />
            }
          />
          <Route path="/login" element={<LogIn />} />

        </Routes>
        <Footers></Footers>
      </Router>
    </contextApi.Provider>
  )
}

export default App
