<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState } from "react";

const users = [
  { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
  { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
  { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
];

 function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserError("");
    setPasswordError("");
    setLoading(true);

    setTimeout(() => {
      const user = users.find((u) => u.email === email);
      if (!user) {
        console.log("User not found");
        setUserError("User not found");
        setLoading(false);
        return;
      }

      if (user.password !== password) {
        console.log("Password Incorrect");
        setPasswordError("Password Incorrect");
        setLoading(false);
        return;
      }
      console.log(user);
      setLoading(false);
    }, 3000);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
            <lable htmlFor="input-email">Email:</lable>
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="user-error" style={{ color: "red" }}>
            {userError}
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
            <lable htmlFor="input-password">Password:</lable>
          <input
            id="input-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id="password-error" style={{ color: "red" }}>
            {passwordError}
          </div>
        </div>

        <button
          id="submit-form-btn"
          type="submit"
          disabled={loading}
          style={{ marginTop: "15px" }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}


export default App;