import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

export const Footer = () => {
  return <div className="container">
    <footer className={s.footer}>
      <div className={s.flex}>
        <a href="mailto:contact@lightswitch.digital">contact@lightswitch.digital</a>
        <p className={s.adress}>Россия, Самара, улица Дыбенко, 30</p>
      </div>
      <div className={s.flex}>
        <div className={s.copyright}>@2022 <NavLink to={'/'} className={s.logo}> LightSwitch</NavLink></div>
        <div className={s.social}>
          <a href="#">ig</a>
          <a href="#">tw</a>
          <a href="#">fb</a>
          <a href="#">vk</a>
        </div>
      </div>
    </footer>
  </div>
};
