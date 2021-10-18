import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleLogin = () => {
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("login success", user.displayName, user.email);
        // ...
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
