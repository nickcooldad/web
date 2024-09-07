import React, { useState } from 'react'
import './progressBar.css'
import { Cup } from './images/cup.jsx';
import { Star } from './images/star.jsx';

export  function ProgressBar() {
 
  const [data, setData] = useState({arrayInput : [], value : 0})
  const width = {width : 900 / data.arrayInput.length}
  const handleInputArrayChange = (event) => {
    const array = event.target.value.split(',').map(item => item.trim())
    setData(prev => ({
      ...prev,
      arrayInput: array
    }))
  }

  const handleInputValueChange = (event) => {
  setData(prev => ({
  ...prev,
  value: event.target.value}))
  }

  return (
    <>
     <input className='inputArray' placeholder='Введите ряд чисел через запятую= 10,20,30,40' value={data.arrayInput.join(',')} onChange={handleInputArrayChange}></input>
     <input className='inputValue' placeholder='Введите значение' value={data.value} onChange={handleInputValueChange}></input>
    <div className='parentBar' >
      {data.arrayInput.map((bar, index) => {
        const lastItemIndex = data.arrayInput.length - 1;
        const isFilled = data.value >= bar;
        const prevThreshold = index > 0 ? data.arrayInput[index - 1] : 0;
        const fillPercentage = isFilled ? 100 : (data.value - prevThreshold) / (bar - prevThreshold) * 100;
        return <div className='progressBar' style={width}>
          
          <div className='topBlock' style={{width: 900/data.arrayInput.length + 10}}>
            {index !== lastItemIndex ? <Star color={isFilled ? "blue" : 'none'}/> : <Cup color={isFilled ? "blue" : '#e0e0e0'} style={{marginRight: index === lastItemIndex ? '10px' : ''}}/>}
          </div>
          <div className='centerBlock' style={
            { borderRight: index !== lastItemIndex ? '2px solid #c4bebe' : '',
              borderTopLeftRadius: index === 0 ? '25px' : '',
              borderBottomLeftRadius: index === 0 ? '25px' : '',
              borderTopRightRadius: index === lastItemIndex ? '25px' : '',
              borderBottomRightRadius: index === lastItemIndex ? '25px' : '',
              background: `linear-gradient(to right, rgb(70, 27, 242) ${fillPercentage}%, #e0e0e0 ${fillPercentage}%)`,
              position: 'relative',
            }}> 
            </div>
          <div className='bottomBlock' style={{width: 900/data.arrayInput.length + 10}}>
            <div className='bottomBlockNull'>{index === 0 || (index === 0 && index === data.arrayInput.length - 1) ? '0' : ''}</div>
            <div className='bottomBlockNumber' style={{marginRight: index === lastItemIndex ? '10px' : ''}}>{index === 0 && data.value <= data.arrayInput[0] ?  `${data.value}/${data.arrayInput[0]}` : index === lastItemIndex && data.value > data.arrayInput[0] ? `${data.value > data.arrayInput.at(-1) ? data.arrayInput.at(-1) : data.value}/${data.arrayInput.at(-1)}` : bar}</div>
          </div>
        </div>
      })}
    </div>
    </>
  )
}
