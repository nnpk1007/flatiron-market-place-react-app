import React from "react";

function Login({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  error,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            className="form-control"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
