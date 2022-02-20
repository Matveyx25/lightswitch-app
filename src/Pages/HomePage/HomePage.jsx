import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import s from './HomePage.module.css'
import { ProjectCard } from '../../Components/ProjectCard/ProjectCard';
import { SlideContent } from '../../Components/SlideContent';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/scrollbar"
import SwiperCore, {Mousewheel, Scrollbar} from 'swiper';
import { WhiteBlock } from '../../Components/WhiteBlock/WhiteBlock';
import { AnimtedPage } from '../../AnimtedPage';
import { motion } from 'framer-motion';
import { AccordionChild } from '../../Components/AccordionComponent/AccordionChild';
import { Accordion } from 'react-accessible-accordion';
import { SectionTitle } from '../../Components/SectionTitle';

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
                <motion.h1 variants={title} animate={'show'}>making</motion.h1>
              </div> 
              <div className={s.overflow}>
                <motion.span variants={title} animate={'show'} transition={{ delay: .2}}>digital space</motion.span>
              </div> 
              <div className={s.overflow}>
                <motion.h1 variants={title} animate={'show'} transition={{ delay: .4}}>a better place</motion.h1>
              </div> 
            </h1>
            <ul className={s.serves}>
            <li>Websites</li>
            <li>Ecommerce</li>
            <li>Apps</li>
            <li>Identity</li>
            <li>Design support</li>
            </ul>
        </section>
        <section className={s.projectsSection}>
          <SectionTitle title={"Projects"} id={1}/>
          <ProjectCard 
          title="Lot Brokers Academy"
          types={['Design','Web','Landing']} 
          desc="Investment website of a local company selling financial courses."
          src={'/img/img1.jpg'}/>
          <ProjectCard 
          title="RamDom" 
          types={['Design','Web']} 
          desc="A site for buying adaptable home designs with ready-made estimates."
          src={'/img/img2.jpg'}/>
          <NavLink to={'/portfolio'} className={s.projectsLink}>All projects</NavLink>
        </section>
        <section className={s.serveSection}>
        <SectionTitle title={"Services"} id={2}/>
          <Accordion allowZeroExpanded>
            <AccordionChild 
            title={'Websites'}
            desc={'We have been developing various websites for 8 years. We know how to intelligently present a product and turn visitors into people interested in the product. From beautiful web-sites that impress with their creativity and aesthetics, to corporate portals that serve hundreds of thousands of employees.'}
            points={['Briefing', 'UX/Analysis', 'Design concept', 'Pages design', 'Adaptation']}/>
            <AccordionChild 
            title={'Apps'}
            desc={'Since 2016 we have been developing mobile apps for companies from Russia, USA and Europe. From a simple idea of the customer we will make an application that users will want to have in their smartphone.'}
            points={['Briefing', 'UX/Analysis', 'Design concept', 'Pages design', 'Adaptation']}/>
            <AccordionChild 
            title={'Identity'}
            desc={'We develop a set of elements and materials that create a beautiful image of the company in the eyes of consumers. Identity works for brand recognition and memorability, and creates a first impression of the brand.'}
            points={['Briefing', 'UX/Analysis', 'Design concept', 'Pages design', 'Adaptation']}/>
          </Accordion>
        </section>
        <section className={s.teamSection}>
        <SectionTitle title={"About us"} id={3}/>
          <div className={s.teamSection__row}>
            <div className={s.teamSection__content}>
              <p>
                It all started with a dream of two students
                that they would create cool digital products for global brands. We were burning with the desire to create first-class projects, something that would benefit companies and people in general. The marketplace evolved, and we evolved with it. Years of practice in the IT world have made us experts in our field.
              </p>
              <h5>Nominations</h5>
              <p>Winners of semifinal<br /> <b>Leaders of digital</b></p>
              <a href="https://leadersofdigital.ru">Learn more</a>
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
                  <SlideContent name={"Egor Ovchinnikov"}
                                job={"Software Engineer"}
                                desc={"Started programming before I started walking. During 8 years of development I worked in five Russian IT-giants, as well as actively participated in the development of open source projects and contributed to the community"}
                                src={'/img/niger.webp'}/>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideContent name={"Matvey Stepanov"}
                  job={"Frontend Developer"}
                  desc={"5 years of experience in running projects from scratch to production, I vouch for the quality of the interface of your application"}
                  src={'/img/gypsy.jpg'}/>
                </SwiperSlide>
                <SwiperSlide>
                  <SlideContent name={"Ilya Falaleev"}
                  job={"UX/UI Designer"}
                  desc={"In nearly 20 years of design practice, I have worked in the best design teams, launched startups, and opened one of the most award-winning design studios in Russia and the CIS"}
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
