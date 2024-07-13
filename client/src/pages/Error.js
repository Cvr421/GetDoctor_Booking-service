import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/error.css";

export default function Error  ()  {
  return (
    <div className="error container">
      <h2>Error! Page Not Found</h2>
      <NavLink
        to={"/"}
        className="btn"
      >
        go to home
      </NavLink>
    </div>
  );
};

