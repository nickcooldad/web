
export function filterConditionsResponse(response, downPayment, term, banks, typeObject, typeDweling){
    return response.offers.list.filter(data => 
        (downPayment >=  data.minInitialPayment*100 && downPayment <= data.maxInitialPayment*100)
         && (data.minTerm/12 <= term && term <= data.maxTerm/12)
        //  && (data.offer.product === typeObject || typeObject === 'Все')
         && (data.offer.requirements.at(-1) === typeDweling)
         && banks.has(data.bankId)
)
        // bank : definitionBank(offer.bankId),
        // maxInitialPayment : offer.offer.maxInitialPayment*100,
        // minInitialPayment : offer.minInitialPayment*100,
        // minTerm : offer.minTerm/12,
        // maxTerm : offer.maxTerm/12,
        // typeObject : offer.product === 'USED' ? 'Вторичка' : 'Новостройка',
        // typeDweling : definitionTypeObject(offer.requirements.at(-1).value),
        // maxAmount : (offer.maxAmount/1000000).toFixed(1),
        // rate : (offer.rate*100).toFixed(1)

}


// function definitionTypeObject(object){
//     if(object === 'FLAT') return 'Квартира'
//     if(object === 'APARTMENTS') return 'Апартаменты'
//      return 'Дом'
// }
