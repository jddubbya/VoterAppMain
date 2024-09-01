import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/authSlice.cjs";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

const LoginForm = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`/auth/login?username=${username}&password=${password}`);
    const result = await response.json();

    if (!result.token) {
      alert("Username or Password incorrect, please try again.");
    } else if (result.message) {
      alert(result.message);
    }
    else {
      dispatch(setToken(result.token));
      sessionStorage.setItem("token", result.token)//
      navigate("/userManager");
    }
  };

  return (
    <>
      <section className="loginSection">
        <h1 className="loginHeader">Log In</h1>
        <form onSubmit={submitHandler} className="loginForm">
          <div>
            <label>
              Username:{" "}
              <input
                type="text"
                name="username"
                placeholder="Username:"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              ></input>
            </label>
          </div>

          <div>
            <label>
              Password:{" "}
              <input
                type="password"
                name="password"
                placeholder="Password:"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              ></input>
            </label>
          </div>
          <section className="loginFormButtons">
            <input className="backButton" type="submit" value="Login"></input>
               <input
                className="backButton"
                type="submit"
                value="Back"
              ></input>
          </section>
        </form>
      </section>
    </>
  );

}

export default LoginForm;
