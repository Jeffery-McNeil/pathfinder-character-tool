import { useState } from 'react'
import parse from 'html-react-parser';
import Defenses from './Defenses';

function JobCard ({ job }) {
    const [show, setShow] = useState(false)

    console.log(job)

    function handleClick() {
        setShow(!show)
    }

    function handleSelect() {
        const jobChoice = {
            name: job.name,
            key_ability: abilityName(job.data.keyAbility.value[0]),
            hit_points: job.data.hp,
            character_id: localStorage.getItem('characterId')    
        }

        fetch('/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobChoice)
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

    function proficiency (arg) {
        switch (arg) {
            case 1 : return "Trained"
            case 2 : return "Expert"
            case 3 : return "Master"
            case 4 : return "Legendary"
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
            case 'prf' : return "Performance"
            case 'rel' : return "Religion"
            case 'soc' : return "Society"
            case 'ste' : return "Stealth"
            case 'sur' : return "Survival"
            case 'thi' : return "Thievery"
        }
    }

    
    function proficiencies (arg, num) {
        const argArr = Object.entries(arg)
        const filteredArr = argArr.filter(function ([key, value]) {
                    return value === num;
                })
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
            }
        return (filteredArr.map((arr)=> {return ` ${capitalizeFirstLetter(arr[0])}`}))
    }

    if (show === true) { return (
        <article>
            <h1 onClick={handleClick}>{job.name}</h1>
            <p>{job.data.description.value.match(/<em>(.*?)</i)[1]}</p>
            <p><strong>Key Ability</strong> {abilityName(job.data.keyAbility.value[0])}</p>
            <p><strong>Hit Points</strong> {job.data.hp} plus Constitution Modifier</p>
            <p><strong>{proficiency(job.data.perception)}</strong> Perception</p>
            {job.name === "Monk" ? <p><strong>Expert</strong> {proficiencies(job.data.savingThrows, 2)}</p> : <p><strong>Trained</strong> {proficiencies(job.data.savingThrows, 1)}</p>}
            {job.name !== "Monk" ? <p><strong>Expert</strong> {proficiencies(job.data.savingThrows, 2)}</p> : null}
            <p><strong>Trained</strong> in a number of skills equal to {job.data.trainedSkills.additional} plus your intelligence modifier. Trained in{job.data.trainedSkills.value.map((skill)=> {return (` ${skillName(skill)}`)})}</p>
            <p><strong>Trained</strong> {proficiencies(job.data.attacks, 1)}{job.data.attacks.other.name ? `, plus ${job.data.attacks.other.name}` : null}</p>
            {job.name === "Fighter" ? <p><strong>Expert</strong> {proficiencies(job.data.attacks, 2)}</p> : null}
            {job.name === "Monk" ? <p><strong>Expert</strong> {proficiencies(job.data.defenses, 2)}</p> : <p><strong>Trained</strong> {proficiencies(job.data.defenses, 1)}</p>}
            <button onClick={handleSelect}>Select</button>
            

        </article>
    )} else { return (
            <article>
                <h1 onClick={handleClick}>{job.name}</h1>
            </article>
    )}
}

export default JobCard;