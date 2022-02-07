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

SwiperCore.use([Mousewheel, Scrollbar]);

export const HomePage = () => {
  return <AnimtedPage>
    <div className={s.wrapper}>
      <div className="container">
        <section className={s.headerSection}>
            <h1>
              <div>Лаборатория</div> 
              <span>цифрового</span>  
              <div>пронстранства</div> 
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
          desc="Мы ежедневно делимся своим опытом, обучая партнеров приумножать капитал и масштабировать свой бизнес" 
          src={'/img/img1.jpg'}/>
          <ProjectCard 
          title="RamDom" 
          types={['Design','Web']} 
          desc="Мы ежедневно делимся своим опытом, обучая партнеров приумножать капитал и масштабировать свой бизнес" 
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
                        После получения оплаты мы начинаем работу над конкретным этапом. По завершении мы договариваемся о видеозвонке и представляем результат работы. После звонка мы фиксируем результат письмом на почту, просим согласовать этап или внести изменения.
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
                        <p>Магазины</p> 
                        <Add/>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="accardion-row">
                      <div>
                        <p>
                        После получения оплаты мы начинаем работу над конкретным этапом. По завершении мы договариваемся о видеозвонке и представляем результат работы. После звонка мы фиксируем результат письмом на почту, просим согласовать этап или внести изменения.
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
                        После получения оплаты мы начинаем работу над конкретным этапом. По завершении мы договариваемся о видеозвонке и представляем результат работы. После звонка мы фиксируем результат письмом на почту, просим согласовать этап или внести изменения.
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
                        После получения оплаты мы начинаем работу над конкретным этапом. По завершении мы договариваемся о видеозвонке и представляем результат работы. После звонка мы фиксируем результат письмом на почту, просим согласовать этап или внести изменения.
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
                        <p>Дизайн поддержка</p> 
                        <Add/>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="accardion-row">
                      <div>
                        <p>
                        После получения оплаты мы начинаем работу над конкретным этапом. По завершении мы договариваемся о видеозвонке и представляем результат работы. После звонка мы фиксируем результат письмом на почту, просим согласовать этап или внести изменения.
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
          </Accordion>
        </section>
        <section className={s.teamSection}>
          <h1 className={s.sectionTitle}>Команда</h1>
          <div className={s.teamSection__row}>
            <div className={s.teamSection__content}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h5>Награды</h5>
              <p>Победители полуфинала <br /> Цифровой прорыв</p>
              <NavLink to="/">Перейти для ознакомления</NavLink>
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
                mousewheel={true}
                slidesOffsetAfter={300}
              >
                <SwiperSlide>
                  <SlideContent name={"Илья Фалалеев"} 
                  job={"ux/ui Дизайнер"} 
                  desc={"За почти 20 лет практики в дизайне я поработал в лучших дизайн‑командах, запускал стартапы и открыл одну из самых награждаемых дизайн‑студий в РФ и СНГ"}
                  src={'/img/photo1.jpg'}/>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideContent name={"Илья Фалалеев"} 
                  job={"ux/ui Дизайнер"} 
                  desc={"За почти 20 лет практики в дизайне я поработал в лучших дизайн‑командах, запускал стартапы и открыл одну из самых награждаемых дизайн‑студий в РФ и СНГ"}
                  src={'/img/photo1.jpg'}/>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideContent name={"Илья Фалалеев"} 
                  job={"ux/ui Дизайнер"} 
                  desc={"За почти 20 лет практики в дизайне я поработал в лучших дизайн‑командах, запускал стартапы и открыл одну из самых награждаемых дизайн‑студий в РФ и СНГ"}
                  src={'/img/photo1.jpg'}/>
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
