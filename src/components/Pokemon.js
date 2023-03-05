import React from 'react'
import { useContext} from 'react'
import { NavLink } from 'react-router-dom'

//context
import { pokedexContext } from '../App'

export const Pokemon = () => {
    let pokedex = useContext(pokedexContext)
    let affichage = ""

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
                <div id="pokemon">
                    <NavLink to="/">go back</NavLink>

                    <div style={background}></div>
                    <div>
                        <div id="subnav">
                            <div>
                                <div id={element.name}><style>{`#${element.name}{background-image:url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png)}`}</style></div>
                                <p >No.<span>{element.id}</span></p>
                            </div>
                                
                            <p>{element.name}</p>   
                        </div>

                        <div>
                            <div>
                                <div>Height:</div>
                                <div>{element.height}°</div>
                            </div>
                            <div>
                                <div>Weight:</div>
                                <div>{element.weight}Ibs.</div>
                            </div>
                        </div>

                        <div id="types">{
                            element.types.map((element)=>(
                                <div className="type" id={element.type.name}>
                                    {element.type.name}
                                </div>
                            ))
                        }</div>
                        


                        <div id="visu">
                            <div>
                                <p>front sprite</p>
                                <div className="faces" id="front"><style>{`#front{background-image:url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png)}`}</style></div>
                            </div>
                            <div>
                                <p>back sprite</p>
                                <div className="faces" id="back"><style>{`#back{background-image:url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${element.id}.png)}`}</style></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        }
    })

  return (
    <div>
        {affichage}
    </div>
  )
}
