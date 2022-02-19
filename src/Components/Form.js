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
      <p>Отправьте нам сообщение и наша команда свяжется с вами в скором времени</p>
      {!isSended ? 
      <div>
      <input type="text" name="user_name" placeholder='Имя'/>
      <input type="email" name="user_email" placeholder="Электронная почта"/>
      <input type="phone" name="user_phone" placeholder="Номер телефона"/>
      <textarea name="message" placeholder="Ваше сообщение"/>
      <button type="submit">Отправить сообщение</button>
      </div> : 
      <h1>Ваше сообщение отправлено</h1>
      }
    </form>
  );
};