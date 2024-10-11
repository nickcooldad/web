
export function filterConditionsResponse(response, downPayment, term, banks, typeObject, typeDweling){
    return response.offers.list.map(offer => ({
        bank : definitionBank(offer.bankId),
        maxInitialPayment : offer.maxInitialPayment*100,
        minInitialPayment : offer.minInitialPayment*100,
        minTerm : offer.minTerm/12,
        maxTerm : offer.maxTerm/12,
        typeObject : offer.product === 'USED' ? 'Вторичка' : 'Новостройка',
        typeDweling : definitionTypeObject(offer.requirements.at(-1).value),
        maxAmount : (offer.maxAmount/1000000).toFixed(1),
        rate : (offer.rate*100).toFixed(1)
    })).filter(data => 
            (downPayment >= data.minInitialPayment && downPayment <= data.maxInitialPayment)
             && (data.minTerm <= term && data.maxTerm <= term)
             && (data.typeObject === typeObject || typeObject === 'Все')
             && (data.typeDweling === typeDweling)
             && banks[data.bank]
   )
}


function definitionTypeObject(object){
    if(object === 'FLAT') return 'Квартира'
    if(object === 'APARTMENTS') return 'Апартаменты'
     return 'Дом'
}

function definitionBank(bank){
    if(bank === 'bank-delta') return 'Дельтабанк'
    if(bank === 'bank-alfa') return 'Альфабанк'
    if(bank === 'bank-domrf') return 'Росбанк'
    if(bank === 'bank-gpb') return 'Газпромбанк'
    if(bank === 'bank-open') return 'Открытие'
    if(bank === 'bank-vtb-new') return 'ВТБ'
}
