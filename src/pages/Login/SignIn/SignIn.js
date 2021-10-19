import React, { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import initializeAuthentaction from "../Firebase/firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { AuthContext } from "../../../context/AuthProvider";
import { useHistory, useLocation } from "react-router";

initializeAuthentaction();

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loginUser, setLoginUser] = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const getInputValue = (e) => {
    const getValue = { ...user };
    getValue[e.target.name] = e.target.value;
    setUser(getValue);
  };

  const handleSignIn = (e) => {
    if (user.email !== "" && user.password !== "") {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoginUser(user);
          history.replace(from);
          setSuccess("SignIn success");
          setErrorMsg("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
          setSuccess("");
        });
    }
    e.preventDefault();
  };
  return (
    <div className="my-5 container">
      <h2 className="mb-4">Sign In Page</h2>
      <p>{success}</p>
      <p>{errorMsg}</p>
      <form onSubmit={handleSignIn}>
        <div className="row mb-3">
          <div className="col-12 mb-2 d-flex justify-content-center">
            <input
              onBlur={getInputValue}
              type="email"
              className="form-control w-50"
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <input
              onBlur={getInputValue}
              type="password"
              className="form-control w-50"
              placeholder="Enter Your Password"
              name="password"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      <div>
        <Link to="/signup">Go to SignUp</Link>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default SignIn;
