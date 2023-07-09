import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"

function Signup() {
    const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: usernameInput,
      password:passwordInput,
      id: uuidv4()
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((data) => {
        // reset the form field
        setUsernameInput("");
        setPasswordInput("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            value={usernameInput}
            required
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={passwordInput}
            required
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Create your account
        </button>
      </form>
    </div>
  );
}

export default Signup;
