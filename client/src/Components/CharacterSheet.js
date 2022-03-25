import Basics from "./Basics"
import Defenses from "./Defenses"
import UsefulInfo from "./UsefulInfo"
import SkillList from "./SkillList"
import Equipment from "./Equipment"


function CharacterSheet () {

    return (
        <div>
            <Basics/>
            <Defenses/>
            <UsefulInfo/>
            <SkillList/>
            <Equipment/>
        </div>

    )
}

export default CharacterSheet;