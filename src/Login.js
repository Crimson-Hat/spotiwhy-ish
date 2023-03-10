import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
import logo from "./assets/spotify_green.svg";

function Login() {
  return (
    <div className="login">
      <div className="login__inner">
        <img src={logo} alt="spotify logo" />
        <div className="login__desc">
          <h2>Welcome to Spoti-Why!</h2>
          <p>A spotify clone built with ReactJs. Login with your official spotify account to continue.</p>
        </div>
        <a href={accessUrl}>Login with Spotify</a>
        <p className="login__thanks">special thanks - @curry-bean</p>
      </div>
    </div>
  );
}

export default Login;