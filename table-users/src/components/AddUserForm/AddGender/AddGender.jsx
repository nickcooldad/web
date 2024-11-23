import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import s from './AddGender.module.css'

export function AddGender({value, onChange}){

    const handleChangeRadio = (e) => {
        onChange(e.target.value)
    }
    return(
        <div className={s.addGender}>
            gender
                <form className={s.formGender}>
                    <label>
                      <input 
                        type='radio' 
                        name='gender' 
                        value='male' 
                        checked={value === 'male'} 
                        onChange={handleChangeRadio}
                        />
                        male
                    </label>
                    <label>
                      <input 
                        type='radio' 
                        name='gender' 
                        value='female' 
                        checked={value === 'female'} 
                        onChange={handleChangeRadio}
                        />
                        female
                    </label>
                </form>
        </div>
    )
}