import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase_init";

const UseFirebase = () => {
  const [userDetails, setUseDetails] = useState({});
  const [googleErrorTxt, setGoogleErrorTxt] = useState("");
  const [signOutTxt, setSignOutTxt] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUseDetails(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/popup-closed-by-user).") {
          setGoogleErrorTxt("Popup has been closed by user.");
        }
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
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
