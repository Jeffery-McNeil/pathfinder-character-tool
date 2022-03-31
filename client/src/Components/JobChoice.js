

function JobChoice ({ job, jobAbility }) { 
    
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

    function handleChange (event) {
        jobAbility(event.target.value)
    }

    switch ((job ? job.name : null)) {
        case 'Champion' : return (
            <>
                <h3>Class</h3>
                <select onChange={handleChange}>
                    <option>Choose ability</option>
                    <option value="Strength">Strength</option>
                    <option value="Dexterity">Dexterity</option>
                </select>
            </>
        )
        case 'Fighter' : return (
            <>
                <h3>Class</h3>
                <select onChange={handleChange}>
                    <option>Choose ability</option>
                    <option value="Strength">Strength</option>
                    <option value="Dexterity">Dexterity</option>
                </select>
            </>
        )
        case 'Magus' : return (
            <>
                <h3>Class</h3>
                <select onChange={handleChange}>
                    <option>Choose ability</option>
                    <option value="Strength">Strength</option>
                    <option value="Dexterity">Dexterity</option>
                </select>
            </>
        )
        case 'Monk' : return (
            <>
                <h3>Class</h3>
                <select onChange={handleChange}>
                    <option>Choose ability</option>
                    <option value="Dexterity">Dexterity</option>   
                    <option value="Strength">Strength</option>
                </select>
            </>
        )
        case 'Ranger' : return (
            <>
                <h3>Class</h3>
                <select onChange={handleChange}>
                    <option>Choose ability</option>
                    <option value="Dexterity">Dexterity</option>   
                    <option value="Strength">Strength</option>
                </select>
            </>
        )
        case 'Rogue' : return (
            <>
                <h3>Class</h3>
                <select onChange={handleChange}>
                    <option>Choose ability</option>
                    <option value="Strength">Strength</option>
                    <option value="Dexterity">Dexterity</option>   
                    <option value="Intelligence">Intelligence</option>
                    <option value="Wisdom">Wisdom</option>
                    <option value="Charisma">Charisma</option>
                </select>
            </>
        )
        default : return (
            <>
                <h3>Class</h3>
                <p>+ {job ? abilityName(job.key_abilities) : null}</p>
            </>
        )
    }


}

export default JobChoice;