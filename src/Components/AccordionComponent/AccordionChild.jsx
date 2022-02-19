import { Add } from 'iconsax-react';
import React from 'react'
import { AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

export const AccordionChild = ({title, desc, points}) => {
  return (
    <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton>
            <p>{title}</p> 
            <Add/>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <div className="accardion-row">
            <div>
            <p>
                {desc}
            </p>  
            </div>
            <ul>
                {points.map((point, index) => {
                   return <li key={index}>{point}<Add/></li>
                })}
            </ul>
        </div>
        </AccordionItemPanel>
    </AccordionItem>
  )
}
