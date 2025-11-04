import React from "react";

import { navData } from "./data";
import { StyledNavBar } from "./style";

const Navbar = () => {
  return (
    <StyledNavBar className="navbar-wrapper">
      <div className="nav-barheader">Sathi Dasbhoard</div>

      <div className="nav-bar-list-wrapper">
        {navData.map((item) => {
          return (
            <div className="nav-item" key={item.id}>
              {item.label}
            </div>
          );
        })}
      </div>
    </StyledNavBar>
  );
};

export default Navbar;
