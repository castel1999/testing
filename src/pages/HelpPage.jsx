import React from "react";
import { NavLink } from "react-router-dom";

const HelpPage = () => {
  return (
    <div>
      <NavLink to="name">Name</NavLink>
      <NavLink to="age">Age</NavLink>
    </div>
  );
};

export default HelpPage;
