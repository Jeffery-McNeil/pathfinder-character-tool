import { useEffect, useState } from 'react';
import AncestryFeature from './AncestryFeature';


function AncestryCard ({ ancestry, update }) {
    const [show, setShow] = useState(false)

    let size
    let abilityBoosts
    let vision
    let visionType

    switch (ancestry.data.vision) {
        case "lowLightVision" : {
            vision = "A creature with low-light vision can see in dim light as though it were bright light, so it ignores the Concealed condition due to dim light."
            visionType = "Low-Light Vision"
        }
            break;
        case "darkvision" : {
            vision = "You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white."
            visionType = "Darkvision"
        }
            break;
        default : visionType = undefined
    }

    if (ancestry.name === "Automaton") {
        ( size = "Small or Medium" )
    } else if (ancestry.data.size === 'med') {
        ( size = "Medium" )
    } else {
        ( size = "Small")
    }

    if (ancestry.data.boosts[1].value.length >= 1) {
        abilityBoosts = `${abilityName(ancestry.data.boosts[0].value[0])}, ${abilityName(ancestry.data.boosts[1].value[0])}, Free`
    } else {
        abilityBoosts = `${abilityName(ancestry.data.boosts[0].value[0])}, Free`
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

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleClick() {
        setShow(!show)
    }

    function handleSelect() {
        update()

        const ancestryChoice = {
            name: ancestry.name,
            hit_points: ancestry.data.hp,
            size: ancestry.data.size,
            speed: ancestry.data.speed,
            ability_boost_1: ancestry.data.boosts[0].value[0],
            ability_boost_2: ancestry.data.boosts[1].value[0],
            ability_flaw: ancestry.data.flaws[0].value[0],
            character_id: 1
        }

        fetch(`./ancestries/${localStorage.getItem('characterId')}`, {
            method: 'DELETE'
        })

        fetch('/ancestries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ancestryChoice)
        }).then((response)=> response.json())
        .then((data)=> console.log(data))
    }


    if (show === true) { return (
            <article>
                <h1 onClick={handleClick}>{ancestry.name}</h1>
                <div>
                    <p>Hit Points: {ancestry.data.hp}</p>
                    <p>Size: {size}</p>
                    <p>Speed: {ancestry.data.speed}</p>
                    <p>Ability Boosts: {abilityBoosts}</p>
                    <p>{ancestry.data.flaws[0].value[0] ?  `Ability Flaw: ${abilityName(ancestry.data.flaws[0].value[0])}` : null}</p>
                    <p>{ancestry.data.languages.value[1] ? `Languages: ${capitalizeFirstLetter(ancestry.data.languages.value[0])}, ${capitalizeFirstLetter(ancestry.data.languages.value[1])}. Additional languages equal to your Intelligence modifier (if it’s positive). Choose from: ${ancestry.data.additionalLanguages.value.map((language)=> {return ` ${capitalizeFirstLetter(language)}` })}` : null}</p>
                    <p>{visionType ? `${visionType}: ${vision}` : null}</p>
                    {ancestry.data.items ? Object.keys(ancestry.data.items).map(function(key, index) {
                        return (
                            <AncestryFeature key={ancestry.data.items[key].name} item={ancestry.data.items[key]}/>
                        );
                    }) : null}
                </div>
                <button onClick={handleSelect}>Select</button>
            </article>
    )} else { return (
            <article>
                <h1 onClick={handleClick}>{ancestry.name}</h1>
            </article>
    )}}

export default AncestryCard;