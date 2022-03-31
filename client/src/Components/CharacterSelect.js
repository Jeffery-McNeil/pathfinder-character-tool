import { useState, useEffect } from 'react'
import CreateCharacter from './CreateCharacter'
import CharacterCard from './CharacterCard'
import '../Css/CharacterSelect.css'

function CharacterSelect () {
    const [characters, setCharacters] = useState([])
    const [toggle, setToggle] = useState(true)


    useEffect (() => {
        fetch('/characters')
        .then((response)=> response.json())
        .then((data)=> setCharacters(data))
    }, [toggle])

    function onCreate() {
        setToggle(!toggle)
    }

    return (
        <div className='bg-layer'>
            <CreateCharacter onCreate={onCreate} />
            <div className='character-container'>
            {characters ? characters.map((character)=> {return (<CharacterCard key={character.name} character={character}/>)}) : null}
            </div>
        </div>
    )
}

export default CharacterSelect;