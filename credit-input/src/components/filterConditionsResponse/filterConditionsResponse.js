
export function filterConditionsResponse(response, banks,term, downPayment, object, dweling){
    return response.filter(data => 
        banks.has(data.bank)
        && (downPayment >=  data.minInitialPayment && downPayment <= data.maxInitialPayment)
        && (data.minTerm <= term && term <= data.maxTerm)
        && (data.typeObject === object || object === 'ALL')
        && data.typeDwelling === dweling
    )
}

//banks.has(data.bank)
//&& (downPayment >=  data.minInitialPayment*100 && downPayment <= data.maxInitialPayment*100))
// && (data.minTerm/12 <= term && term <= data.maxTerm/12)
//  && (data.offer.product === typeObject || typeObject === 'Все')
 //&& (data.offer.requirements.at(-1) === typeDweling)
// &&