
import { useState, memo } from 'react';
import "./pokemon.css"

// memo
// HOC = high-order component


export const Pokemon_ = ({
  name, id, caught,
  catchOrReleasePokemon = () => {},
}) => {
  console.log("🐝", name)
  return (
    <div className={caught ? 'pokemon caught' : 'pokemon'}>
      <h1 className="titleName">{`${name}/${id}`}</h1>
      <div className="photo">
        <img className="resized-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
      </div>
      <button className="botton" onClick={() => catchOrReleasePokemon(id)}>{caught ? "ОТПУСТИТЬ" : 'ПОЙМАТЬ'}</button>
    </div>
  )
}

export const Pokemon = memo(Pokemon_);




