import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase_init";
import UseFirebase from "../../Hooks/UseFirebase";
import GoogleIcon from "../../Images/google.jpg";
import "./Login.css";

const Login = () => {
  const {
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
  } = UseFirebase();

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
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorTxt(errorMessage);
      });
  };
  return (
    <div className="login">
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
        <button className="login-with-google">
          {" "}
          <img src={GoogleIcon} height={30} alt="" /> LOGIN IN WITH GOOGLE
        </button>
        <h2>{errorTxt}</h2>
      </div>
    </div>
  );
};

export default Login;
