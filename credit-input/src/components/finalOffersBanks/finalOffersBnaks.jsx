import { Offer } from "./offer"
import { filterConditionsResponse } from "../filterConditionsResponse/filterConditionsResponse"
export function FinalOffersBanks({response,term,downPayment, object, dwelling, banks}){

const getBankInformation = (response) =>{
   return response.offers.list.map(offer => {
        return {
            bank: offer.bankId,
            maxInitialPayment : offer.maxInitialPayment*100,
            minInitialPayment : parseFloat((offer.minInitialPayment*100).toFixed(1)),
            minTerm : offer.minTerm/12,
            maxTerm : offer.maxTerm/12,
            typeObject : offer.product,
            typeDwelling : getTypeDwelling(offer.requirements),
            maxAmount : (offer.maxAmount/1000000).toFixed(1),
            rate : parseFloat((offer.rate*100).toFixed(1))
          
        }
    })
}

function getTypeDwelling(data){
    for(const item of data){
        if(item.key === 'PROPERTY_TYPE'){
            return item.value
        }
    }
}

const data = getBankInformation(response)

return(
    <>
        <Offer banks={filterConditionsResponse(data, banks, term, downPayment, object, dwelling)}/>
    </>)
    
} 