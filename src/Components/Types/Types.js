import {  useParams } from 'react-router-dom'
import './Types.css'

export default function Types(){
    const {type} = useParams();

    return (
        <div>
            <h1>{type}</h1>
        </div>
    )
}