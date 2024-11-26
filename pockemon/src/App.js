
import { useState, useCallback, useEffect } from 'react';
import "./App.css"
import {Pokemon} from './components/pokemon';
import { fetchPokemons } from './API/fetchPokemons';
import { getLastPageNumber } from './test/getLastPageNumber';
import { Select } from './components/select';
import { catchOrReleasePokemons } from './redux/actionCatchOrReleasePokemons';
import { enteredPageBack, enteredSelectPage, enteredPageNext } from './redux/actionPageNumber';
import {useSelector, useDispatch} from 'react-redux'
import { actionfetchPokemons } from './redux/actionFetchPokemons';

//fetchPokemons()
// async function catchPokemonApi(id) {
//   await new Promise(resolve => setTimeout(resolve, 1000));
// }

//counter = await resultJson.count
 //console.log(await resultJson.next, await resultJson.results)
 //link = await resultJson.next
 
  
 //console.log(pokemonsList)
//  const links = (await result.json()).next
//  return ((await result.json()).result)
//  const listPokemons = (await result.json().results)
 // [{name, url}] → [{name, id}]
   
// GET https://pokeapi.co/api/v2/pokemon/
// https://pokeapi.co/api/v2/pokemon/20/
//                                   id

// 1. Кнопка загрузки покемонов
// 2. По нажатию на кнопку вызываем fetchPokemons
// 3. Меняем стейт со списком покемонов (это еще один стейт)
// 4. Наверху показывать сколько всего покемонов (1302)


// 5*. Сделать кнопки вперед-назад
//     Загружать следующие/предыдущие 12 покемонов
//     Изначально рисуем 1-12, потом кликаем вперед и рисуем 13-24 и т.д.

//    https://pokeapi.co/api/v2/pokemon/?offset=30&limit=20


// 1. Дисейблить кнопку назад, если это первая страница-ок
// 2. Дисейблить кнопку вперед, если это последняя страница-ок
// 3. Дисейблить обе кнопки, если в данный момент загружаются новые покемоны - ок
// 4. Сделать селект с выбором количества покемонов на странице
//    Опции селекста: 8 12 20 24 40
// 5*. При изменении размера страницы менять номер страницы так,
//     чтобы мы оставались примерно в том же месте
// 6. Почитать про AbortController


function App() {
  const {number, size} = useSelector(state => state.pageData)
  const caughtPokemon = useSelector(state => state.caughtPokemons)
  const list = useSelector(state => state.list)
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()


  console.log("🎨 App")
  //const [caughtPokemons, setCaughtPokemons] = useState([])
  //const [list, setList] = useState([])
  //const [pageData, setPageData] = useState({number: 0, size: 8})
  //const [count, setCount] = useState(0);
 // const [isLoading, setIsLoading] = useState(true)


console.log(actionfetchPokemons(number, size)())
  useEffect(() => {
    //const controller = new AbortController();
    actionfetchPokemons(number, size)()
      //setIsLoading(true);
        // fetchPokemons(number, size, controller.abort()).then(({results, count}) => {
        //   setList(results);
        //   setCount(count)
        //     //setIsLoading(false)
        // }, () => {})
        
    return () => {
      ;
    };
  }, [number, size]);


    //console.log(pageData.number,'>>>><<')

  const hundlClickSelect = (sizeSelect) => {
    // setPageData((prev) => ({
    //   number: Math.floor(prev.number*prev.size/sizeSelect),
    //   size: sizeSelect,
    // }))
    dispatch(enteredSelectPage(sizeSelect))
  }

  const hundleClickBottonBack = async () => {
    //setPageData((prev) => ({...prev, number : prev.number - 1}))
    dispatch(enteredPageBack())
  }

  const hundleClickBottonNext = async () => {
    //setPageData((prev) => ({...prev, number : prev.number + 1}))
    dispatch(enteredPageNext())
  }


  const catchOrReleasePokemon = async (pokemon) => {
    // setCaughtPokemons(prev => {
    //   if(prev.includes(pokemon)){
    //     return prev.filter(item => item !== pokemon);
    //   } else {
    //     return [...prev, pokemon];
    //   }

    // })
    dispatch(catchOrReleasePokemons(pokemon))
  }
  const lastNumberPage = getLastPageNumber(count, size)

  console.log(">>>", list);
  return ( 
    <div className="home">
      <h1 className='title'>Поймано покемонов</h1>
      <h1 className='counter'>{`${caughtPokemon.length} / ${count}`}</h1>
      <Select hundleclickSelect={hundlClickSelect} pageDataSize={size} selectList={[8,12,20,24,40]}/>
      <div className='buttonsNextAndBack'>
      <button className='fetchButtonNext' onClick={hundleClickBottonBack}  disabled={number === 0 } >Назад...</button>
      <button className='fetchButtonBack'onClick={hundleClickBottonNext} disabled={number === lastNumberPage}>Вперед...</button>
      </div>
      <div className='note'>{
        list.map(pokemon => {
          return <Pokemon 
            id={pokemon.id}
            name={pokemon.name}
            // catchOrReleasePokemon={() => {}}
            catchOrReleasePokemon={catchOrReleasePokemon}
            caught={caughtPokemon.includes(pokemon.id)}
          />
        })
        }
      </div>
    </div>
  );
}

export default App;

