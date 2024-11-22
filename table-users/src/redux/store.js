import { createStore } from "redux";

const initialState = {users : []}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'addUser' : 
            return {
                ...state,
                users : [...state.users, action.payload]
            } 
                
        case 'deleteUser' : 
            return {
                ...state,
               users : state.users.filter(user => user.id !== action.payload)
            }

            case 'incrementAge' :
                return {
                    ...state,
                    users : state.users.map( user => {
                        if(user.id === action.payload){
                            return {...user, age : Number(user.age) + 1}
                        }
                        return {...user}
                    })
                }

                case 'decrementAge' :
                return {
                    ...state,
                    users : state.users.map( user => {
                        if(user.id === action.payload){
                            return {...user, age :  Number(user.age) > 0 ? Number(user.age) - 1 : 0}
                        }
                        return {...user}
                    })
                }

                case 'changeGender' :
                    return {
                        ...state,
                        users : state.users.map( user => {
                            if(user.id === action.payload){
                                return {...user, gender :  user.gender === 'male' ? 'female' : 'male'}
                            }
                            return {...user}
                        })
                    }
                    case 'updateNameUser' :
                        return {
                            ...state,
                            users: state.users.map((user) =>{
                              if(user.id === action.payload.id){
                                return { ...user, name: action.payload.name } 
                            } 
                                return {...user}
                            }
                            )
                          }
                    default :
                    return state
                    }
    

}


const store = createStore(reducer);

export default store


 