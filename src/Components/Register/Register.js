import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseFirebase from "../../Hooks/UseFirebase";
import GoogleIcon from "../../Images/google.jpg";
import "./Register.css";

const Register = () => {
  const { UserDetails, SetUseDetails } = UseFirebase();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  let passError;
  if (Password !== ConfirmPassword) {
    passError = "Password did not matched";
  }
  return (
    <div className="register">
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and condition." />
        </Form.Group>
        <b>
          Already have an account? <Link to="/login">Login</Link>
        </b>
        <b className="text-danger">{passError}</b>
        <div className="d-flex flex-column align-items-center">
          <button className="register-btn mt-3 mx-auto" type="submit">
            REGISTER
          </button>
          <div className="d-flex align-items-center">
            <div className="register-line"></div>
            <h3 className="my-4 mx-3">OR</h3>
            <div className="register-line"></div>
          </div>
          <button className="register-with-google">
            {" "}
            <img src={GoogleIcon} height={30} alt="" /> REGISTER IN WITH GOOGLE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
