import Basics from "./Basics"
import Defenses from "./Defenses"
import UsefulInfo from "./UsefulInfo"
import SkillList from "./SkillList"
import Equipment from "./Equipment"


function CharacterSheet ({ character, ancestry, background, job, abilityScores, proficiencies }) {
    return (
        <div>
            <Basics character={character} ancestry={ancestry} background={background} job={job} abilityScores={abilityScores}/>
            <Defenses character={character} job={job} ancestry={ancestry} abilityScores={abilityScores} proficiencies={proficiencies}/>
            <UsefulInfo job={job} character={character} proficiencies={proficiencies} abilityScores={abilityScores} />
            <SkillList/>
            <Equipment/>
        </div>

    )
}

export default CharacterSheet;