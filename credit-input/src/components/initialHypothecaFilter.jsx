import React from 'react'
import './initialHypothecaFilter.css'
import cn from 'classnames'

export function InitialHypothecaFilter({title, min, max, value, suggestedValues, onValueChange, unit}) {

  function hudnleChangeValue (event){
    onValueChange(Number(event.target.value))
  }
  return (
    <>
    <h1 className='name'>{title}</h1>
    <div className='inputs'>  
        <input className='inputValue' value={value} onChange={hudnleChangeValue} />
        <span className='placeholderInput'>{unit(value)}</span>
        <input type='range' className='rangeInput' min={min} max={max} value={value} onChange={hudnleChangeValue}/>
    </div>
    <div className='buttons'>
        {suggestedValues.map(item => {
          return <button className={cn({
           button:true,
           buttonActive: value === item
          })} onClick={() => onValueChange(item)} disabled={value === item}>{`${item} ${unit(item)}`}</button>
        })
        }
    </div>
    </>
  )
}
