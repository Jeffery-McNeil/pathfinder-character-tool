import { useHistory } from 'react-router-dom'
import '../Css/CharacterSelect.css'

function CharacterCard ({ character }) {
    
    const history = useHistory()

    function handleClick () {

        localStorage.setItem('characterId', character.id)
        history.push('./character')

        fetch(`/character_select/:${character.name}`)
    }
    
    return (
        <article className='character-card'>
            <div className='character-text' onClick={handleClick}>
                <h1 >{character.name}</h1>
                <h4>Level: {character.level}</h4>
            </div>
        </article>
    )
}

export default CharacterCard;