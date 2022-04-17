import React from "react";
import { Form } from "react-bootstrap";
import GoogleIcon from "../../Images/google.jpg";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Form className="w-50 mx-auto">
        <h1 className="py-4">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <div className="d-flex flex-column align-items-center">
          <button className="login-btn mt-3 mx-auto" type="submit">
            LOGIN
          </button>
          <div className="d-flex align-items-center">
            <div className="login-line"></div>
            <h3 className="my-4 mx-3">OR</h3>
            <div className="login-line"></div>
          </div>
          <button className="login-with-google">
            {" "}
            <img src={GoogleIcon} height={30} alt="" /> LOGIN IN WITH GOOGLE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
