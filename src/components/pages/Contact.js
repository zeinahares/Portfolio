import React, { useState } from 'react';
import '../../styles/contact.css';

// check valid email
import { validateEmail } from '../../utils/helpers';

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address


export default function Contact() {

  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('The email is invalid');

      return;
    }

    checkForm(email);
    checkForm(Name);
    checkForm(Message);

    setName('');

    setMessage('');

    setEmail('');
  };

  const checkForm = (text) => {

    if (!text || Message === '' || text === ' ') {
      setErrorMessage('Form items cannot be empty');
      return;
    }

    return;
  };

  const checkEmail = (email) => {

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');

      return;
    }

    checkForm(email);
  }

  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className='contact_content'>
        <p>Hello {Name}</p>
        <form className="form">
          <h5>Name</h5>
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            onBlur={checkForm}
          />
          <h5>Email</h5>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            onBlur={checkEmail}
          />
          <h5>Message</h5>
          <textarea
            value={Message}
            name="Message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            onBlur={checkForm}
          />
          <button type="button"
            onClick={handleFormSubmit}
            className='button'
          >
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
