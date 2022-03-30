import { useEffect, useState } from 'react';
import Abilities from "./Abilities";
import Ancestry from "./Ancestry";
import Background from "./Background";
import CharacterSheet from "./CharacterSheet";
import Job from "./Job"
import Skills from "./Skills";




function MainPage() {
  const [character, setCharacter] = useState([])
  const [ancestry, setAncestry] = useState([])
  const [background, setBackground] = useState([])
  const [job, setJob] = useState([])
  const [toggle, setToggle] = useState([])

  useEffect(()=> {
      fetch((`./characters/${localStorage.getItem('characterId')}`))
      .then((response)=> response.json())
      .then((data)=> setCharacter(data))

      fetch((`./ancestries/${localStorage.getItem('characterId')}`))
      .then((response)=> response.json())
      .then((data)=> setAncestry(data))

      fetch((`./backgrounds/${localStorage.getItem('characterId')}`))
      .then((response)=> response.json())
      .then((data)=> setBackground(data))

      fetch((`./jobs/${localStorage.getItem('characterId')}`))
      .then((response)=> response.json())
      .then((data)=> setJob(data))

  }, [toggle])
  
  function update() {
    setToggle(!toggle)
  }
  
  return (
    <>
      <div>
        <Ancestry update={update}/>
        <Background update={update}/>
        <Job update={update}/>
      </div>
      <div>
        <div>
          <h3>Level 1</h3>
          <Abilities/>
          <Skills />
        </div>
      </div>
      <div>
        <CharacterSheet character={character} ancestry={ancestry} background={background} job={job}/>
      </div>
    </>
  )
}

export default MainPage; 