import React, { useState } from "react";
import App from "../App";
import "./SignUpForm.css";


export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const result = await response.json();
            console.log(result); // Log the result to the console

            // Set the token in state
            setToken(result.token);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="sign-up-form-container">
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:{" "}
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Password:{" "}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <br></br>

                <button>Submit</button>
            </form>
        </div>
    );
}
