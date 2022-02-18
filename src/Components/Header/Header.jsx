import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';

export const Header = () => {
  return <div className="container">
    <header className={s.header}>
        <NavLink to={'/'} className={s.header__logo}>LightSwitch</NavLink>
        <div className={s.desctop}>
          <div className={s.header__links}>
            <ul>
              <li><NavLink to={'/portfolio'} className={s.header__link}>Наши проекты</NavLink></li>
              {/* <li><NavLink to={'/serves'} className={s.header__link}>Услуги</NavLink></li> */}
              {/* <li><NavLink to={'/team'} className={s.header__link}>Команда</NavLink></li> */}
            </ul>
            <NavLink to={'/contact'} className={s.header__link__active}>Связаться</NavLink>
            {/* <Dropdown 
            options={['ru', 'en']} 
            value={'ru'} 
            className='lang-dropdown'
            arrowClosed={<ArrowDown2 />}
            arrowOpen={<ArrowDown2 className="open"/>}/> */}
          </div>
        </div>
        <span className={s.burger}></span>
    </header>
  </div>
};
