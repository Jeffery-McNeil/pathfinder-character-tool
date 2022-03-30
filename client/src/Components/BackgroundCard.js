import { useState } from 'react';
import parse from 'html-react-parser';

function BackgroundCard ({ background }) {
    const [show, setShow] = useState(false)

    function handleClick() {
        setShow(!show)
    }

    function handleSelect () {
        const backgroundChoice = {
            name: background.name,
            skill: skillName(background.data.trainedSkills.value[0]),
            bonus_feat: background.data.items[Object.keys(background.data.items)[0]].id,
            character_id: localStorage.getItem('characterId')
        }

        fetch('/backgrounds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(backgroundChoice)
        }).then((response)=> response.json())
        .then((data)=> console.log(data))
    }

    function abilityName (arg) {
        switch (arg) {
            case 'str': return "Strength"
            case 'dex': return "Dexterity"
            case 'con': return "Constitution"
            case 'int': return "Intelligence"
            case 'wis': return "Wisdom"
            case 'cha': return "Charisma"
        }
    }

    function skillName (arg) {
        switch (arg) {
            case 'acr' : return "Acrobatics"
            case 'arc' : return "Arcane"
            case 'ath' : return "Athletics"
            case 'cra' : return "Crafting"
            case 'dec' : return "Deception"
            case 'dip' : return "Diplomacy"
            case 'int' : return "Intimidation"
            case 'med' : return "Medicine"
            case 'nat' : return "Nature"
            case 'occ' : return "Occultism"
            case 'per' : return "Performance"
            case 'rel' : return "Religion"
            case 'soc' : return "Society"
            case 'ste' : return "Stealth"
            case 'sur' : return "Survival"
            case 'thi' : return "Thievery"
        }
    }

    if (show === true) { return (
        <article>
            <h1 onClick={handleClick}>{background.name}</h1>
            <div>
                {parse(background.data.description.value.replace(/@.*]/, ""))}
            </div>
            <button onClick={handleSelect}>Select</button>
        </article>
    )} else { return (
            <article>
                <h1 onClick={handleClick}>{background.name}</h1>
            </article>
    )}
}

export default BackgroundCard;