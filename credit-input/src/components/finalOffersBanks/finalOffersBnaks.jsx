import { namesBanks } from '../checkBoxBanks/namesBanks'
import Райффайзенбанк from './../checkBoxBanks/images/Райффайзенбанк.svg'
import ВТБ from './../checkBoxBanks/images/ВТБ.svg'
import Открытие from './../checkBoxBanks/images/Открытие.svg'
import ПСБ from './../checkBoxBanks/images/ПСБ.svg'
import Росбанк from './../checkBoxBanks/images/Росбанк.svg'
import Газпромбанк from './../checkBoxBanks/images/Газпромбанк.svg'
import СовкомБанк from './../checkBoxBanks/images/СовкомБанк.svg'
import './finalOffersBanks.css'
export function FinalOffersBanks({offers}){
const bankImages = {
    Райффайзенбанк,
    ВТБ,
    Открытие,
    ПСБ,
    Росбанк,
    Газпромбанк,
    СовкомБанк
}
return(
    <>
        <div>{
            offers.map(offer => {
                return (
                <div className='table'>
                    <div className='nameBank'>
                    <span className="bank">{offer.bank}</span>
                    <img src={bankImages[offer.bank]} alt={offer.bank} className='bank-images' />
                    </div>
                    <span className='typeObject'>{offer.typeObject}</span>

                    <div className='characteristicsNames'>
                        <span className='rate'>Ставка</span>
                        <span className='maxAmount'>Макс.кредит</span>
                        <span className='minInitialPayment'>Взнос от</span> 
                    </div>

                    <div className='characteristicsValues'>
                        <span>{offer.rate}</span>
                        <span>{`${offer.maxAmount} млн ₽`}</span>
                        <span>{`${offer.minInitialPayment} %`}</span>
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