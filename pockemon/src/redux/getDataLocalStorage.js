export function getDataLocalStorage(){
    const dataLocaleStorage = localStorage.getItem('caughtPokemons')
    if(dataLocaleStorage === null) return []
    return JSON.parse(dataLocaleStorage)
}