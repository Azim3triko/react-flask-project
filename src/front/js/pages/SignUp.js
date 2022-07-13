import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <form>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={async (e) => {
            const success = await actions.signUp({
              email: email,
              password: password,
            });
            if (success) Navigate("/log-in");
            alert("something happened while creating the user.");
          }}
        >
          {"sign up"}
        </button>
      </div>
    </div>
  );
};
