import React from 'react'
import Pokemon from '../Pokemon/Pokemon'

import './Home.css'

export default function Home( { pokemons, pageNumber, setPageNumber } ) {
    const handleClick = (type) => {
        type === 'next' ? setPageNumber( currentPage => currentPage + 1 ) : setPageNumber( currentPage => currentPage - 1 )
    }

    return (
        <div className="Home">
            <h1 className="title">
                <span className="title-top">Pokemons list </span>
                <span className="title-bottom">({pokemons.count} pokemon)</span>
            </h1>

            { pokemons.results && pokemons.results.map( (pokemon, index) => (
                    <Pokemon key={index} name={pokemon.name} index={index+1}/>
                )
            )}

            <div className="pagination">
                <button className="button" onClick={ () => handleClick('previous') } disabled={pageNumber === 1 }>Previous</button>
                <button className="button" onClick={ () => handleClick('next') }>Next</button>
            </div>
        </div>
    )
}