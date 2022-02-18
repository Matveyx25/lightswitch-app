import React from 'react';
import { ContactUs } from '../../Components/Form';
import s from './ContactPage.module.css'
import { AnimtedPage } from '../../AnimtedPage';

export const ContactPage = () => {
  return <AnimtedPage>
      <div className="container">
        <section className={s.projectsSection}>
            <h1 className={s.sectionTitle}>Контакты</h1>
            <div className={s.row}>
              <div className={s.info}>
                <ul>
                  <li>
                    <h5>Почта</h5>
                    <a href="mailto:contact@lightswitch.digital">contact@lightswitch.digital</a>
                  </li>
                  <li>
                    <h5>Социальные сети</h5>
                    <div className={s.links}>
                        <a href="https://www.instagram.com/lightswitch_digital/">Instagram</a>
                        <a href="https://www.behance.net/lightswitch_digital">Behance</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={s.form}>
                <ContactUs/>
              </div>
            </div>
        </section>
    </div>
  </AnimtedPage>
  
};
