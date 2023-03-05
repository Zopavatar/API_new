import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

//context
import { pokedexContext } from '../App'

export const Pokedex = () => {
  let pokedex = useContext(pokedexContext)
  console.log(pokedex)

  let liens = pokedex.map((element)=>(
        <NavLink>{element.name}</NavLink>
    ))

    

  return (
    <div id="pokedex">
        <div></div>
        <div id="overflow">{liens}</div>
    </div>
  )
}
