import { useState } from 'react';
import './App.css';
import {InitialHypothecaFilter} from './components/initialHypothecaFilter/initialHypothecaFilter.jsx'
import { definitionOnYear } from './components/definitionOnYear/definitionOnYear.js';
import { CheckBoxBanks } from './components/checkBoxBanks/checkBoxBanks.jsx';
import { CheckProduct } from './components/checkProduct/checkProduct.jsx';
import { response } from './components/response/response.js';
import { nameObject, nameType } from './components/checkBoxBanks/namesBanks.js';
import { VisualOffer } from './components/finalOffersBanks/visualOffer.jsx';
import { filterConditionsResponse } from './components/filterConditionsResponse/filterConditionsResponse.js';

function App() {
  const [downPayment, setDownPayment] = useState(0)
  const [term, setTerm] = useState(0);
  const [banks, setBanks] = useState(new Set())
  const [object, setObject] = useState('Все')
  const [dwelling, setDweling] = useState('Дом')


const banksList = [...new Set(response.offers.list.values().map(offer => offer.bankId))]
const responseFilter = filterConditionsResponse(
  response.offers.list,
  {downPayment, 
  term, 
  banks, 
  object, 
  dwelling}
);

console.log(responseFilter);
  return (<>
    <InitialHypothecaFilter
      title={'Срок кредита'}
      value={term}
      min={0}
      max={30}
      suggestedValues={[3, 10, 15, 20]}
      onValueChange={setTerm}
      unit={definitionOnYear}
    />

    <InitialHypothecaFilter
      title={'Первоначальный взнос'}
      value={downPayment}
      min={0}
      max={100}
      suggestedValues={[10, 15, 30, 50, 80]}
      onValueChange={setDownPayment}
      unit={() => '%'}
    />

    <CheckBoxBanks
    banksList={banksList}
    options={banks}
    onValueChange={setBanks}/>

    <CheckProduct
    title={'Тип жилья'}
    listFilter={['ALL', 'USED', 'NEW']}
    value={object}
    onValueChangeProduct={setObject}
    nameType={nameObject}
    />
 
    <CheckProduct
    title={'Тип объекта'}
    listFilter={['FLAT', 'APARTMENTS', 'TOWNHOUSE']}
    value={dwelling}
    onValueChangeProduct={setDweling}
    nameType={nameType}
    />

    {responseFilter.map(offer => <VisualOffer key={offer.offerId} offer={offer} />)}
    
  </>)
}

export default App;
