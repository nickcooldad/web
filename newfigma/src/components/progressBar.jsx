import React, { useState } from 'react'
import cn from 'classnames'
import './progressBar.css'
import { width } from '../width/width'

export function ProgressBar({ thresholds, value }) {
const definitionOnDoubleNumbers = (array, value) => {
  return array.findIndex(element => element >= value)
}
//подкаст подлодка
  return (
    <div className='parentBar' >
      <div className='progressBarBackground'>
        <div className='progressBarFill' style={{ width: `${width(thresholds, value)}%` }}></div>
      </div>
      {thresholds.map((bar, index) => { 
        const isFilled = value >= bar;
        const prevThreshold = index > 0 ? thresholds[index - 1] : 0;
        const rangeValue = value >= thresholds.at(-1) ? thresholds.at(-1) : value

        return <div className={cn({
          progressBar: true,
          colored: isFilled
        })
        } >
          <div className={cn({
            centerBlock:true,
            firstChild: index === 0
          })}> </div>
          <div className={cn({
            bottomBlock: true,
            // bottomBlockMargin: index === definitionOnDoubleNumbers(thresholds, rangeValue),
            // bottomBlockMarginLastChild: index === thresholds.length - 1 && index === definitionOnDoubleNumbers(thresholds, rangeValue) 
          })
        }>
              {
               index === definitionOnDoubleNumbers(thresholds, rangeValue) 
               ? `${rangeValue}/${bar}` : `${bar}`
              }
          </div>
        </div>
      })}
    </div>
  )
}
