import React from 'react';
import s from './FlexCard.module.css'
import { NavLink } from 'react-router-dom';

export const FlexCard = ({title, types, desc, href, src}) => {
  return <div className={s.wrapper}>
      <img src={src}/>
      <ul>
          {types.map((type, i) => <li key={i}>{type}</li>)}
      </ul>
      <h5>{title}</h5>
      <p>{desc}</p>
      <NavLink to="/">Посмотреть кейс</NavLink>
  </div>;
};
