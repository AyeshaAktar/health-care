import React from "react";

const SignIn = () => {
  return (
    <div className="my-5 container">
      <h2 className="mb-4">Sign In Page</h2>
      <form>
        <div className="row mb-3">
          <div className="col-12 mb-2 d-flex justify-content-center">
            <input
              type="email"
              className="form-control w-50"
              id="inputEmail3"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <input
              type="password"
              className="form-control w-50"
              id="inputPassword3"
              placeholder="Enter Your Password"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
