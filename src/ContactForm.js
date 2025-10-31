import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("");

    // validation
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMsg("Please fill all required fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setResponseMsg("Invalid email address.");
      return;
    }

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 || res.status === 201) {
        setResponseMsg("Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setResponseMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="page-container">
      {/* LEFT SECTION */}
      <div className="left-panel">
        <p>
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’s just a message away.
        </p>
        <p>
          Let’s catch up over coffee. <br />
          Great stories always begin with a good conversation.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-panel">
        <h2>Join the Story</h2>
        <p className="subtext">
          Ready to bring your vision to life? Let’s talk.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email*"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message*"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          {responseMsg && <p className="response">{responseMsg}</p>}
        </form>

        <div className="contact-footer">
          <a href="mailto:vernita@varnanfilms.co.in">
            vernita@varnanfilms.co.in
          </a>
          <span>|</span>
          <a href="tel:+919873684567">+91 98736 84567</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
