import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import auth from "../Firebase_init";

const UseFirebase = () => {
  const [userDetails, setUseDetails] = useState({});
  const [googleErrorTxt, setGoogleErrorTxt] = useState("");
  const [signOutTxt, setSignOutTxt] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUseDetails(user);
      })
      .catch((error) => {
        setGoogleErrorTxt(error.message);
      });
  };
  const handleSignOut = () => {
    console.log("Signout");
    signOut(auth)
      .then(() => {
        setSignOutTxt("Signout successfull.");
      })
      .catch((error) => {
        setSignOutTxt(error.message);
      });
  };
  onAuthStateChanged(auth, (user) => {
    setUseDetails(user);
  });

  return {
    userDetails,
    setUseDetails,
    googleErrorTxt,
    handleGoogleSignIn,
    handleSignOut,
    signOutTxt,
    email,
    setEmail,
    password,
    setPassword,
  };
};

export default UseFirebase;
