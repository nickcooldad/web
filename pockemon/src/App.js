
import { useState, useCallback, useEffect } from 'react';
import "./App.css"
import {Pokemon} from './components/pokemon';
import { fetchPokemons } from './API/fetchPokemons';
import { getLastPageNumber } from './test/getLastPageNumber';
import { Select } from './components/select';
fetchPokemons()
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


  console.log("🎨 App")
  const [caughtPokemons, setCaughtPokemons] = useState([])
  const [list, setList] = useState([])
  const [pageData, setPageData] = useState({number: 0, size: 8})
  const [count, setCount] = useState(0);
 // const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    const controller = new AbortController();
      //setIsLoading(true);
        fetchPokemons(pageData.number, pageData.size, controller.signal).then(({results, count}) => {
          setList(results);
          setCount(count)
            //setIsLoading(false)
        }, () => {})
        
        
    return () => {
      controller.abort();
    };
  }, [pageData]);


    console.log(pageData.number,'>>>><<')

  const hundlClickSelect = (sizeSelect) => {
    setPageData((prev) => ({
      number: Math.floor(prev.number*prev.size/sizeSelect),
      size: sizeSelect,
    }))
  }

  const hundleClickBottonBack = async () => {
    setPageData((prev) => ({...prev, number : prev.number - 1}))
  }

  const hundleClickBottonNext = async () => {
    setPageData((prev) => ({...prev, number : prev.number + 1}))
  }


  const catchOrReleasePokemon = async (pokemon) => {
    setCaughtPokemons(prev => {
      if(prev.includes(pokemon)){
        return prev.filter(item => item !== pokemon);
      } else {
        return [...prev, pokemon];
      }

    })
  }
  const lastNumberPage = getLastPageNumber(count, pageData.size)

  console.log(">>>", list);
  return ( 
    <div className="home">
      <h1 className='title'>Поймано покемонов</h1>
      <h1 className='counter'>{`${caughtPokemons.length} / ${count}`}</h1>
      <Select hundleclickSelect={hundlClickSelect} pageDataSize={pageData.size} selectList={[8,12,20,24,40]}/>
      {/* <select name='pageSize' className='selectPageSize' onChange={hundlClickSelect}>
        <option value='' disabled selected>Выберите количество покемонов</option>
        <option value={8}>8</option>-
        <option value={12}>12</option>
        <option value={20}>20</option>
        <option value={24}>24</option>
        <option value={40}>40</option>
      </select> */}
      <div className='buttonsNextAndBack'>
      <button className='fetchButtonNext' onClick={hundleClickBottonBack}  disabled={pageData.number === 0 } >Назад...</button>
      <button className='fetchButtonBack'onClick={hundleClickBottonNext} disabled={pageData.number === lastNumberPage}>Вперед...</button>
      </div>
      <div className='note'>{
        list.map(pokemon => {
          return <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            // catchOrReleasePokemon={() => {}}
            catchOrReleasePokemon={catchOrReleasePokemon}
            caught={caughtPokemons.includes(pokemon.id)}
          />
        })
        }
      </div>
    </div>
  );
}

export default App;


// const employees = [
//   {
//     name: "Andrew Clark",
//     vacations: [
//       ["21.04.24", "24.04.24"],
//       ["06.05.24", "13.05.24"],
//       ["24.05.24", "08.06.24"],
//       ["28.06.24", "18.07.24"],
//     ],
//   },
//   {
//     name: "Dan Abramov",
//     vacations: [
//       ["12.05.24", "20.05.24"],
//       ["04.05.24", "06.05.24"],
//       ["25.05.24", "26.05.24"],
//     ],
//   },
//   {
//     name: "Jason Bonta",
//     vacations: [
//       ["13.05.24", "16.05.24"],
//       ["11.06.24", "12.06.24"],
//       ["26.05.24", "26.05.24"],
//       ["25.05.24", "26.05.24"],
//     ],
//   },
//   {
//     name: "Joe Savona",
//     vacations: [
//       ["04.04.24", "06.05.24"],
//       ["26.05.24", "01.06.24"],
//       ["13.05.24", "16.05.24"],
//     ],
//   },
// ];
