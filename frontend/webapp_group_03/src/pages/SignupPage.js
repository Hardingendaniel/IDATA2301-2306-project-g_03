import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {asyncApiRequest} from "../tools/requests";

//TODO: DETTE ER GIRTZ KODE: LAG EGEN!!
export function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  let errorMessage = null;
  if (error) {
    errorMessage = <p className="error">{error}</p>
  }

  return (
      <form>
        <h2>Sign up</h2>
        <label className="sr-only" htmlFor="username">
          Username
        </label>
        <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
        />
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        {errorMessage}
        <button id="signup-button" type="submit" onClick={submitForm}>
          Sign up
        </button>
      </form>
  );

  function submitForm(event) {
    event.preventDefault();
    const signUpData = {
      username: username,
      password: password,
    };
    asyncApiRequest("POST", "/signup", signUpData, true)
    .then(onSignupSuccess)
    .catch((error) => setError(error.message))
  }

  function onSignupSuccess() {
    navigate("/");
  }
}