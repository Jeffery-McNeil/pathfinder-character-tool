
function Defenses ({ character, job, ancestry, abilityScores, proficiencies}) {



    function calculateSave(save, ability) {
       return (proficiencyLevel(proficiencies.find(element => element.name === save).proficiency_level)) + (abilityScores.find(element => element.name === ability).bonus) + character.level
    }

    function proficiencyLevel(arg) {
        switch (arg) {
            case 'Untrained' : return 0
            case 'Trained' : return 2
            case 'Expert' : return 4
            case 'Master' : return 6
            case 'Legendary' : return 8
        }
    }

    return(
        <div>
            <div>
                <p>AC: </p>
            </div>
            <div>
                <p>HP: {abilityScores.length ? (job.hit_points + ancestry.hit_points + abilityScores.find(element => element.name === 'Constitution').bonus) : null}</p>
            </div>
            <div>
                <p>Shield: </p>
            </div>
            <div>
                <p>Fortitude: +{character && abilityScores.length && proficiencies.length ? calculateSave('fortitude', 'Constitution') : null} </p>
                <p>Reflex: +{character && abilityScores.length && proficiencies.length ? calculateSave('reflex', 'Dexterity') : null}</p>
                <p>Will: +{character && abilityScores.length && proficiencies.length ? calculateSave('will', 'Widsom') : null}</p>
            </div>
        </div>
    )
}

export default Defenses;