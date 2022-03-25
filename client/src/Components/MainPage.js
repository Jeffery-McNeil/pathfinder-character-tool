import Abilities from "./Abilities";
import Ancestry from "./Ancestry";
import Background from "./Background";
import CharacterSheet from "./CharacterSheet";
import Job from "./Job"
import Skills from "./Skills";




function MainPage() {
  
  
  return (
    <>
      <div>
        <Ancestry/>
        <Background/>
        <Job />
      </div>
      <div>
        <div>
          <h3>Level 1</h3>
          <Abilities/>
          <Skills />
        </div>
      </div>
      <div>
        <CharacterSheet/>
      </div>
    </>
  )
}

export default MainPage; 