import React, { useState } from "react";
import "./Authenticate.css"; // Make sure the path is correct


export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(""); // State for username input

    async function handleClick() {
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            setSuccessMessage(result.message);

            // Check if the 'data' property exists and contains the 'username' property
            if (result.data && result.data.username) {
                setUsername(result.data.username);
            } else {
                setError("Username not found in the response data.");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // Check if the username meets the validation criteria (e.g., 8 characters)
        if (username.length < 8) {
            setError("Username must be at least 8 characters long.");
            return; // Stop further processing
        }

        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            setSuccessMessage(result.message);

            // Check if the 'data' property exists and contains the 'username' property
            if (result.data && result.data.username) {
                setUsername(result.data.username);
            } else {
                setError("Username not found in the response data.");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="Authenticate-Container">
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            {username && <p>Logged in as: {username}</p>}
            <form onSubmit={handleSubmit}>
                <button onClick={handleClick}>Authenticate Token!</button>
            </form>
        </div>
    );
}
