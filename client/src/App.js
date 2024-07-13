
// import HomeCircles from './component/HomeCircles';
// import Navbar from './component/Navbar';
import Dashboard from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Admin, Protected, Public } from "./middleware/route";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Notifications from "./pages/Notifications";
import ApplyDoctor from "./pages/ApplyDoctor";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
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
            path="/login"
            element={<Login />}
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
              <Admin>   
              <Dashboard type={"users"} />
              </Admin>
            }
          />



          <Route
            path="/doctors"
            element={<Doctors />}
          />
          <Route
            path="/appointments"
            element={
              <Protected>
                <Appointments />
              </Protected>
            }
          />
          <Route
            path="/notifications"
            element={
              <Protected>
                <Notifications />
              </Protected>
            }
          />
          <Route
            path="/applyfordoctor"
            element={
              <Protected>
                <ApplyDoctor />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <Admin>
                <Dashboard type={"users"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/doctors"
            element={
              <Admin>
                <Dashboard type={"doctors"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/appointments"
            element={
              <Protected>
                <Dashboard type={"appointments"} />
              </Protected>
            }
          />
          <Route
            path="/dashboard/applications"
            element={
              <Protected>
                <Dashboard type={"applications"} />
              </Protected>
            }
          />
          <Route
            path="*"
            element={<Error />}
          />






        </Routes>

      </Router>
    </>
  );
}


