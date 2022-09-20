import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9718302",
        "template_zm3uvir",
        form.current,
        "o7KpYmg8ix6thE3jj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };

  return (
    <div className="contact_container" id="contact">
      <h1 className="contact_title">Let's Connect</h1>
      <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={userName}
              name="user_name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="nameHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={userEmail}
              name="user_email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              value={userMessage}
              type="checkbox"
              className="form-control"
              placeholder="Your message"
              id="exampleCheck1"
            />
          </div>
          <input className="btn send_btn btn-primary" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
