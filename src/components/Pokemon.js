import React from 'react'
import { useContext,useState} from 'react'

//context
import { pokedexContext } from '../App'

export const Pokemon = () => {
    let pokedex = useContext(pokedexContext)
    let [affichage,setAffichage] = useState()

    pokedex.map((element)=>{
        if(element.name === document.location.pathname.substring(1)){
            let background = {
                backgroundImage:`url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png)`,
                height: "60vh",
                width: "50vw",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }

            affichage = 
                <div>
                    <div style={background}></div>
                    <div></div>
                </div>
        }
    })

  return (
    <div>
        {affichage}
    </div>
  )
}
