import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './WhiteBlock.module.css';

export const WhiteBlock = () => {
  return <section className={s.lightSection}>
      <div className="container">
        <h1>Понравились работы ?</h1>
        <p>Свяжитесь с нами и давайте вместе создадим что-то удивительное</p>
        <NavLink to="/">Написать нам</NavLink>
      </div>
    </section>
};
