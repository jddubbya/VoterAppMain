import { useState } from "react";
import { useDispatch } from "react-redux";
import {setToken} from "../../Redux/authSlice.cjs";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

const submitHandler = async (e) => {
    e.preventDefault();
      const response = await fetch(`/db/login?username=${username}&password=${password}`);
      const result = await response.json();

    if(!result.token){
      alert("Username or Password incorrect, please try again.");
    }else if(result.message){
      alert(result.message);
    }
    else{
      dispatch(setToken(result.token));
      navigate("/me");
    }
  };

  return (
    <>
    <section classname="loginSection">
    <h1 className="loginHeader">Log In</h1>
      <form onSubmit={submitHandler} className="loginForm">
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
        <input type="submit"></input>
      </form>
      </section>
    </>
  );

}

export default LoginForm