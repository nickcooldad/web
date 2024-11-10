import './emptyLineWord.css'


export function EmptyLineWord(){
    const word = new Array(5).fill('')
    return (
        <tr>
            {
                word.map((item, index) => {
                    return <td 
                    key={index}
                    className="emptyCell">
                        {
                            item
                        }
                    </td>
                })
            }
        </tr>
    )
}