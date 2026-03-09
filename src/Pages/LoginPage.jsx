import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { MdOutlineLogin } from "react-icons/md";
import logo from '../../Content/vocheck.jpeg';

export default function Login() {

    const [pin, setPin] = useState("");
    const [username, setUsername] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();   // prevents page reload
        const res = await fetch("/db/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                pin: pin
            })
        });

        if (res.ok) {
            const data = await res.json();
            auth.login(data.token);
            navigate("/home");   // go to main screen
        } else {
            alert("Invalid Username or PIN");
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <div className="login-page">
                <div className="form">
                    <h2>VoCheck</h2>
                    <div className="logoCont">
                        <img src={logo} className="RPMLogo" />
                    </div>
                    <form className="login-form">
                        {/* <form className="login-form"> */}
                        <InputText
                            className="usernameInput"
                            value={username}
                            name="username"
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Password
                            className="loginInput"
                            id="password"
                            placeholder="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            toggleMask
                            feedback={false}   // disables strength meter if you don't want it
                        />
                    </form>
                    <section className="loginButtonCont">
                        <Button
                            className="vcButton"
                            icon={<MdOutlineLogin />}
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Log In
                        </Button>
                    </section>
                </div>
            </div>
        </>
    );
}
