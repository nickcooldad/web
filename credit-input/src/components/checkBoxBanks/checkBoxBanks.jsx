import cn from 'classnames'
import './checkBoxBanks.css'
import {namesBanks} from './namesBanks'
import Райффайзенбанк from './images/Райффайзенбанк.svg'
import ВТБ from './images/ВТБ.svg'
import Открытие from './images/Открытие.svg'
import ПСБ from './images/ПСБ.svg'
import Росбанк from './images/Росбанк.svg'
import Газпромбанк from './images/Газпромбанк.svg'
import СовкомБанк from './images/СовкомБанк.svg'
export function CheckBoxBanks({options, onValueChange}){

  function hudnleChangeValue (event){
    const {name, checked} = event.target
    onValueChange((prev) => ({...prev,
      [name]:checked
    }))
  }
  const bankImages = {
    ВТБ,
    СовкомБанк,
    Росбанк,
    Газпромбанк,
    Открытие,
    ПСБ,
    Райффайзенбанк
  }
  return (
    <>
    <h1 className='title'>Банк</h1>
    <div>
      {
        Object.keys(namesBanks).map((bank, index) => {
          return (
            <div>
            <label
              key={index}
              className={cn('checkbox-label', {
                'checkbox-label-color': options[bank]
              })}
            >
              <input
                type="checkbox"
                name={`${bank}`}
                checked={options[bank]}
                onChange={hudnleChangeValue}
                className='checkbox-custom'
              />
              <img src={bankImages[bank]} alt={bank} className='bank-image' />
              <span className='text'>{bank}</span>
            </label>
            </div>
          )
        })
      }
    </div>
  </>
  )
}