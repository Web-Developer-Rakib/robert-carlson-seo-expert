import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="qna-section">
      <h1>Question and answer</h1>
      <div className="qna">
        <h3>
          <b>Question: </b>What are the difference between authorization and
          authentication?
        </h3>
        <p>
          <b>Answer: </b>
          <br />
          <br />
          <b>Authorization:</b> Authorization in system security is the process
          of giving the user permission to access a specific resource or
          function. This term is often used interchangeably with access control
          or client privilege.
          <br />
          <br />
          <b>Authentication:</b> Authentication is the act of validating that
          users are whom they claim to be. This is the first step in any
          security process.
        </p>
      </div>
      <div className="qna">
        <h3>
          <b>Question: </b>Why are you using firebase? What other options do you
          have to implement authentication?
        </h3>
        <p>
          <b>Answer: </b>Firebase, Backend-as-a-Service (BaaS), is a platform by
          Google that provides functionalities and helps with the backend
          development of your Android, iOS, or web and even some products that
          support Unity3D too. <br />
          <br />
          <b>Here is few authentication service's provider name:</b>
          <ul>
            <li>Auth0</li>
            <li>OneLogin</li>
            <li>Okta</li>
            <li>G2 Deals</li>
            <li>Microsoft Azure Active Directory</li>
          </ul>
          <br />
          <br />
          <i></i>
        </p>
      </div>
      <div className="qna">
        <h3>
          <b>Question: </b>What other services does firebase provide other than
          authentication?
        </h3>
        <p>
          <b>Answer: </b>
          <br />
          <br /> <b>Here is few other services provided by firebase:</b>
          <ul>
            <li>Firebase Database</li>
            <li>Firebase Analytics</li>
            <li>Firebase Cloud Messaging</li>
            <li>Firebase Remote Config</li>
            <li>Firebase Hosting</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Blogs;
