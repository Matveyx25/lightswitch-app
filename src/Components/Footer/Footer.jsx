import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

export const Footer = () => {
  return <div className="container">
    <footer className={s.footer}>
      <div className={s.flex}>
        <a href="mailto:contact@lightswitch.digital">contact@lightswitch.digital</a>
      </div>
      <div className={s.flex}>
        <div className={s.copyright}>@2022 <NavLink to={'/'} className={s.logo}> LightSwitch</NavLink></div>
        <div className={s.social}>
          <a href="https://www.instagram.com/lightswitch_digital/">Instagram</a>
          <a href="https://www.behance.net/lightswitch_digital">Behance</a>
        </div>
      </div>
    </footer>
  </div>
};
