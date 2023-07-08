import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" required />
          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control" required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
