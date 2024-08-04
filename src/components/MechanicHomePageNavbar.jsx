import React from "react";
import { Link } from "react-router-dom";

function MechanicHomePageNavbar() {
  return (
    <>
      <div
        className="mechanic-homepage-navbar-container"
        style={{
          margin: "15px",
          justifyContent: "space-between",
          textAlign: "right",
        }}
      >
        <Link
          to={"/"}
          style={{
            margin: "10px",
            padding: "4px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          logout
        </Link>
      </div>
    </>
  );
}

export default MechanicHomePageNavbar;
