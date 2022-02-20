import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const [isSended, setIsSended] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rgqkma5', 'template_dh599xr', form.current, 'user_JUul9VfTPplSdurkWDApV')
      .then((result) => {
          setIsSended(true)
      }, (error) => {
          console.log(error.text)
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
      <p>Send us a message and our team will contact you shortly</p>
      {!isSended ? 
      <div>
      <input type="text" name="user_name" placeholder='Name'/>
      <input type="email" name="user_email" placeholder="Email"/>
      <input type="phone" name="user_phone" placeholder="Phone"/>
      <textarea name="message" placeholder="Tell us about your project"/>
      <button type="submit">Submit</button>
      </div> : 
      <h1>Your message has been sent</h1>
      }
    </form>
  );
};