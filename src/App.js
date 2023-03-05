import './App.sass';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, createContext } from 'react';

//layout
import { Root } from './layout/Root';

//pages


//Context
export let navContext = createContext()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
    </Route>
  )
)

function App() {
  let [nav,setNav] = useState([])
  let [id,setId] = useState()
  let pokedex = []
  
  useEffect(()=>{
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
      })

      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(test => {
    
      })

      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`).then(res => {
    
      })
    }).catch(err => {
      console.log(err)
    })
  },[])

  console.log(nav)
  
  return (
    <div className="App">
      <navContext.Provider value={nav}>
        <RouterProvider router={router}/>
      </navContext.Provider>
    </div>
  );
}

export default App;
