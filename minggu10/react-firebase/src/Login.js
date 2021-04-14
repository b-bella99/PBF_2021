import React, { useState, useContext } from "react";
import { AuthContext } from "./index";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        console.log(Auth);
        Auth.setLoggedIn(true);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit = {e => handleForm(e)}>
                <input
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                name = "email"
                type =  "email"
                placeholder = "E-mail"
                />

                <input
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                name = "password"
                type =  "password"
                placeholder = "Password"
                />
                <hr />
                <button className="googleBtn" type="button">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg"
                    alt="logo"
                    />
                    Login With Google
                </button>
                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    );
};

export default Login;