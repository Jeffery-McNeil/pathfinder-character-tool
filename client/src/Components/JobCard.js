import { useState } from 'react'

function JobCard ({ job, update }) {
    const [show, setShow] = useState(false)

    console.log(job)

    function handleClick() {
        setShow(!show)
    }

    function handleSelect() {
        update()
        const jobChoice = {
            name: job.name,
            key_abilities: job.data.keyAbility.value[0],
            hit_points: job.data.hp,
            character_id: localStorage.getItem('characterId')    
        }

    
        fetch(`/jobs/${localStorage.getItem('characterId')}`, {
            method: 'DELETE'
        })

        fetch(`/proficiencies`, {
            method: 'DELETE'
        })

        fetch('/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobChoice)
        }).then((response)=> response.json())
        .then((newJob)=> {

            const perception = {
                name: 'perception',
                proficiency_level: proficiency(job.data.perception),
                job_id: newJob.id
            }


            const savesArr = Object.entries(job.data.savingThrows)
            const attacksArr = Object.entries(job.data.attacks)
            const defensesArr = Object.entries(job.data.defenses)

            const filteredAttacksArr = attacksArr.filter(function ([key, value]) {
                return key !== 'other';
            })

            savesArr.map((save)=> {
                const newSave = {
                    name: save[0],
                    proficiency_level: proficiency(save[1]),
                    job_id: newJob.id
                }
            })
    
            filteredAttacksArr.map((attack)=> {
                
                const newAttack = {
                    name: attack[0],
                    proficiency_level: proficiency(attack[1]),
                    job_id: newJob.id
                }  
            })
    
            defensesArr.map((defense)=> {
    
                const newDefense = {
                    name: defense[0],
                    proficiency_level: proficiency(defense[1]),
                    job_id: newJob.id
                }
    
            })
            
        })


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
            case 0 : return "Untrained"
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
            <div className='job-card'>
                <p>{job.data.description.value.match(/<em>(.*?)</i)[1]}</p>
                <p><strong>Key Ability</strong> {job.data.keyAbility.value.map((ability)=> {return (` ${abilityName(ability)}`)})}</p>
                <p><strong>Hit Points</strong> {job.data.hp} plus Constitution Modifier</p>
                <p><strong>{proficiency(job.data.perception)}</strong> Perception</p>
                {job.name === "Monk" ? <p><strong>Expert</strong> {proficiencies(job.data.savingThrows, 2)}</p> : <p><strong>Trained</strong> {proficiencies(job.data.savingThrows, 1)}</p>}
                {job.name !== "Monk" ? <p><strong>Expert</strong> {proficiencies(job.data.savingThrows, 2)}</p> : null}
                <p><strong>Trained</strong> in a number of skills equal to {job.data.trainedSkills.additional} plus your intelligence modifier. Trained in{job.data.trainedSkills.value.map((skill)=> {return (` ${skillName(skill)}`)})}</p>
                <p><strong>Trained</strong> {proficiencies(job.data.attacks, 1)}{job.data.attacks.other.name ? `, plus ${job.data.attacks.other.name}` : null}</p>
                {job.name === "Fighter" ? <p><strong>Expert</strong> {proficiencies(job.data.attacks, 2)}</p> : null}
                {job.name === "Monk" ? <p><strong>Expert</strong> {proficiencies(job.data.defenses, 2)}</p> : <p><strong>Trained</strong> {proficiencies(job.data.defenses, 1)}</p>}
            </div>
            <button id="job-select" onClick={handleSelect}>Select</button>
        </article>
    )} else { return (
            <article>
                <h1 onClick={handleClick}>{job.name}</h1>
            </article>
    )}
}

export default JobCard;