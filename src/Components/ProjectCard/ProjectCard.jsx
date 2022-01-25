import React from 'react';
import s from './ProjectCard.module.css'
import { NavLink } from 'react-router-dom';

export const ProjectCard = ({title, types, desc, href, src}) => {
  return <div className={s.wrapper}>
      <div className={s.content}>
        <ul>
            {types.map((type, i) => <li key={i}>{type}</li>)}
        </ul>
        <h5>{title}</h5>
        <p>{desc}</p>
        <NavLink to="/">Посмотреть кейс</NavLink>
      </div>
      <div className={s.img}>
        <img src={src}/>
      </div>
  </div>;
};
