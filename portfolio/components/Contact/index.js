import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mpzbdaql");
  if (state.succeeded) {
    return <p>Thanks for submitting!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      id="fs-frm"
      name="simple-contact-form"
      action="https://formspree.io/f/mpzbdaql"
      method="POST"
    >
      <fieldset id="fs-frm-inputs">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First Name, Last Name"
          required=""
        />
        <label>Email Address</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="Email Address"
          required=""
        />
        <label>Message</label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Enter your message here"
          required=""
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
