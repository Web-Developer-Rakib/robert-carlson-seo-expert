import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../Firebase_init";

const UseFirebase = () => {
  const [userDetails, setUseDetails] = useState({});
  const [googleErrorTxt, setGoogleErrorTxt] = useState("");
  const [signOutTxt, setSignOutTxt] = useState("");
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUseDetails(user);
    });
  }, []);

  return {
    userDetails,
    setUseDetails,
    googleErrorTxt,
    handleGoogleSignIn,
    handleSignOut,
    signOutTxt,
  };
};

export default UseFirebase;
