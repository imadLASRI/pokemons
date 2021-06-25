import { Link } from 'react-router-dom'

import './Pokemon.css'

export default function Pokemon({name, index}){

    return (
        <Link to={`/pokemon/${index}`}>
            <div className="pokemons">    
                <article className="pokemon">
                    <span className="name">{name} - click for details</span>
                </article>
            </div>
        </Link>
    )
}