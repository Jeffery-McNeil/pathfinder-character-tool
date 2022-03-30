import Basics from "./Basics"
import Defenses from "./Defenses"
import UsefulInfo from "./UsefulInfo"
import SkillList from "./SkillList"
import Equipment from "./Equipment"


function CharacterSheet ({ character, ancestry, background, job}) {
    return (
        <div>
            <Basics character={character} ancestry={ancestry} background={background} job={job}/>
            <Defenses job={job}/>
            <UsefulInfo job={job}/>
            <SkillList/>
            <Equipment/>
        </div>

    )
}

export default CharacterSheet;