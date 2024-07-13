
// import HomeCircles from './component/HomeCircles';
// import Navbar from './component/Navbar';
import Dashboard  from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            path="/dashboard/users"
            element={
              // <Admin>
              <Dashboard type={"users"} />
              // </Admin>
            }
          />
        </Routes>

      </Router>
    </>
  );
}


