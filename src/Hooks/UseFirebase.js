import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const UseFirebase = () => {
  const [UserDetails, SetUseDetails] = useState({});
  const [googleErrorTxt, SetGoogleErrorTxt] = useState("");

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        SetUseDetails(user);
      })
      .catch((error) => {
        SetGoogleErrorTxt(error.message);
      });
  };

  return {
    UserDetails,
    SetUseDetails,
    googleErrorTxt,
    handleGoogleSignIn,
  };
};

export default UseFirebase;
