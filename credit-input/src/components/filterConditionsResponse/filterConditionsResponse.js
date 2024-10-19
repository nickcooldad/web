
export function filterConditionsResponse(offers, {banks,term, downPayment, object, dwelling}){

    return offers.filter(data => 
        banksPredicate(data, banks)
        && termPredicate(data, term)
        && downPaymentPredicate(data, downPayment)
        && objectPredicate(data, object)
        && dwelingPredicate(data, dwelling)
)}

function banksPredicate(offer, banks) {
    return banks.has(offer.bankId);
}

function termPredicate(offer, term){
    return offer.minTerm/12 <= term && term <= offer.maxTerm/12
}

function downPaymentPredicate(offer, downPayment){
    return downPayment >= offer.minInitialPayment*100 && downPayment <= offer.maxInitialPayment*100
}

function objectPredicate(offer, object){
    return offer.product === object || object === 'ALL'
}

function dwelingPredicate(offer, dweling){
return offer.requirements.some(el => el.key === 'PROPERTY_TYPE' && el.value === dweling)
}
