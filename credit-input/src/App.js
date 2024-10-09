import { useState } from 'react';
import './App.css';
import {InitialHypothecaFilter} from './components/initialHypothecaFilter.jsx'
import { definitionOnYear } from './components/definitionOnYear/definitionOnYear.js';
import { namesBanks } from './components/checkBoxBanks/namesBanks.js';
import { CheckBoxBanks } from './components/checkBoxBanks/checkBoxBanks.jsx';

function App() {
  const [downPayment, setDownPayment] = useState(0)
  const [term, setTerm] = useState(30);
  const [options, setOptions] = useState(namesBanks)
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
    options={options}
    onValueChange={setOptions}/>
  </>)


}

export default App;
