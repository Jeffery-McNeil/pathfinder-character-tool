import { useEffect, useState } from 'react';
import { show } from 'react-modal/lib/helpers/ariaAppHider';
import AncestryFeature from './AncestryFeature';


function AncestryCard ( ancestry ) {
    const [show, setShow] = useState(false)

    let size
    let abilityBoosts
    let vision
    let visionType

    switch (ancestry.ancestry.data.vision) {
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

    if (ancestry.ancestry.name === "Automaton") {
        ( size = "Small or Medium" )
    } else if (ancestry.ancestry.data.size === 'med') {
        ( size = "Medium" )
    } else {
        ( size = "Small")
    }

    if (ancestry.ancestry.data.boosts[1].value.length >= 1) {
        abilityBoosts = `${abilityName(ancestry.ancestry.data.boosts[0].value[0])}, ${abilityName(ancestry.ancestry.data.boosts[1].value[0])}, Free`
    } else {
        abilityBoosts = `${abilityName(ancestry.ancestry.data.boosts[0].value[0])}, Free`
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
    console.log(ancestry.ancestry.data.boosts[0].value[1])
        
        const ancestryChoice = {
            name: ancestry.ancestry.name,
            hit_points: ancestry.ancestry.data.hp,
            size: ancestry.ancestry.data.size,
            speed: ancestry.ancestry.data.speed,
            ability_boost_1: ancestry.ancestry.data.boosts[0].value[0],
            ability_boost_2: ancestry.ancestry.data.boosts[1].value[0],
            ability_flaw: ancestry.ancestry.data.flaws[0].value[0],
            character_id: 1
        }

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
                <h1 onClick={handleClick}>{ancestry.ancestry.name}</h1>
                <div>
                    <p>Hit Points: {ancestry.ancestry.data.hp}</p>
                    <p>Size: {size}</p>
                    <p>Speed: {ancestry.ancestry.data.speed}</p>
                    <p>Ability Boosts: {abilityBoosts}</p>
                    <p>{ancestry.ancestry.data.flaws[0].value[0] ?  `Ability Flaw: ${abilityName(ancestry.ancestry.data.flaws[0].value[0])}` : null}</p>
                    <p>{ancestry.ancestry.data.languages.value[1] ? `Languages: ${capitalizeFirstLetter(ancestry.ancestry.data.languages.value[0])}, ${capitalizeFirstLetter(ancestry.ancestry.data.languages.value[1])}. Additional languages equal to your Intelligence modifier (if it’s positive). Choose from: ${ancestry.ancestry.data.additionalLanguages.value.map((language)=> {return ` ${capitalizeFirstLetter(language)}` })}` : null}</p>
                    <p>{visionType ? `${visionType}: ${vision}` : null}</p>
                    {ancestry.ancestry.data.items ? Object.keys(ancestry.ancestry.data.items).map(function(key, index) {
                        return (
                            <AncestryFeature key={ancestry.ancestry.data.items[key].name} item={ancestry.ancestry.data.items[key]}/>
                        );
                    }) : null}
                </div>
                <button onClick={handleSelect}>Select</button>
            </article>
    )} else { return (
            <article>
                <h1 onClick={handleClick}>{ancestry.ancestry.name}</h1>
            </article>
    )}}

export default AncestryCard;