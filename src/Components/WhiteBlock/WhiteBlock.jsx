import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './WhiteBlock.module.css';
import { motion } from 'framer-motion';

export const WhiteBlock = () => {
  
  return <section className={s.lightSection}>
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: '100%' }}
      viewport={{ once: true}}
      className={s.bg} 
      transition={{ duration: .5 }}/>
      <div className="container">
        <motion.h1 viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ delay: .5 }}>Enjoy our work ?</motion.h1>
        <motion.p viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ delay: .5 }}>Contact us and let's create something amazing together</motion.p>
        <NavLink to="/contact">Contact us</NavLink>
      </div>
    </section>
};
