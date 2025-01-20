import { useState } from "react";
import { handleChange } from "../utils";


function Login() {
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
  });


  return (
    <main className="main login">
      <section className="content-wrapper flex-column">
        <h1>Sign In To Your Account</h1>

        <label htmlFor="email">Email
        <br />
        <input
          type="email"
          id="email"
          placeholder="vanlife@gmail.com"
          name="email"
          value={accountInfo.email}
          onChange={(e) => handleChange(e, setAccountInfo)}
        />
        </label>

        <label htmlFor="password">Password
        <br />
        <input
          type="password"
          id="password"
          placeholder="password"
          name="password"
          value={accountInfo.password}
          onChange={(e) => handleChange(e, setAccountInfo)}
        />
        </label>

        <button
          className="primary-btn"
        >
          Sign In
        </button>

        <span>
          Don't have an account? <button to="/signup" className="create-account">Create An Account</button>
        </span>
      </section>
    </main>

  );
}

export default Login;
