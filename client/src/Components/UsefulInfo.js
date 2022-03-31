
function UsefulInfo ({ job, character, proficiencies, abilityScores }) {

    function proficiencyLevel(arg) {
        switch (arg) {
            case 'Untrained' : return 0
            case 'Trained' : return 2
            case 'Expert' : return 4
            case 'Master' : return 6
            case 'Legendary' : return 8
        }
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
    
    return (
        <div>
            <p>Class DC: {job && character && abilityScores.length && proficiencies.length ? (10 + 2 + character.level + abilityScores.find(element => element.name === abilityName(job.key_abilities)).bonus) : null}</p>
            <p>Perception: +{character && abilityScores.length && proficiencies.length ? ((character.level) + (proficiencyLevel(proficiencies.find(element => element.name === 'perception').proficiency_level)) + (abilityScores.find(element => element.name === 'Widsom').bonus)) : null}</p>
        </div>
    )
}

export default UsefulInfo;