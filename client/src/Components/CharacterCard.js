import { useHistory } from 'react-router-dom'

function CharacterCard ({ character }) {
    
    const history = useHistory()

    function handleClick () {
        localStorage.setItem('characterId', character.id)
        history.push('./character')
    }
    
    return (
        <article>
            <h1 onClick={handleClick}>{character.name}</h1>
            <h4>Level: {character.level}</h4>
        </article>
    )
}

export default CharacterCard;