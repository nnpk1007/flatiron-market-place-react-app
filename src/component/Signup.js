import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";

function Signup({ username, setUsername, password, setPassword, call, setCall }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      username,
      password,
      call,
      id: uuidv4(),
    };

    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((data) => {
        setUsername("");
        setPassword("");
        setCall("")
        navigate("/login");
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
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={call}
            required
            onChange={(e) => setCall(e.target.value)}
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
