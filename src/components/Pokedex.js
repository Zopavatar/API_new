import React from 'react'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

//component
import {Manav} from './Manav'

//context
import { pokedexContext } from '../App'

export const Pokedex = () => {
  let pokedex = useContext(pokedexContext)

  let [image,setImage] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`)
    let background = {
        backgroundImage:`url(${image})`,
        height: "60vh",
        width: "50vw",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

  let Image = (e) =>{ 
    pokedex.map((element)=>{
        if(e.currentTarget.id == element.id){
            image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png`
            setImage(image)
        }
    })
  }

  pokedex.map((element)=>{
    if(element.id === undefined){
      pokedex.splice(pokedex.indexOf(element),1)
    }
  })

  let liens = pokedex.map((element)=>(
    <NavLink key={element.id*1} to={element.name} onMouseOver={Image} id={element.id}><div><div id={element.name}><style>{`#${element.name}{background-image:url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png)}`}</style></div><p >No.<span>{element.id}</span></p></div><p>{element.name}</p></NavLink>
  ))

  return (
    <div>
        <Manav/>
        <div id="pokedex">
            <div style={background}></div>
            <div id="overflow">{liens}</div>
        </div>
    </div>
  )
}
