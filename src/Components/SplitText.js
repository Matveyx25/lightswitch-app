import React, { useEffect } from 'react'
import splt from 'spltjs';
import anime from 'animejs/lib/anime.es.js';

export const SplitText = ({ text, id }) => {
    useEffect(() => {
        anime.timeline({loop: false})
        .add({
            targets: `#text${id} .letter`,
            translateY: ["1.1em", 0],
            duration: 750,
            delay: (el, i) => 50 * i
        })
    }, []);

    return (
        <span id={`text${id}`} className="splitWrapper">
            {text.split('').map((letter, index) => {
            return <span key={index} className='letter'>{letter === ' ' ? '\u00A0' : letter}</span>
        })}
        </span>
    )
}
