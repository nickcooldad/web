
import {createStore} from 'redux'
import { counter } from './reducer'


export const store = createStore(counter)

store.subscribe(() => {
  console.log("😈", store.getState());
})