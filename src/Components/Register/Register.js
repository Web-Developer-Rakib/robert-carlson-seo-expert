import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase_init";
import UseFirebase from "../../Hooks/UseFirebase";
import GoogleIcon from "../../Images/google.jpg";
import "./Register.css";

const Register = () => {
  const { setUseDetails, googleErrorTxt, handleGoogleSignIn } = UseFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [errorTxt, setErrorTxt] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassError("Password did not matched. Please recheck.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUseDetails(user);
        navigate("/reg-success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          setErrorTxt("This email already in use.");
        }
      });
  };
  return (
    <div className="register">
      <h3 className="text-center text-danger">{errorTxt}</h3>
      <h3 className="text-center text-danger">{googleErrorTxt}</h3>
      <Form className="w-50 mx-auto">
        <h1 className="py-4">Register</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm your password"
            required
          />
        </Form.Group>
        <b>
          Already have an account? <Link to="/login">Login</Link>
        </b>
        <h5 className="text-danger my-3">{passError}</h5>
        <div className="d-flex flex-column align-items-center">
          <button
            type="submit"
            onClick={handleRegister}
            className="register-btn mt-3 mx-auto"
          >
            REGISTER
          </button>
          <div className="d-flex align-items-center">
            <div className="register-line"></div>
            <h3 className="my-4 mx-3">OR</h3>
            <div className="register-line"></div>
          </div>
        </div>
      </Form>
      <div className="d-flex justify-content-center">
        <button className="register-with-google" onClick={handleGoogleSignIn}>
          {" "}
          <img src={GoogleIcon} height={30} alt="" /> REGISTER IN WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;
