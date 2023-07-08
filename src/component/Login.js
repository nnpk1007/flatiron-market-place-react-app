import React from "react";

function Login({ username, password, setUsername, setPassword, handleLogin, error}) {

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value={username} className="form-control" required onChange={(e) => setUsername(e.target.value)}/>
          <div className="form-group">
            <label>Password</label>
            <input type="text" value={password} className="form-control" required onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
