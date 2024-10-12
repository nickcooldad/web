import cn from 'classnames'
import './checkBoxBanks.css'
import {namesBanks} from './namesBanks'
import Райффайзенбанк from './images/Райффайзенбанк.svg'
import { banksImages } from './namesBanks'

console.log(">>>", Райффайзенбанк);

export function CheckBoxBanks({banksList, options, onValueChange}){

function hundleChangeValue (event) {
  const value = event.target.name
  const data = new Set(options)
  if(options.has(value)){
    data.delete(value)
  } else{
    data.add(value)
  }
  onValueChange(data);
}
  return (
    <>
    <h1 className='title'>Банк</h1>
    <div>
      {
        banksList.map((bank, index) => {
          return (
            <div>
            <label
              key={index}
              className={cn('checkbox-label', {
                'checkbox-label-color': options.has(bank)
              })}
            >
              <input
                type="checkbox"
                name={bank}
                checked={options.has(bank)}
                onChange={hundleChangeValue}
                className='checkbox-custom'
              />
              <img src={banksImages[bank]} alt={bank} className='bank-image' />
              <span className='text'>{namesBanks[bank]}</span>
            </label>
            </div>
          )
        })
      }
    </div>
  </>
  )
}