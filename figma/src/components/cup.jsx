import React from 'react'
import './cup.css'

export function Cup() {
  return (
    <div className='cupIsWreath'>
        <img className='leftWreath' src='./images/wreathLeft.svg' alt='left wreath'></img>
        <img className="cup" src='./images/cup.svg' alt='cup'></img>
        <img className='rightWreath' src='./images/wreathRight.svg' alt='right wreath'></img>
    </div>
  )
}
