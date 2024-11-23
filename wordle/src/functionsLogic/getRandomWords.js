export function getRandomWord(response){
    const randomIndex = Math.floor(Math.random() * response.length)
    return response[randomIndex]
}