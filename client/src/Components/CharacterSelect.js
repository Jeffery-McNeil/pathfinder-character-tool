import { useState, useEffect } from 'react'
import CreateCharacter from './CreateCharacter'
import CharacterCard from './CharacterCard'

function CharacterSelect () {
    const [characters, setCharacters] = useState([])


    useEffect (() => {
        fetch('/characters')
        .then((response)=> response.json())
        .then((data)=> setCharacters(data))
    }, [])

    return (
        <div>
            <CreateCharacter />
            {characters ? characters.map((character)=> {return (<CharacterCard key={character.name} character={character}/>)}) : null}
        </div>
    )
}

export default CharacterSelect;