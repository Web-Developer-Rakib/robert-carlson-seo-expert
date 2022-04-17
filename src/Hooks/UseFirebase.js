import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import auth from "../Firebase_init";

const UseFirebase = () => {
  const [userDetails, SetUseDetails] = useState({});
  const [googleErrorTxt, SetGoogleErrorTxt] = useState("");
  const [signOutTxt, setSignOutTxt] = useState("");

  const handleGoogleSignIn = () => {
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
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setSignOutTxt("Signout successfull.");
      })
      .catch((error) => {
        setSignOutTxt(error.message);
      });
  };
  onAuthStateChanged(auth, (user) => {
    SetUseDetails(user);
  });

  return {
    userDetails,
    SetUseDetails,
    googleErrorTxt,
    handleGoogleSignIn,
    handleSignOut,
    signOutTxt,
  };
};

export default UseFirebase;
