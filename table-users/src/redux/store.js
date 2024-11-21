import { createStore } from "redux";

const initialState = {users : [{id: 1, name: 'alex', age: '3', gender : 'male'}]}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'addUser' : 
            return {
                ...state,
                users : [...state.users, action.payload]
            } 
                
            
        case 'deleteUser' : 
            return {
                ...state.users.filter(user => user !== action.payload.id
                )
            }                                          
        
        default :
         return state
        }
    

}


const store = createStore(reducer);

export default store


 