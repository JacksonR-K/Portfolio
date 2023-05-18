import React, { useState } from 'react';
import "../styles/Contact.css"

// Here we import a helper function that will check if the email is valid
import validateEmail from '../utils/helpers';

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setname] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      // Based on the input type, we set the state of either email, name, and message
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setname(inputValue);
      } else {
        setMessage(inputValue);
      }

      if (!inputValue) {
        setErrorMessage({target} + ' is invalid');
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      
      
      // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      } 
      if (!email || !userName || !message) {
        setErrorMessage('All fields are required');
        return;
      }
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setname('');
      setEmail('');
      setMessage('');
    };
  return (
    <div>
      <section className="topic" id="contact-me">
          <h2>Contact Me</h2>
          <aside>
                <p>705-994-4506</p>
                <p>jacksonrainbirdk@gmail.com</p>
          </aside>
      </section>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <textarea
          rows={8}
          name="message"
          onChange={handleInputChange}
          type="message"
        />
        <button type="button" onClick={handleFormSubmit}>Send Message</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
  </div>
  );
}

export default Contact;
