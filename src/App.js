import './App.sass';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, createContext } from 'react';

//layout
import { Root } from './layout/Root';

//pages
import { Pokedex } from './components/Pokedex';
import { Pokemon } from './components/Pokemon';

//Context
export let navContext = createContext()
export let locationContext = createContext()
export let pokedexContext = createContext()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Pokedex/>}/>
      <Route path={`:id`} element={<Pokemon/>}/>
    </Route>
  )
)

function App() {
  let [nav,setNav] = useState([])
  let [id,setId] = useState()
  let [location, setLocation] = useState("all")

  let [pokedex,setPokedex] = useState([])
  
  useEffect(()=>{

    pokedex = []
    
    axios.get(`https://pokeapi.co/api/v2/region`).then(res=>{
      nav = ["all"]
      setNav(nav)

      res.data.results.map((element)=>{
        nav.push(element.name)
        setNav(nav)
      })
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
    .then(res =>{
      res.data.results.map((element)=>{
        id = res.data.results.indexOf(element)+1
        setId(id)

        let pokemon = ""
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(test => {
          pokemon = test.data
        })

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`).then(res => {
          console.log(res.data)
          if((location === "all") && (pokedex.indexOf(pokemon) === -1)){
            console.log(pokemon.name)
            pokedex.push(pokemon)
            setPokedex(pokedex)
          }

          if(res.data.length > 0){
            res.data.map((element)=>{
              let lieu = element.location_area
                if((lieu.name.indexOf(location) !== -1) && (pokedex.indexOf(pokemon) === -1)){
                  pokedex.push(pokemon)
                  setPokedex(pokedex)
                }
                
            })
          }
        })
      })
    }).catch(err => {
      console.log(err)
    })
  },[location])
  
  return (
    <div className="App">
      <locationContext.Provider value={setLocation}>
      <navContext.Provider value={nav}>
      <pokedexContext.Provider value={pokedex}>
        <RouterProvider router={router}/>
      </pokedexContext.Provider>
      </navContext.Provider>
      </locationContext.Provider>
    </div>
  );
}

export default App;
