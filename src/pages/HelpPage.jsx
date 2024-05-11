import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpPage = () => {
  return (
    <div>
      <div>
        <NavLink to="name">Name</NavLink>
        <NavLink to="age">Age</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default HelpPage;
