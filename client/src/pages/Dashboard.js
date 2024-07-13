import React from "react";
import AdminApplications from "../component/AdminApplications";
import AdminAppointments from "../component/AdminAppointments";
import AdminDoctors from "../component/AdminDoctors";
import Sidebar from "../component/Sidebar";
import Users from "../component/Users";

export default function Dashboard  (props)  {
  const { type } = props;
  return (
    <>
      <section className="layout-section">
        <div className="layout-container">
          <Sidebar />
          {type === "users" ? (
            <Users />
          ) : type === "doctors" ? (
            <AdminDoctors />
          ) : type === "applications" ? (
            <AdminApplications />
          ) : type === "appointments" ? (
            <AdminAppointments />
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

