import React from 'react'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

//context
import { pokedexContext } from '../App'

export const Pokedex = () => {
  let pokedex = useContext(pokedexContext)
  console.log(pokedex)

  let [image,setImage] = useState()
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

            console.log(image)
        }
    })
  }

  let liens = pokedex.map((element)=>(
        <NavLink onMouseOver={Image} id={element.id}><div className="img"><style>{`.img{background-image:url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png)}`}</style><div ></div><p >No.<span>{element.id}</span></p></div><p>{element.name}</p></NavLink>
    ))

  return (
    <div id="pokedex">
        <div style={background}></div>
        <div id="overflow">{liens}</div>
    </div>
  )
}
