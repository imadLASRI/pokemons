import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import './PokemonDetails.css'

export default function PokemonDetails(){
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
            })
            .catch((err) => {
                console.log(err);
        });
    }, [])

    return (
        <div>
            {pokemon && pokemon.sprites && <img src={pokemon.sprites.front_shiny} alt="" width="200"/>}
            <h1>{pokemon && pokemon.name}</h1>
            <div>
                <h4>Types :</h4>
                {pokemon && pokemon.types && pokemon.types.map( (type, index) => (
                    <Link to={`/type/${type.type.name}`} key={index}>
                        <h5>{type.type.name}</h5>
                    </Link>
                ))}
                <h2>Evolutions :</h2>
                <p>---</p>
            </div>
        </div>
    )
}