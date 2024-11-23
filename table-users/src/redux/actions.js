
export function  deleteUser(id) {
    return {
        type : 'deleteUser',
        payload : id
    }
}

export function incrementAge (id) {
   return {
        type : 'incrementAge',
        payload : id
    }
}

export function decrementAge (id) {
    return {
         type : 'decrementAge',
         payload : id
     }
 }

 
 export function changeGender (id) {
    return {
         type : 'changeGender',
         payload : id
     }
 }

 export function updateNameUser (id, editName){
  return {
    type : 'updateNameUser',
    payload : {name : editName, id}
    }
}