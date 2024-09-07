import './select.css'

export function Select({hundleclickSelect, pageDataSize, selectList}) {
  console.log(pageDataSize)
  
  function hundlePage(event){
    hundleclickSelect(Number(event.target.value));
  }

  return (
    <select name='pageSize' className='selectPageSize' onChange={hundlePage} value={pageDataSize}>
    {selectList.map((select) => {
      return <option value={select} >{select}</option>
    })}
  </select>
  )
}
