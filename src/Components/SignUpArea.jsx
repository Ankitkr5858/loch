import React from "react";
import { useState } from "react";

function SignUpArea() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && email.trim() !== "") {
      window.location.href = "https://app.loch.one/welcome";
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="signup_section">
      <div>
        <div className="container_box">
          <h1 className="heading-4">Sign up for exclusive access.</h1>
          <form className="text_field_and_btn" onSubmit={handleSubmit}>
            <input
              className="input-styles"
              required
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={handleEmailChange}
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Please enter a valid email address (e.g., example@example.com)"
            />
            <button type="submit">Get Started</button>
          </form>
        </div>
        <p className="invite_link_text">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
}

export default SignUpArea;
