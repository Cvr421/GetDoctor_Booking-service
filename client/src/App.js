
// import HomeCircles from './component/HomeCircles';
// import Navbar from './component/Navbar';
import Dashboard  from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Public } from "./middleware/route";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
           
           <Route
            path="/register"
            element={
              <Public>  
                <Register />
               </Public>  
            }
          />


          <Route
            path="/dashboard/users"
            element={
              // <Admin>   Open letter
              <Dashboard type={"users"} />
              // </Admin>
            }
          />
        </Routes>

      </Router>
    </>
  );
}


