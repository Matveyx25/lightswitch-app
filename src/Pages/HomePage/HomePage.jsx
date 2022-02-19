import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import s from './HomePage.module.css'
import { ProjectCard } from '../../Components/ProjectCard/ProjectCard';
import { SlideContent } from '../../Components/SlideContent';
import { NavLink } from 'react-router-dom';
import { Add } from 'iconsax-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar"
import SwiperCore, {Mousewheel, Scrollbar} from 'swiper';
import { WhiteBlock } from '../../Components/WhiteBlock/WhiteBlock';
import { AnimtedPage } from '../../AnimtedPage';
import { motion } from 'framer-motion';

SwiperCore.use([Mousewheel, Scrollbar]);

export const HomePage = () => {
  const title = {
    show: {
      y: [200, 0]
    }
  }

  return <AnimtedPage>
    <div className={s.wrapper}>
      <div className="container">
        <section className={s.headerSection}>
            <h1>
              <div className={s.overflow}>
                <motion.h1 variants={title} animate={'show'}>Лаборатория</motion.h1> 
              </div> 
              <div className={s.overflow}>
                <motion.span variants={title} animate={'show'} transition={{ delay: .2}}>цифрового</motion.span> 
              </div> 
              <div className={s.overflow}>
                <motion.h1 variants={title} animate={'show'} transition={{ delay: .4}}>пронстранства</motion.h1> 
              </div> 
            </h1>
            <ul className={s.serves}>
            <li>Сайты</li> 
            <li>Магазины</li> 
            <li>Приложения</li> 
            <li>Айдентика</li> 
            <li>Дизайн поддержка</li> 
            </ul>
        </section>
        <section className={s.projectsSection}>
          <h1 className={s.sectionTitle}>Проекты</h1>
          <ProjectCard 
          title="Академия аукционных брокеров" 
          types={['Design','Web','Landing']} 
          desc="Инвестиционный сайт местной компании, занимающейся продажей курсов финансовой тематики." 
          src={'/img/img1.jpg'}/>
          <ProjectCard 
          title="RamDom" 
          types={['Design','Web']} 
          desc="Площадка, для покупки адаптируемых проектов домов с готовой сметой." 
          src={'/img/img2.jpg'}/>
          <NavLink to={'/portfolio'} className={s.projectsLink}>Все проекты</NavLink>
        </section>
        <section className={s.serveSection}>
          <h1 className={s.sectionTitle}>Услуги</h1>
          <Accordion allowZeroExpanded>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <p>Сайты</p> 
                        <Add/>
                      </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <div className="accardion-row">
                      <div>
                        <p>
                            Мы занимаемся разработкой различных сайтов вот уже 8 лет. Умеем граматно презентовать продукт, превратить посетителей в заинтересованных продуктом людей. От красивых лендингов, которые поражают своей креативностью и эстетикой, до корпоративных порталов, обслуживающих сотни тысяч сотрудников.
                        </p>  
                      </div>
                      <ul>
                        <li>Брифинг<Add/></li>
                        <li>UX/Аналитика<Add/></li>
                        <li>Дизайн концепт<Add/></li>
                        <li>Дизайн всех страниц<Add/></li>
                        <li>Адаптивы<Add/></li>
                        <li>Верстка<Add/></li>
                      </ul>
                    </div>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <p>Приложения</p> 
                        <Add/>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="accardion-row">
                      <div>
                        <p>
                            С 2016 года разрабатываем мобильные приложения для компаний из России, США и Европы. Из простой идеи заказчика сделаем приложение, которое пользователи захотят иметь у себя в смартфоне.
                        </p>
                      </div>
                      <ul>
                        <li>Брифинг<Add/></li>
                        <li>UX/Аналитика<Add/></li>
                        <li>Дизайн концепт<Add/></li>
                        <li>Дизайн всех страниц<Add/></li>
                        <li>Адаптивы<Add/></li>
                        <li>Верстка<Add/></li>
                      </ul>
                    </div>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <p>Айдентика</p> 
                        <Add/>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="accardion-row">
                      <div>
                        <p>
                            Разработаем совокупность элементов и материалов, которые создают красивый образ компании в глазах потребителей. Идентичность работает на узнаваемость и запоминаемость бренда, и создает первое впечатление о нем.
                        </p>
                      </div>
                      <ul>
                        <li>Брифинг<Add/></li>
                        <li>Анализ рынка и мудборд<Add/></li>
                        <li>Разработка концепций фирменного стиля<Add/></li>
                        <li>Создание брендбука<Add/></li>
                      </ul>
                    </div>
                  </AccordionItemPanel>
              </AccordionItem>
          </Accordion>
        </section>
        <section className={s.teamSection}>
          <h1 className={s.sectionTitle}>Команда</h1>
          <div className={s.teamSection__row}>
            <div className={s.teamSection__content}>
              <p>
                  Все начиналось с мечты двух студентов
                  <br/>
                  о том, что они будут создавать крутые digital-продукты для мировых брендов.
                  Мы горели желанием создавать первоклассные проекты, что-то, что будет приносить пользу компаниям и людям в целом. Рынок развивался, и мы развивались вместе с ним.
                  Годы практики в мире IT сделали нас специалистами своей области.
              </p>
              <h5>Награды</h5>
              <p>Победители полуфинала <br /> Цифровой прорыв</p>
              <a href="https://leadersofdigital.ru">Перейти для ознакомления</a>
            </div>
            <div className={s.teamSection__slider}>
              <Swiper
                spaceBetween={36}
                direction={'horizontal'}
                slidesPerView={'auto'}
                scrollbar={{
                  "clickable": true
                }}
                grabCursor={true}
                // mousewheel={true}
                slidesOffsetAfter={300}
              >
                <SwiperSlide>
                  <SlideContent name={"Матвей Степанов"} 
                  job={"Fronted-dev"} 
                  desc={"5 лет опыта ведения проектов с нуля до продакшена, ручаюсь за качественный интерфейс вашего приложения"}
                  src={'/img/unsplash_YmQ8TrsieE4.jpg'}/>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideContent name={"Егор Овчинников"} 
                  job={"Backend-dev"} 
                  desc={"За почти 20 лет практики в дизайне я поработал в лучших дизайн‑командах, запускал стартапы и открыл одну из самых награждаемых дизайн‑студий в РФ и СНГ"}
                  src={'/img/unsplash_sibVwORYqs0.jpg'}/>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideContent name={"Илья Фалалеев"} 
                  job={"ux/ui Дизайнер"} 
                  desc={"За почти 20 лет практики в дизайне я поработал в лучших дизайн‑командах, запускал стартапы и открыл одну из самых награждаемых дизайн‑студий в РФ и СНГ"}
                  src={'/img/photo_2022-01-06_19-27-01 1.jpg'}/>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
      <WhiteBlock/>
    </div>
  </AnimtedPage>
};
