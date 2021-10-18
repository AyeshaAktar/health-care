import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import initializeAuthentaction from "../Firebase/firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

initializeAuthentaction();

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const getInputValue = (e) => {
    const getValue = { ...user };
    getValue[e.target.name] = e.target.value;
    setUser(getValue);
  };

  const handleSignIn = (e) => {
    if (user.name !== "" && user.email !== "" && user.password !== "") {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    e.preventDefault();
  };
  return (
    <div className="my-5 container">
      <h2 className="mb-4">SignUp Page</h2>
      <form onSubmit={handleSignIn}>
        <div className="row mb-3">
          <div className="col-12 mb-2 d-flex justify-content-center">
            <input
              onBlur={getInputValue}
              type="text"
              className="form-control w-50"
              placeholder="User Name"
              name="name"
              required
            />
          </div>
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
          Sign Up
        </button>
      </form>
      <div>
        <Link to="/login">Go to SignIn</Link>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default SignUp;
