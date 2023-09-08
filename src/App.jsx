import React, { useState } from "react";
import Authenticate from "./Components/Authenticate";
import SignUpForm from "./Components/SignUpForm";


export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}
