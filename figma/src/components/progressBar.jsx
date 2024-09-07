import React from 'react'
import "./progressBar.css"
import { ReactComponent as  BigStar } from './images/bigStar.svg';
import { ReactComponent as  Star } from './images/star.svg';
import {Cup} from './cup.jsx'

export function ProgressBar({thresholds, value}) {
  let pixel

  if(value <= 25){
    pixel = 118.2/25*value
  }
  if(value >= thresholds[0] && value <= thresholds[1]){
    pixel = 151.3/(thresholds[1] - thresholds[0])*(value - 25) + 118.2
  }
  if(value >= thresholds[1] && value <= thresholds[2]){
    pixel = 148/(thresholds[2] - thresholds[1])*(value  - 50) + 269.5
  }
   
  if(value >= thresholds[2] && value <= thresholds[3]){
    pixel = 148/(thresholds[3] - thresholds[2])*(value - 100) + 417.5
  }
   
  if(value >= thresholds[3] && value <= thresholds[4]){
    pixel = 148/(thresholds[4] - thresholds[3])*(value - 200) + 565.5
  }

  if(value >= thresholds[4]){
    pixel = 187/(thresholds[5] - thresholds[4])*(value - 500) + 713
  }
  const colorValue = {
    fill: 'blue'
  }
  const restangleIsValue = {
    background:  `linear-gradient(to right, rgb(70, 27, 242) ${pixel}px, #e0e0e0 ${pixel}px`}
      let numberListFirst
      let numberListLast
    if(value > 500){
      numberListFirst = 25
      numberListLast = value < 1000 ? `${value}/1000` : '1000/1000'
    } else{
      numberListFirst = value < 25 ? `${value}/25` : '25/25'
      numberListLast = 1000
    }

  return (
    <div className='rating'>
    <div className='topBlock'>
      <BigStar className='star1' alt='big star' style={value >= thresholds[0] ? colorValue : {}}/>
      <Star className='star2'  alt='star'  style={value >= thresholds[1] ? colorValue : {}} />
      <Star className='star3'  alt='star'  style={value >= thresholds[2] ? colorValue : {}}/> 
      <Star className='star4' alt='star'  style={value >= thresholds[3] ? colorValue : {}}/>
      <Star className='star5' alt='star'  style={value >= thresholds[4] ? colorValue : {}}/>
      <Cup color={value >= thresholds[5] ? 'blue' : "#e0e0e0"} className='cup'  alt='cup' />
    </div>
          
    <div className='restangle' style={restangleIsValue}>
      <div className='lines'>
      <div className='lineBigStar'>
        <div className='line'></div>
      </div>
      <div className='lineStar'>
      <div className='line'></div>
      </div>
      <div className='lineStar'>
      <div className='line'></div>
      </div>
      <div className='lineStar'>
      <div className='line'></div>
      </div>
      <div className='lineStar'>
      <div className='line'></div>
      </div>
      <div className='cupLine'>
      <div className='line5'></div>
      </div>
      </div>
      
      <div className='bottomBlockNumber'>
      <div className='bottomBlockNull'>0</div>
    <div className='bottomBlock'>
    <div className='numberBigStar'>{numberListFirst}</div>
    <div className='numberStar'>{thresholds[1]}</div>
    <div className='numberStar'><div>{thresholds[2]}</div></div>
    <div  className='numberStar'><div>{thresholds[3]}</div></div>
    <div  className='numberStar'><div>{thresholds[4]}</div></div>
    <div  className='numberCup'><div>{numberListLast}</div></div>
    </div>
    </div>
    </div>
    </div>
  )
}
