import './checkProduct.css'

export function CheckProduct({title, value, suggestedValues, onValueChangeProduct}){

    function hundleProductChange(event){
        onValueChangeProduct(event.target.value)
    }
     
    return (
        <>
        <h1 className='tableOfContents'>{title}</h1>
        <div>{
            suggestedValues.map(product => {
                return (
                    <div className='radio-custom'>
                        <label className='radio-button-label'>
                            <input
                             type='radio'
                             value={product}
                             checked={value === product}
                             onChange={hundleProductChange}
                             className='radio-button-input'
                             >
                             </input>
                             <span className='radio-button-custom'></span>
                             <span>{product}</span>
                        </label>
                    </div>
                )
            })
            }</div>
        </>
    )

}