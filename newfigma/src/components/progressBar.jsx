import React, { useState, useEffect, useRef } from 'react'
//import st from 'classnames'
import './progressBar.css'
import { Cup } from './images/cup.jsx';
import { Star } from './images/star.jsx';

export  function ProgressBar({thresholds, value, hundleInputArrayChange, hundleInputValueChange, width}) {





  return (
    <>
     <input className='inputArray' placeholder='Введите ряд чисел через запятую= 10,20,30,40' value={thresholds.join(',')} onChange={hundleInputArrayChange}></input>
     <input className='inputValue' placeholder='Введите значение' value={value} onChange={hundleInputValueChange}></input>
    <div className='parentBar' >
      {thresholds.map((bar, index) => {
        const lastItemIndex = thresholds.at(-1);
        const isFilled = value >= bar;
        const prevThreshold = index > 0 ? thresholds[index - 1] : 0;
        const fillPercentage = isFilled ? 100 : (value - prevThreshold) / (bar - prevThreshold) * 100;
        return <div className='progressBar' style={width}>
          
          <div className='topBlock' style={{width: 900/thresholds.length + 10}}>
            {index !== lastItemIndex ? <Star color={isFilled ? "blue" : 'none'}/> : <Cup color={isFilled ? "blue" : '#e0e0e0'} style={{marginRight: index === lastItemIndex ? '10px' : ''}}/>}
          </div>

          <div className='centerBlock' style={
            { 
              background: `linear-gradient(to right, rgb(70, 27, 242) ${fillPercentage}%, #e0e0e0 ${fillPercentage}%)`,
            }}> 
            </div>
 
          <div className='bottomBlock' style={{width: 900/thresholds.length + 10}}>
            <div className='bottomBlockNull'>{index === 0 || (index === 0 && index === thresholds.length - 1) ? '0' : ''}</div>
            <div className='bottomBlockNumber' style={{marginRight: index === lastItemIndex ? '10px' : ''}}>
              {index === 0 && value <= thresholds[0] 
              ?`${value}/${thresholds[0]}` : index === lastItemIndex && value > thresholds[0] 
              ? `${value > thresholds.at(-1) ? thresholds.at(-1) : value}/${thresholds.at(-1)}` : bar}
              </div>
          </div>

        </div>
      })}
    </div>
    </>
  )
}
