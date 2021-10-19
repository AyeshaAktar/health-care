import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../context/AuthProvider";
import { useHistory, useLocation } from "react-router";

const GoogleLogin = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLoginUser(user);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignin} className="btn btn-primary">
        Sign In With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
