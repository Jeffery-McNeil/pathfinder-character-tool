import { useState } from "react";
import { useHistory } from 'react-router-dom'
import '../Css/Signup.css'

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory()

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then((user) => {
          localStorage.setItem("user", user.id)
          console.log(user)
          if (Number.isInteger(user.id)) {
            history.push('/homepage')
          } else {
            setErrorMessage("Invalid username or password")
          }
        })
    }
  


    return (
      <div className="bg-layer">
        <h1 id="title">Create an Account</h1>
        <article className="signup">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button id="submit" type="submit">Submit</button>
          </form>
          <h2>{errorMessage}</h2>
        </article>
      </div>
    );
  }

export default SignUp;