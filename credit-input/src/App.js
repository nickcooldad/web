import { useState } from 'react';
import './App.css';
import {InitialHypothecaFilter} from './components/initialHypothecaFilter/initialHypothecaFilter.jsx'
import { definitionOnYear } from './components/definitionOnYear/definitionOnYear.js';
import { namesBanks } from './components/checkBoxBanks/namesBanks.js';
import { CheckBoxBanks } from './components/checkBoxBanks/checkBoxBanks.jsx';
import { CheckProduct } from './components/checkProduct/checkProduct.jsx';
import { filterConditionsResponse } from './components/filterConditionsResponse/filterConditionsResponse.js';
import { response } from './components/response/response.js';
import { FinalOffersBanks } from './components/finalOffersBanks/finalOffersBnaks.jsx';


function App() {
  const [downPayment, setDownPayment] = useState(0)
  const [term, setTerm] = useState(0);
  const [banks, setBanks] = useState(namesBanks)
  const [typeObject, setTypeObject] = useState('Все')
  const [typeDwelling, setTypeDweling] = useState('Дом')

  return (<>
    <InitialHypothecaFilter
      title={'Срок кредита'}
      value={downPayment}
      min={0}
      max={30}
      suggestedValues={[3, 10, 15, 20]}
      onValueChange={setDownPayment}
      unit={definitionOnYear}
    />

    <InitialHypothecaFilter
      title={'Первоначальный взнос'}
      value={term}
      min={0}
      max={100}
      suggestedValues={[10, 15, 30, 50, 80]}
      onValueChange={setTerm}
      unit={() => '%'}
    />

    <CheckBoxBanks
    options={banks}
    onValueChange={setBanks}/>

    <CheckProduct
    title={'Тип жилья'}
    value={typeObject}
    suggestedValues={['Все', 'Вторичка', 'Новостройка']}
    onValueChangeProduct={setTypeObject}
    />

    <CheckProduct
    title={'Тип объекта'}
    value={typeDwelling}
    suggestedValues={['Дом', 'Квартира', 'Апартаменты']}
    onValueChangeProduct={setTypeDweling}
    />

    <FinalOffersBanks
    offers={filterConditionsResponse(response, downPayment, term, banks, typeObject, typeDwelling)}/>
  </>)


}

export default App;
