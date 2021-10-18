import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import initializeAuthentaction from "../Firebase/firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

initializeAuthentaction();

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
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
          // Signed in
          const user = userCredential.user;
          console.log("login success");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    e.preventDefault();
  };
  return (
    <div className="my-5 container">
      <h2 className="mb-4">Sign In Page</h2>
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
