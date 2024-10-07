import cn from 'classnames'
import './checkBoxBanks.css'

export function CheckBoxBanks({options, onValueChange}){

  function hudnleChangeValue (event){
    const {name, checked} = event.target
    onValueChange((prev) => ({...prev,
      [name]:checked
    }))
  }

  function hundleSubmit(event){
    event.preventDefault()
  }

  return <form onSubmit={hundleSubmit}
    className='table'>
    <h1 className='title'>Банк</h1>
    <label>
      <input
      type="checkBox"
      name="vtb"
      checked={options.vtb}
      onChange={hudnleChangeValue}
      className={cn({
        'checkbox-custom':true
      })}
      />
      ВТБ
    </label>
    <br/>

    <label>
      <input
      type="checkBox"
      name="sovcombank"
      checked={options.sovcombank}
      onChange={hudnleChangeValue}
      className={cn({
        'checkbox-custom':true
      })}
      />
      СовкомБанк
    </label>
    <br/>

    <label>
      <input
      type="checkBox"
      name="rosbank"
      checked={options.rosbank}
      onChange={hudnleChangeValue}
      className={cn({
        'checkbox-custom':true
      })}
      />
      Росбанк
    </label>
    <br/>

    <label>
      <input
      type="checkBox"
      name="gazprombank"
      checked={options.gazprombank}
      onChange={hudnleChangeValue}
      className={cn({
        'checkbox-custom':true
      })}
      />
      Газпромбанк
    </label>
    <br/>

    <label>
      <input
      type="checkBox"
      name="otkritie"
      checked={options.otkritie}
      onChange={hudnleChangeValue}
      className={cn({
        'checkbox-custom':true
      })}
      />
      Открытие
    </label>
    <br/>

    <label>
      <input
      type="checkBox"
      name="psb"
      checked={options.psb}
      onChange={hudnleChangeValue}
      className={cn({
        'checkbox-custom':true
      })}
      />
      ПСБ
    </label>
    <br/>

    <label>
      <input
      type="checkBox"
      name="raifaizen"
      checked={options.raifaizen}
      onChange={hudnleChangeValue}
      className={cn({
        'checkbox-custom':true
      })}s
      />
      Райффайзенбанк
    </label>
    <br/>
    </form>
}