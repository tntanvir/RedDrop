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
import ResivedFrom from "./Component/ResivedFrom";
import Contect from "./Component/Contect";
import Docs from "./Component/Docs";
import Getstart from "./Component/Getstart";


export const ContextApi = createContext()
const App = () => {
  const [userLogin, setUserLogin] = useState(false)
  return (
    <ContextApi.Provider value={[userLogin, setUserLogin]}>
      <Router>
        <StickyNavbar></StickyNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/provideUser" element={<Getstart />} />
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
          <Route
            path="/resivedfrom"
            element={
              <PrivetRoute childern={<ResivedFrom />} />
            }
          />
          {/* <Route path="/login" element={<LogIn />} /> */}

        </Routes>
        <Footers></Footers>
      </Router>
    </ContextApi.Provider>
  )
}

export default App
