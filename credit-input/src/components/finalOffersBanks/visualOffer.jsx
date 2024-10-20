import { nameObject, namesBanks, banksImages } from "../checkBoxBanks/namesBanks"
import './visualOffer.css'
export function VisualOffer({offer}){

    const nameBank = namesBanks[offer.bankId]
    const bankImages = banksImages[offer.bankId]
    const typeNameObject = nameObject[offer.product]
    const rate = parseFloat((offer.rate*100).toFixed(1))
    const maxAmount=(offer.maxAmount/1000000).toFixed(1)
    const minInitialPayment=parseFloat((offer.minInitialPayment*100).toFixed(1))



    return(
        <div className='table'>
                    <div className='nameBank'>
                    <span className="bank">{nameBank}</span>
                    <img src={bankImages} alt={nameBank} className='bank-images' />
                    </div>
                    <span className='typeObject'>{typeNameObject}</span>

                    <div className='characteristicsNames'>
                        <span className='rate'>Ставка</span>
                        <span className='maxAmount'>Макс.кредит</span>
                        <span className='minInitialPayment'>Взнос от</span> 
                    </div>

                    <div className='characteristicsValues'>
                        <span>{`${rate} %`}</span>
                        <span>{`${maxAmount} млн ₽`}</span>
                        <span>{`${minInitialPayment} %`}</span>
                    </div>
                    <br/>
                </div>
    )
}