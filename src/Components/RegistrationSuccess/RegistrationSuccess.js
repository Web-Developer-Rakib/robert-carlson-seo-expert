import React from "react";
import "./RegistrationSuccess.css";

const RegistrationSuccess = () => {
  return (
    <div className="reg-success">
      <h1 className="reg-success-txt">Thank you for Register.</h1>

      <h5 className="text-success">
        Please check your inbox to verify email address.
      </h5>
    </div>
  );
};

export default RegistrationSuccess;
