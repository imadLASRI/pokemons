import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import PokemonDetails from './Components/PokemonDetails/PokemonDetails'
import Types from './Components/Types/Types'
import './App.css';

export default function App() {
  const [pokemons, setPokemons] = useState({})
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=8&offset=${8*pageNumber}`)
          .then(response => response.json())
          .then(data => {
              setPokemons(data);
          })
          .catch((err) => {
              console.log(err);
      });
  }, [pageNumber])

  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home pokemons={ pokemons } pageNumber={ pageNumber } setPageNumber={ setPageNumber }/>
          </Route>
          <Route path="/type/:type">
            <Types />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
