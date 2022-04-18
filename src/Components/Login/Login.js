import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase_init";
import UseFirebase from "../../Hooks/UseFirebase";
import GoogleIcon from "../../Images/google.jpg";
import "./Login.css";

const Login = () => {
  const { setUseDetails, handleGoogleSignIn, googleErrorTxt } = UseFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorTxt, setErrorTxt] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUseDetails(user);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          setErrorTxt("User not found.");
        }
      });
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Sent");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorTxt(errorMessage);
      });
  };
  return (
    <div className="login">
      <h3 className="text-center text-danger">{errorTxt}</h3>
      <h3 className="text-center text-danger">{googleErrorTxt}</h3>
      <Form className="w-50 mx-auto">
        <h1 className="py-4">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <b>
          New to this site? <Link to="/register">Register</Link>
        </b>
        <b>
          Fogot password? <span onClick={handleResetPassword}>Reset now</span>
        </b>

        <div className="d-flex flex-column align-items-center">
          <button
            className="login-btn mt-3 mx-auto"
            type="submit"
            onClick={handleLogin}
          >
            LOGIN
          </button>
          <div className="d-flex align-items-center">
            <div className="login-line"></div>
            <h3 className="my-4 mx-3">OR</h3>
            <div className="login-line"></div>
          </div>
        </div>
      </Form>
      <div className="d-flex justify-content-center">
        <button className="login-with-google" onClick={handleGoogleSignIn}>
          {" "}
          <img src={GoogleIcon} height={30} alt="" /> LOGIN IN WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
