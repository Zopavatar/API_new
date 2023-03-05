import React from 'react'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

//context
import { navContext } from '../App'

export const Root = () => {
  let nav = useContext(navContext)
  
  let [count,setCount] = useState(0)
  let [active,setActive] = useState("all")

  let Next = () => {
    if(count+1 < nav.length){
    count = count + 1
    setCount(count)
    }else{
        count = 0
        setCount(count)
    }

    active = nav[count]
    setActive(active)
  }

  let Previous = () => {
    if(count-1 >= 0){
        count = count - 1
        setCount(count)
    }else{
        count = nav.length-1
        setCount(count)
    }
    
    active = nav[count]
    setActive(active)
  }

  return (
    <div>
        <nav>
            <button onClick={Previous}>Previous</button>
            <div>{active}</div>
            <button onClick={Next}>Next</button>
        </nav>
    </div>
  )
}
