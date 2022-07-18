import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/sign-up">
          <button className="btn btn-primary">Sign up</button>
        </Link>
        <div className="ml-auto">
          {localStorage.getItem("jwt-token") ? (
            <button
              className="btn btn-primary"
              onClick={(e) => {
                console.log("prueba de función");
                localStorage.removeItem("jwt-token");
                navigate("/log-in");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/log-in">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
