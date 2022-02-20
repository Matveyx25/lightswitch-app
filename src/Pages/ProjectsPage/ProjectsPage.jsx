import React from 'react';
import { FlexCard } from '../../Components/FlexCard/FlexCard';
import s from './ProjectPage.module.css'
import Masonry from 'react-masonry-css'
import { WhiteBlock } from '../../Components/WhiteBlock/WhiteBlock';
import { AnimtedPage } from '../../AnimtedPage';

export const ProjectsPage = () => {
  return  <AnimtedPage>
    <div className="container">
        <section className={s.projectsSection}>
            <h1 className={s.sectionTitle}>Projects</h1>
            <Masonry
            breakpointCols={{1140: 1}}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                    <FlexCard 
                    title="Lot Brokers Academy"
                    types={['Design','Web','Landing']} 
                    desc="Мы ежедневно делимся своим опытом, обучая партнеров приумножать капитал и масштабировать свой бизнес" 
                    src={'/img/imgBig.jpg'}/>
                    <FlexCard 
                    title="RamDom" 
                    types={['Design','Web']} 
                    desc="Мы ежедневно делимся своим опытом, обучая партнеров приумножать капитал и масштабировать свой бизнес" 
                    src={'/img/img2.jpg'}/>
                    <FlexCard 
                    title="Lot Brokers Academy"
                    types={['Design','Web','Landing']} 
                    desc="Мы ежедневно делимся своим опытом, обучая партнеров приумножать капитал и масштабировать свой бизнес" 
                    src={'/img/imgBig.jpg'}/>
                    <FlexCard 
                    title="RamDom" 
                    types={['Design','Web']} 
                    desc="Мы ежедневно делимся своим опытом, обучая партнеров приумножать капитал и масштабировать свой бизнес" 
                    src={'/img/img2.jpg'}/>
            </Masonry>
        </section>
    </div>
    <WhiteBlock/>
  </AnimtedPage>
};
