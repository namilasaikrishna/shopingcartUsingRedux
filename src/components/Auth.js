import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/Auth-slice";

import "./Auth.css";

const Auth = () => {

  const dispatch = useDispatch()

  const onSubmitHandler = (e) =>{
    e.preventDefault()
    dispatch(authActions.logIn())
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;