import React, { useState } from 'react';

export const SlideContent = ({name, src, job, desc}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={visible && 'show'}>
      <div className='slide'>
        <div className="img-free">
          <div className="img-wrapper">
            <img src={src}/>
          </div>
          <div className="plus" onClick={() => setVisible(!visible)}>
            {visible ? '-' : '+'}
          </div>
        </div>
        <h5 className="name">{name}</h5>
        <p className="job">{job}</p>
      </div>
      { visible && <div className="desc">{desc}</div>} 
    </div>
  )
};
