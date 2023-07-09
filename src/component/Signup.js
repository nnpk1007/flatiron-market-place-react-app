import React from "react";

function Signup({ username, password, setUsername, setPassword }) {
  return (
    <div>
      <h1>Create Account</h1>
      <form>
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
                type="text"
                className="form-control"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
      </form>
    </div>
  );
}

export default Signup;
