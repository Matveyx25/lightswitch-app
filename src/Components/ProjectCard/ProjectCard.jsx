import React from 'react';
import s from './ProjectCard.module.css'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        <motion.div 
        viewport={{ once: true, margin: '-200px' }} 
        initial={{height: 0}}
        whileInView={{height: ['0%', '100%', '100%'], y: ['0%', '0%', '100%']}}
        transition={{ duration: 1.5, times: [0, .5, 1]}}/>
        <motion.img src={src} 
        viewport={{ once: true, margin: '-200px' }} 
        initial={{ opacity: 0 }} 
        whileInView={{opacity: 1 }} 
        transition={{ duration: .1, delay: .5}}/>
      </div>
  </div>;
};
