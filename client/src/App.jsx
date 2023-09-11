import DonerFrom from "./Component/DonerFrom";

import Footers from "./Component/Footers";
import Home from "./Component/Home"
import LogIn from "./Component/LogIn";
import { StickyNavbar } from "./Component/StickyNavbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserDeshBord from "./Component/UserDeshBord";


const App = () => {


  return (
    <>
      <Router>
        <StickyNavbar></StickyNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<LogIn />} />
          <Route path="/donerfrom" element={<DonerFrom />} />
          <Route path="/userDeshBord" element={<UserDeshBord />} />

          {/* <Route
            path="/book"
            element={
              <PrivetRoute childern={<Addadress />} />
            }
          /> */}
        </Routes>

        <Footers></Footers>
      </Router>
    </>
  )
}

export default App
