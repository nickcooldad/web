import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import s from './AddGender.module.css'

export function AddGender(){
    return(
        <div className={s.addGender}>
            gender
                <foarm className={s.formGender}>
                    <label>
                      <input type='radio' name='gender' value='male'/>
                        male
                    </label>
                    <label>
                      <input type='radio' name='gender' value='female'/>
                        female
                    </label>
                </foarm>
        </div>
    )

}