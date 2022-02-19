import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export const SectionTitle = ({ title, id }) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        // gsap.from(`#title${id}`, {
        //     x: '100%',
        // });
        gsap.to(`#title${id}`, {
            x: 0,
            duration: 5,
            scrollTrigger: {
                trigger: `#title${id}`,
                start: "top 300px",
                end: "bottom 200px",
                // markers: true,
                scrub: true
            }
        });
    }, []);

    return (
        <h1 className='sectionTitle'>
            <span id={`title${id}`}>{title}</span>
        </h1>
    )
}
