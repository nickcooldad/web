import { namesBanks, banksImages, typeNameObject } from '../checkBoxBanks/namesBanks'


import './finalOffersBanks.css'
import './offer.css'

export function Offer ({banks}){

return(
    <> 
        <div>{
             banks.map(bank => {
                return (
                <div className='table'>
                    <div className='nameBank'>
                    <span className="bank">{namesBanks[bank.bank]}</span>
                    <img src={banksImages[bank.bank]} alt={namesBanks[bank.bank]} className='bank-images' />
                    </div>
                    <span className='typeObject'>{typeNameObject[bank.typeObject]}</span>

                    <div className='characteristicsNames'>
                        <span className='rate'>Ставка</span>
                        <span className='maxAmount'>Макс.кредит</span>
                        <span className='minInitialPayment'>Взнос от</span> 
                    </div>

                    <div className='characteristicsValues'>
                        <span>{`${bank.rate} %`}</span>
                        <span>{`${bank.maxAmount} млн ₽`}</span>
                        <span>{`${bank.minInitialPayment} %`}</span>
                    </div>
                    <br/>
                </div>
          
                )
            })
        }
        </div>
    </>
    )
}